import sharp from 'sharp';
import fs from 'node:fs/promises';

async function sliceLayers() {
  const inputPath = 'public/images/cutouts/breakfast-story-cutout.png';
  const outDir = 'public/images/cutouts/breakfast-layers';
  await fs.mkdir(outDir, { recursive: true });
  const brainDir = 'C:/Users/risal/.gemini/antigravity/brain/e2fcf78f-5f19-48fb-a4c1-447bfb92fe36/breakfast-layers';
  await fs.mkdir(brainDir, { recursive: true });

  const image = sharp(inputPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  // Let's create layer buffers:
  // 1. leafBuffer
  // 2. chutneyBuffer
  // 3. sambarBuffer
  // 4. vadaBuffer
  // 5. idli1Buffer (top)
  // 6. idli2Buffer (mid)
  // 7. idli3Buffer (front)

  const leaf = new Uint8Array(width * height * 4);
  const chutney = new Uint8Array(width * height * 4);
  const sambar = new Uint8Array(width * height * 4);
  const vada = new Uint8Array(width * height * 4);
  const idli1 = new Uint8Array(width * height * 4);
  const idli2 = new Uint8Array(width * height * 4);
  const idli3 = new Uint8Array(width * height * 4);
  const idlisAll = new Uint8Array(width * height * 4);

  // Helper to test if a pixel is green leaf
  function isLeafPixel(r, g, b) {
    return (g > r + 10 && g > b + 15) || (g > 90 && r < 110 && b < 80);
  }

  // Helper geometry
  function distSq(x1, y1, x2, y2, scaleX = 1, scaleY = 1) {
    const dx = (x1 - x2) * scaleX;
    const dy = (y1 - y2) * scaleY;
    return dx * dx + dy * dy;
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const a = data[idx + 3];
      if (a < 10) continue;

      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      const isGreen = isLeafPixel(r, g, b);

      // Distances to element centers
      const dChutney = distSq(x, y, 638, 145, 1, 1.15);
      const dSambar = distSq(x, y, 792, 442, 1, 1.15);
      const dVada = distSq(x, y, 520, 530, 1, 1.05);
      const dIdliFront = distSq(x, y, 280, 510, 1, 1.05);
      const dIdliMid = distSq(x, y, 205, 360, 1, 1.05);
      const dIdliTop = distSq(x, y, 375, 230, 1, 1.05);

      // 1. Sambar bowl check:
      // Radius ~135. Notice sambar is to the right of vada
      if (dSambar < 138 * 138 && !isGreen && (x > 645 || y > 350 && x > 640)) {
        sambar[idx] = r; sambar[idx + 1] = g; sambar[idx + 2] = b; sambar[idx + 3] = a;
        continue;
      }

      // 2. Chutney bowl check:
      // Radius ~120. Top right
      if (dChutney < 124 * 124 && !isGreen && y < 330 && x > 495) {
        chutney[idx] = r; chutney[idx + 1] = g; chutney[idx + 2] = b; chutney[idx + 3] = a;
        continue;
      }

      // 3. Medu Vada check:
      // Radius ~138.
      if (dVada < 135 * 135 && !isGreen) {
        vada[idx] = r; vada[idx + 1] = g; vada[idx + 2] = b; vada[idx + 3] = a;
        continue;
      }

      // 4. Idlis:
      // Check which idli center is closest
      if (!isGreen && (x < 510 && y < 620)) {
        idlisAll[idx] = r; idlisAll[idx + 1] = g; idlisAll[idx + 2] = b; idlisAll[idx + 3] = a;

        if (dIdliFront < dIdliMid && dIdliFront < dIdliTop && y > 380) {
          idli3[idx] = r; idli3[idx + 1] = g; idli3[idx + 2] = b; idli3[idx + 3] = a;
        } else if (dIdliMid < dIdliTop) {
          idli2[idx] = r; idli2[idx + 1] = g; idli2[idx + 2] = b; idli2[idx + 3] = a;
        } else {
          idli1[idx] = r; idli1[idx + 1] = g; idli1[idx + 2] = b; idli1[idx + 3] = a;
        }
        continue;
      }

      // 5. Leaf
      leaf[idx] = r; leaf[idx + 1] = g; leaf[idx + 2] = b; leaf[idx + 3] = a;
    }
  }

  // Save the sliced layers
  async function saveLayer(buf, filename) {
    const p1 = `${outDir}/${filename}`;
    const p2 = `${brainDir}/${filename}`;
    await sharp(buf, { raw: { width, height, channels: 4 } }).png().toFile(p1);
    await fs.copyFile(p1, p2);
    console.log(`Saved ${filename}`);
  }

  await saveLayer(leaf, 'layer-leaf.png');
  await saveLayer(chutney, 'layer-chutney.png');
  await saveLayer(sambar, 'layer-sambar.png');
  await saveLayer(vada, 'layer-vada.png');
  await saveLayer(idlisAll, 'layer-idlis.png');
  await saveLayer(idli1, 'layer-idli-top.png');
  await saveLayer(idli2, 'layer-idli-mid.png');
  await saveLayer(idli3, 'layer-idli-front.png');
}

sliceLayers().catch(err => {
  console.error(err);
  process.exit(1);
});

