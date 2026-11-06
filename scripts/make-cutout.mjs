import sharp from 'sharp';

async function makeTransparent(inputPath, outputPath, options = {}) {
  const minChromaCutoff = options.minChromaCutoff ?? 35;
  const minBrightness = options.minBrightness ?? 50;
  
  const image = sharp(inputPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const visited = new Uint8Array(width * height);
  const queue = [];

  function isBackgroundPixel(r, g, b) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const chroma = max - min;

    // Pure white or near-white background
    if (min > 232) return true;

    // Neutral gray cast shadow: desaturated and sufficiently light
    if (chroma < minChromaCutoff && min > minBrightness) return true;

    return false;
  }

  // Enqueue all border pixels meeting background criterion
  for (let x = 0; x < width; x++) {
    // Top border
    let idx = (0 * width + x) * channels;
    if (isBackgroundPixel(data[idx], data[idx + 1], data[idx + 2])) {
      visited[0 * width + x] = 1;
      queue.push(x, 0);
    }
    // Bottom border
    let bIdx = ((height - 1) * width + x) * channels;
    if (isBackgroundPixel(data[bIdx], data[bIdx + 1], data[bIdx + 2])) {
      visited[(height - 1) * width + x] = 1;
      queue.push(x, height - 1);
    }
  }

  for (let y = 0; y < height; y++) {
    // Left border
    let idx = (y * width + 0) * channels;
    if (isBackgroundPixel(data[idx], data[idx + 1], data[idx + 2])) {
      visited[y * width + 0] = 1;
      queue.push(0, y);
    }
    // Right border
    let rIdx = (y * width + (width - 1)) * channels;
    if (isBackgroundPixel(data[rIdx], data[rIdx + 1], data[rIdx + 2])) {
      visited[y * width + (width - 1)] = 1;
      queue.push(width - 1, y);
    }
  }

  // BFS Flood Fill from edges
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
        const nIndex = ny * width + nx;
        if (!visited[nIndex]) {
          const pIdx = nIndex * channels;
          const r = data[pIdx];
          const g = data[pIdx + 1];
          const b = data[pIdx + 2];
          if (isBackgroundPixel(r, g, b)) {
            visited[nIndex] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
  }

  // Apply transparency and anti-alias border edges
  for (let i = 0; i < width * height; i++) {
    const pIdx = i * channels;
    if (visited[i]) {
      data[pIdx + 3] = 0; // Transparent
    } else {
      const x = i % width;
      const y = Math.floor(i / width);
      let transparentNeighbors = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0) continue;
          const nx = x + dx;
          const ny = y + dy;
          if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
            if (visited[ny * width + nx]) transparentNeighbors++;
          }
        }
      }
      if (transparentNeighbors > 0) {
        const r = data[pIdx];
        const g = data[pIdx + 1];
        const b = data[pIdx + 2];
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const chroma = max - min;
        if (min > 220 || (chroma < 35 && min > 120)) {
          data[pIdx + 3] = Math.max(0, Math.min(255, Math.round(255 * (1 - (min - 120) / 135))));
        }
      }
    }
  }

  // Save as trimmed PNG
  await sharp(data, { raw: { width, height, channels } })
    .trim({ threshold: 5 })
    .png()
    .toFile(outputPath);

  console.log(`Saved transparent cutout to: ${outputPath}`);
}

const [,, input, output] = process.argv;
makeTransparent(input, output).catch(err => {
  console.error(err);
  process.exit(1);
});
