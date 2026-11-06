// Preserve native image dimensions and transparent edges for the menu collection.
// Usage: node scripts/prepare-menu-hd.mjs path/to/session-manifest.json
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

async function main() {
  const assets = JSON.parse(await fs.readFile(process.argv[2], 'utf8'));
  if (assets.length !== 24) throw new Error('Expected one image for each of the 24 dishes');
  const folder = 'public/images/menu-hd';
  await fs.mkdir(folder, { recursive: true });
  const records = [];
  const tiles = [];
  for (const [index, asset] of assets.entries()) {
    if (!asset.path || asset.error) throw new Error(`Missing output: ${asset.id}`);
    const output = `${folder}/${asset.id}.webp`;
    // No resize or upscale: keep all of the generated source detail.
    await sharp(asset.path).webp({ quality: 96, alphaQuality: 100, effort: 6 }).toFile(output);
    const metadata = await sharp(output).metadata();
    const stats = await sharp(output).stats();
    if (!metadata.hasAlpha || stats.channels[3].min !== 0) throw new Error(`Opaque surround: ${asset.id}`);
    if (metadata.width < 1000 || metadata.height < 1000) throw new Error(`Source too small: ${asset.id}`);
    records.push({ id: asset.id, generationMode: asset.compositionCorrection ? 'fresh composition from dish brief' : 'source-referenced', reference: `/${path.relative('public', asset.source).replaceAll('\\', '/')}`, image: `/images/menu-hd/${asset.id}.webp`, width: metadata.width, height: metadata.height, bytes: (await fs.stat(output)).size, sha256: crypto.createHash('sha256').update(await fs.readFile(output)).digest('hex') });
    const background = asset.id.includes('biriyani') ? '#38291e' : ['kesari', 'sukhiyan', 'ela-ada', 'kozhukatta'].includes(asset.id) ? '#3f2e26' : '#263a2d';
    const thumbnail = await sharp(output).resize(280, 240, { fit: 'contain', background }).flatten({ background }).png().toBuffer();
    const caption = Buffer.from(`<svg width="280" height="28"><rect width="280" height="28" fill="${background}"/><text x="8" y="18" fill="#fff2d4" font-size="12" font-family="Arial">${asset.id}</text></svg>`);
    const tile = await sharp({ create: { width: 280, height: 268, channels: 3, background } }).composite([{ input: thumbnail, left: 0, top: 0 }, { input: caption, left: 0, top: 240 }]).png().toBuffer();
    tiles.push({ input: tile, left: (index % 4) * 280, top: Math.floor(index / 4) * 268 });
  }
  await fs.writeFile(`${folder}/ASSETS.json`, JSON.stringify(records, null, 2) + '\n');
  await fs.writeFile(`${folder}/CREDITS.md`, '# Clear menu collection\n\nRegenerated 2026-11-05 using OpenAI native image generation with the original menu images as food-identity references. These are illustrative food images, not verified actual Café Serenity product photographs. Each prompt specifies the named dish and its distinguishing food details.\n\nConsistent top-down matte charcoal plates with hairline bronze rims, transparent surrounds and natural studio lighting. Only Full biriyani images are used. Native dimensions are retained in high-quality WebP derivatives; refreshed food is delivered at Next.js quality 90. Original images and earlier variants are preserved. ASSETS.json records reference paths, dimensions, sizes and hashes.\n');
  await sharp({ create: { width: 1120, height: Math.ceil(assets.length / 4) * 268, channels: 3, background: '#151713' } }).composite(tiles).jpeg({ quality: 94 }).toFile('docs/design-prototypes/menu-clarity-review.jpg');
  console.log(JSON.stringify({ images: records.length, totalMB: (records.reduce((sum, asset) => sum + asset.bytes, 0) / 1048576).toFixed(2), dimensions: [...new Set(records.map(asset => `${asset.width}x${asset.height}`))] }));
}

main().catch(error => { console.error(error); process.exitCode = 1; });
