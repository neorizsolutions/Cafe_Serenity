import sharp from 'sharp';
import fs from 'node:fs/promises';

const ITEMS = [
  {
    id: 'samosa-cutout',
    name: 'Samosa',
    rawPath: 'C:/Users/risal/.gemini/antigravity/brain/e2fcf78f-5f19-48fb-a4c1-447bfb92fe36/samosa_floating_raw_1793908723106.jpg',
    isBackground: (r, g, b) => {
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const chroma = max - min;
      // White background or faint gray studio gradient
      return min > 218 || (chroma < 35 && min > 150);
    }
  },
  {
    id: 'medu-vada-cutout',
    name: 'Medu Vada',
    rawPath: 'C:/Users/risal/.gemini/antigravity/brain/e2fcf78f-5f19-48fb-a4c1-447bfb92fe36/medu_vada_raw_jpg_1793908662364.jpg',
    isBackground: (r, g, b) => {
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const chroma = max - min;
      // Vada is rich golden brown with high chroma; background & hole are neutral light
      return min > 215 || (chroma < 30 && min > 160);
    },
    clearHole: true
  },
  {
    id: 'kerala-cutlet-cutout',
    name: 'Kerala Cutlet',
    rawPath: 'C:/Users/risal/.gemini/antigravity/brain/e2fcf78f-5f19-48fb-a4c1-447bfb92fe36/kerala_cutlet_raw_1793908675926.jpg',
    isBackground: (r, g, b) => {
      const min = Math.min(r, g, b);
      return min >= 235;
    }
  },
  {
    id: 'kesari-cutout',
    name: 'Kesari',
    rawPath: 'C:/Users/risal/.gemini/antigravity/brain/e2fcf78f-5f19-48fb-a4c1-447bfb92fe36/kesari_raw_1793908687660.jpg',
    isBackground: (r, g, b) => {
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const chroma = max - min;
      // Kesari is intensely saturated saffron (chroma > 60)
      return min > 215 || (chroma < 35 && min > 150);
    }
  },
  {
    id: 'ela-ada-cutout',
    name: 'Ela Ada',
    rawPath: 'C:/Users/risal/.gemini/antigravity/brain/e2fcf78f-5f19-48fb-a4c1-447bfb92fe36/ela_ada_raw_1793908699741.jpg',
    isBackground: (r, g, b) => {
      const min = Math.min(r, g, b);
      return min >= 238;
    }
  },
  {
    id: 'kozhukatta-cutout',
    name: 'Kozhukatta',
    rawPath: 'C:/Users/risal/.gemini/antigravity/brain/e2fcf78f-5f19-48fb-a4c1-447bfb92fe36/kozhukatta_raw_jpg_1793908712824.jpg',
    isBackground: (r, g, b) => {
      const min = Math.min(r, g, b);
      return min >= 235;
    }
  },
];

async function processItem(item) {
  console.log(`Processing ${item.name}...`);
  const image = sharp(item.rawPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const visited = new Uint8Array(width * height);
  const queue = [];

  // Enqueue 4 borders
  for (let x = 0; x < width; x++) {
    let topIdx = (0 * width + x) * channels;
    if (item.isBackground(data[topIdx], data[topIdx + 1], data[topIdx + 2])) {
      visited[x] = 1;
      queue.push(x, 0);
    }
    let botIdx = ((height - 1) * width + x) * channels;
    if (item.isBackground(data[botIdx], data[botIdx + 1], data[botIdx + 2])) {
      visited[(height - 1) * width + x] = 1;
      queue.push(x, height - 1);
    }
  }

  for (let y = 0; y < height; y++) {
    let lIdx = (y * width + 0) * channels;
    if (item.isBackground(data[lIdx], data[lIdx + 1], data[lIdx + 2])) {
      visited[y * width] = 1;
      queue.push(0, y);
    }
    let rIdx = (y * width + (width - 1)) * channels;
    if (item.isBackground(data[rIdx], data[rIdx + 1], data[rIdx + 2])) {
      visited[y * width + (width - 1)] = 1;
      queue.push(width - 1, y);
    }
  }

  // Also enqueue hole center for Medu Vada if specified
  if (item.clearHole) {
    const cx = Math.floor(width * 0.47);
    const cy = Math.floor(height * 0.44);
    const cIdx = (cy * width + cx) * channels;
    if (item.isBackground(data[cIdx], data[cIdx + 1], data[cIdx + 2])) {
      visited[cy * width + cx] = 1;
      queue.push(cx, cy);
    }
  }

  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];

    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!visited[nIdx]) {
          const pIdx = nIdx * channels;
          if (item.isBackground(data[pIdx], data[pIdx + 1], data[pIdx + 2])) {
            visited[nIdx] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
  }

  // Alpha assignment and edge softening
  for (let i = 0; i < width * height; i++) {
    const pIdx = i * channels;
    if (visited[i]) {
      data[pIdx + 3] = 0;
    } else {
      const x = i % width;
      const y = Math.floor(i / width);
      let transCount = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0) continue;
          const nx = x + dx;
          const ny = y + dy;
          if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
            if (visited[ny * width + nx]) transCount++;
          }
        }
      }
      if (transCount > 0) {
        const minVal = Math.min(data[pIdx], data[pIdx + 1], data[pIdx + 2]);
        if (minVal > 215) {
          data[pIdx + 3] = Math.max(0, Math.min(255, Math.round(255 * (1 - (minVal - 215) / (255 - 215)))));
        }
      }
    }
  }

  const outDir = 'public/images/cutouts';
  await fs.mkdir(outDir, { recursive: true });
  const pngPath = `${outDir}/${item.id}.png`;
  const webpPath = `${outDir}/${item.id}.webp`;

  // Trim and save PNG
  await sharp(data, { raw: { width, height, channels } })
    .trim({ threshold: 5 })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(pngPath);

  // Save WebP version
  await sharp(pngPath)
    .webp({ quality: 95, alphaQuality: 100, effort: 6 })
    .toFile(webpPath);

  // Copy to brain artifact dir for immediate review
  const brainDir = 'C:/Users/risal/.gemini/antigravity/brain/e2fcf78f-5f19-48fb-a4c1-447bfb92fe36';
  await fs.copyFile(pngPath, `${brainDir}/${item.id}.png`);
  await fs.copyFile(webpPath, `${brainDir}/${item.id}.webp`);

  const meta = await sharp(pngPath).metadata();
  console.log(`✓ ${item.name} refined: ${meta.width}x${meta.height}px`);
  return { id: item.id, name: item.name, width: meta.width, height: meta.height, pngPath, webpPath };
}

async function main() {
  const results = [];
  for (const item of ITEMS) {
    results.push(await processItem(item));
  }
  console.log('All 6 items processed and refined:', results);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
