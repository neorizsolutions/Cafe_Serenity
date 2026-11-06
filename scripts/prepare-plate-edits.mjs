// Convert native plate-only image edits and record their retained source files.
// Usage: node scripts/prepare-plate-edits.mjs path/to/session-manifest.json
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');

async function main() {
  const edits = JSON.parse(await fs.readFile(process.argv[2], 'utf8'));
  if (edits.length !== 32) throw new Error('Expected 24 dishes and eight Half servings');
  const folder = 'public/images/plate-edits';
  await fs.mkdir(folder, { recursive: true });
  const provenance = [];
  const tiles = [];
  for (const [index, edit] of edits.entries()) {
    if (!edit.path || edit.error) throw new Error(`Missing plate edit: ${edit.id}`);
    const target = `${folder}/${edit.id}.webp`;
    await sharp(edit.path).resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).webp({ quality: 90 }).toFile(target);
    provenance.push({
      id: edit.id,
      original: `/${path.relative('public', edit.source).replaceAll('\\', '/')}`,
      edited: `/images/plate-edits/${edit.id}.webp`,
      originalSha256: hash(await fs.readFile(edit.source)),
      editedSha256: hash(await fs.readFile(target)),
    });
    for (const [column, file] of [edit.source, target].entries()) {
      const thumbnail = await sharp(file).resize(260, 170, { fit: 'contain', background: '#fff9ee' }).png().toBuffer();
      const caption = Buffer.from(`<svg width="260" height="26"><rect width="260" height="26" fill="#151713"/><text x="8" y="17" fill="#fff2d4" font-family="Arial" font-size="11">${edit.id} · ${column ? 'edited plate' : 'original'}</text></svg>`);
      const tile = await sharp({ create: { width: 260, height: 196, channels: 3, background: '#fff9ee' } }).composite([{ input: thumbnail, left: 0, top: 0 }, { input: caption, left: 0, top: 170 }]).png().toBuffer();
      tiles.push({ input: tile, left: ((index % 2) * 2 + column) * 260, top: Math.floor(index / 2) * 196 });
    }
  }
  await fs.writeFile(`${folder}/EDIT-SOURCES.json`, JSON.stringify(provenance, null, 2) + '\n');
  await fs.writeFile(`${folder}/CREDITS.md`, '# Plate-only image edits\n\nCreated 2026-11-05 with OpenAI native image editing. Each retained original menu image was supplied individually as the edit target. Requested change: shallow matte charcoal ceramic plate with a fine bronze rim, preserving food identity, quantity, arrangement, camera angle and background. Generative edits are not a claim of pixel-identical food preservation.\n\nOriginal files are retained unchanged. EDIT-SOURCES.json records original and edited file hashes. WebP derivatives are optimised from generated PNG edits. The approved animated hero is not affected.\n');
  await sharp({ create: { width: 1040, height: Math.ceil(edits.length / 2) * 196, channels: 3, background: '#151713' } }).composite(tiles).jpeg({ quality: 90 }).toFile('docs/design-prototypes/plate-edits-review.jpg');
  console.log(`Prepared ${edits.length} plate edits, provenance and original/edit comparison sheet.`);
}

main().catch(error => { console.error(error); process.exitCode = 1; });
