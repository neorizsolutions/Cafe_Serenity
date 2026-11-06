import sharp from 'sharp';
import fs from 'node:fs/promises';

async function blendLeaf() {
  const masterPath = 'public/images/cutouts/breakfast-story-cutout.png';
  const realLeafPath = 'public/images/cutouts/breakfast-assembly/leaf-real.png';
  const outPath = 'public/images/cutouts/breakfast-assembly/leaf.png';
  const brainPath = 'C:/Users/risal/.gemini/antigravity/brain/e2fcf78f-5f19-48fb-a4c1-447bfb92fe36/breakfast-assembly/leaf.png';

  const master = sharp(masterPath);
  const { data: masterData, info: masterInfo } = await master.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = masterInfo;

  // Resize and position realLeaf to cover the master leaf dimensions
  const realLeafResized = await sharp(realLeafPath)
    .resize(width, height, { fit: 'fill' })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const realData = realLeafResized.data;

  const result = new Uint8Array(width * height * 4);

  // Helper to test if master pixel is visible leaf
  function isVisibleLeaf(r, g, b) {
    return (g >= 70 && (g - r >= 14) && (g - b >= 16)) || (g > 110 && r < 120 && b < 100);
  }

  for (let i = 0; i < width * height; i++) {
    const idx = i * 4;
    const masterA = masterData[idx + 3];
    if (masterA === 0) continue;

    const r = masterData[idx];
    const g = masterData[idx + 1];
    const b = masterData[idx + 2];

    if (isVisibleLeaf(r, g, b)) {
      // Use the actual master leaf pixel!
      result[idx] = r;
      result[idx + 1] = g;
      result[idx + 2] = b;
      result[idx + 3] = masterA;
    } else {
      // It was food area: use the authentic banana leaf texture from real leaf!
      result[idx] = realData[idx];
      result[idx + 1] = realData[idx + 1];
      result[idx + 2] = realData[idx + 2];
      result[idx + 3] = masterA; // keep exact master outer contour alpha
    }
  }

  await sharp(result, { raw: { width, height, channels: 4 } }).png().toFile(outPath);
  await sharp(outPath).webp({ quality: 95 }).toFile(outPath.replace('.png', '.webp'));
  await fs.copyFile(outPath, brainPath);
  await fs.copyFile(outPath.replace('.png', '.webp'), brainPath.replace('.png', '.webp'));
  console.log('Blended authentic banana leaf plate successfully!');
}

blendLeaf().catch(console.error);

