import sharp from 'sharp';
import fs from 'node:fs/promises';

async function makeCutout() {
  const inputPath = 'C:/Users/risal/.gemini/antigravity/brain/e2fcf78f-5f19-48fb-a4c1-447bfb92fe36/breakfast_trio_cutout_raw_1793946292264.jpg';
  const outDir = 'public/images/cutouts';
  await fs.mkdir(outDir, { recursive: true });
  const pngPath = `${outDir}/breakfast-story-cutout.png`;
  const webpPath = `${outDir}/breakfast-story-cutout.webp`;
  const brainDir = 'C:/Users/risal/.gemini/antigravity/brain/e2fcf78f-5f19-48fb-a4c1-447bfb92fe36';

  const image = sharp(inputPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const visited = new Uint8Array(width * height);
  const queue = [];

  function isBackground(r, g, b) {
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const chroma = max - min;
    // Pure white or faint studio backdrop (neutral)
    return min >= 235 && chroma < 30;
  }

  // Enqueue 4 borders
  for (let x = 0; x < width; x++) {
    let topIdx = (0 * width + x) * channels;
    if (isBackground(data[topIdx], data[topIdx + 1], data[topIdx + 2])) {
      visited[x] = 1;
      queue.push(x, 0);
    }
    let botIdx = ((height - 1) * width + x) * channels;
    if (isBackground(data[botIdx], data[botIdx + 1], data[botIdx + 2])) {
      visited[(height - 1) * width + x] = 1;
      queue.push(x, height - 1);
    }
  }

  for (let y = 0; y < height; y++) {
    let lIdx = (y * width + 0) * channels;
    if (isBackground(data[lIdx], data[lIdx + 1], data[lIdx + 2])) {
      visited[y * width] = 1;
      queue.push(0, y);
    }
    let rIdx = (y * width + (width - 1)) * channels;
    if (isBackground(data[rIdx], data[rIdx + 1], data[rIdx + 2])) {
      visited[y * width + (width - 1)] = 1;
      queue.push(width - 1, y);
    }
  }

  // BFS
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
          if (isBackground(data[pIdx], data[pIdx + 1], data[pIdx + 2])) {
            visited[nIdx] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
  }

  // Alpha assignment and antialiasing
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
        const chroma = Math.max(data[pIdx], data[pIdx + 1], data[pIdx + 2]) - minVal;
        if (minVal > 215 && chroma < 25) {
          data[pIdx + 3] = Math.max(0, Math.min(255, Math.round(255 * (1 - (minVal - 215) / (255 - 215)))));
        }
      }
    }
  }

  // Trim and save PNG
  await sharp(data, { raw: { width, height, channels } })
    .trim({ threshold: 5 })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(pngPath);

  // Save WebP
  await sharp(pngPath)
    .webp({ quality: 92, alphaQuality: 100, effort: 6 })
    .toFile(webpPath);

  // Copy to brain artifact directory
  await fs.copyFile(pngPath, `${brainDir}/breakfast-story-cutout.png`);
  await fs.copyFile(webpPath, `${brainDir}/breakfast-story-cutout.webp`);

  const meta = await sharp(pngPath).metadata();
  console.log(`Saved transparent breakfast cutout: ${meta.width}x${meta.height}px`);
}

makeCutout().catch(err => {
  console.error(err);
  process.exit(1);
});

