import sharp from 'sharp';
import fs from 'node:fs/promises';

async function main() {
  const masterPath = 'public/images/cutouts/breakfast-story-cutout.png';
  const outDir = 'public/images/cutouts/breakfast-assembly';
  await fs.mkdir(outDir, { recursive: true });
  const brainDir = 'C:/Users/risal/.gemini/antigravity/brain/e2fcf78f-5f19-48fb-a4c1-447bfb92fe36/breakfast-assembly';
  await fs.mkdir(brainDir, { recursive: true });

  const image = sharp(masterPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  // Buffers for layers:
  const bufLeaf = new Uint8Array(width * height * 4);
  const bufChutney = new Uint8Array(width * height * 4);
  const bufSambar = new Uint8Array(width * height * 4);
  const bufVada = new Uint8Array(width * height * 4);
  const bufIdli1 = new Uint8Array(width * height * 4); // Top
  const bufIdli2 = new Uint8Array(width * height * 4); // Mid
  const bufIdli3 = new Uint8Array(width * height * 4); // Front
  const bufIdlisCombined = new Uint8Array(width * height * 4);

  // We want to detect food vs leaf precisely.
  // In breakfast-story-cutout.png:
  // Green leaf has: g >= 70, (g - r >= 12), and (g - b >= 15).
  // Everything else that is opaque is food!
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const a = data[idx + 3];
      if (a < 10) continue;

      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      const isGreen = (g >= 70 && (g - r >= 14) && (g - b >= 16)) || (g > 110 && r < 120 && b < 100);

      if (isGreen) {
        // Belongs to leaf
        bufLeaf[idx] = r;
        bufLeaf[idx + 1] = g;
        bufLeaf[idx + 2] = b;
        bufLeaf[idx + 3] = a;
        continue;
      }

      // Not green leaf -> Food or bowl!
      // 1. Sambar bowl:
      // It sits on the right. x > 640 and y > 260
      if (x >= 645 && y >= 265) {
        bufSambar[idx] = r; bufSambar[idx + 1] = g; bufSambar[idx + 2] = b; bufSambar[idx + 3] = a;
        continue;
      }

      // 2. Chutney bowl:
      // Sits on top right. x >= 495 and y <= 315
      if (x >= 495 && y <= 315) {
        bufChutney[idx] = r; bufChutney[idx + 1] = g; bufChutney[idx + 2] = b; bufChutney[idx + 3] = a;
        continue;
      }

      // 3. Medu Vada:
      // Sits in center front. x between 360 and 665, y between 380 and 648
      if (x >= 360 && x <= 665 && y >= 390) {
        bufVada[idx] = r; bufVada[idx + 1] = g; bufVada[idx + 2] = b; bufVada[idx + 3] = a;
        continue;
      }

      // 4. Idlis:
      // Sits on the left side
      bufIdlisCombined[idx] = r; bufIdlisCombined[idx + 1] = g; bufIdlisCombined[idx + 2] = b; bufIdlisCombined[idx + 3] = a;

      // Distribute into 3 idlis based on centroids:
      // Idli 3 (Front): x ~ 280, y ~ 500
      // Idli 2 (Mid): x ~ 205, y ~ 350
      // Idli 1 (Top): x ~ 370, y ~ 240
      const d1 = (x - 370) ** 2 + (y - 240) ** 2;
      const d2 = (x - 205) ** 2 + (y - 350) ** 2;
      const d3 = (x - 280) ** 2 + (y - 500) ** 2;

      if (d3 <= d1 && d3 <= d2 && y >= 380) {
        bufIdli3[idx] = r; bufIdli3[idx + 1] = g; bufIdli3[idx + 2] = b; bufIdli3[idx + 3] = a;
      } else if (d2 <= d1) {
        bufIdli2[idx] = r; bufIdli2[idx + 1] = g; bufIdli2[idx + 2] = b; bufIdli2[idx + 3] = a;
      } else {
        bufIdli1[idx] = r; bufIdli1[idx + 1] = g; bufIdli1[idx + 2] = b; bufIdli1[idx + 3] = a;
      }
    }
  }

  // Now, for the banana leaf underlay:
  // In bufLeaf, the interior has holes where the food sits.
  // We want to fill the interior of the leaf so it looks whole!
  // How? Where data has alpha > 0 (inside the leaf boundary), if bufLeaf has a === 0,
  // we sample/synthesize the green leaf color (e.g. from the surrounding leaf pixels at the same rib angle)!
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      if (data[idx + 3] > 0 && bufLeaf[idx + 3] === 0) {
        // Interior where food was sitting.
        // Interpolate green leaf texture based on position and leaf veins
        // Typical banana leaf green: R=95, G=140, B=65 with subtle ribs
        const rib = Math.sin((x * 0.7 + y * 0.4) * 0.15) * 8;
        bufLeaf[idx] = Math.max(0, Math.min(255, Math.round(95 + rib)));
        bufLeaf[idx + 1] = Math.max(0, Math.min(255, Math.round(145 + rib * 1.2)));
        bufLeaf[idx + 2] = Math.max(0, Math.min(255, Math.round(62 + rib * 0.8)));
        bufLeaf[idx + 3] = data[idx + 3]; // match master contour alpha
      }
    }
  }

  // Save all layers
  async function writeLayer(buffer, filename) {
    const p1 = `${outDir}/${filename}`;
    const p2 = `${brainDir}/${filename}`;
    await sharp(buffer, { raw: { width, height, channels: 4 } })
      .png({ quality: 100, compressionLevel: 9 })
      .toFile(p1);
    await sharp(p1).webp({ quality: 95, effort: 5 }).toFile(p1.replace('.png', '.webp'));
    await fs.copyFile(p1, p2);
    await fs.copyFile(p1.replace('.png', '.webp'), p2.replace('.png', '.webp'));
    console.log(`✓ Generated ${filename}`);
  }

  await writeLayer(bufLeaf, 'leaf.png');
  await writeLayer(bufChutney, 'chutney.png');
  await writeLayer(bufSambar, 'sambar.png');
  await writeLayer(bufVada, 'vada.png');
  await writeLayer(bufIdlisCombined, 'idlis.png');
  await writeLayer(bufIdli1, 'idli-top.png');
  await writeLayer(bufIdli2, 'idli-mid.png');
  await writeLayer(bufIdli3, 'idli-front.png');

  console.log('All breakfast assembly layers created successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

