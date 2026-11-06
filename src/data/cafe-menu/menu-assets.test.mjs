import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import ts from 'typescript';
import sharp from 'sharp';
import { getMenuCollection } from './collections.ts';

// Load the real menu data without a bundler or the app's TypeScript path aliases.
const source = await readFile(new URL('./items.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
const { CAFE_ITEMS } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);

test('all 24 dishes have detailed transparent imagery; portions and prices are preserved', async () => {
  assert.equal(CAFE_ITEMS.length, 24);
  const counts = { biriyani: 0, savouries: 0, sweets: 0 };
  const hashes = new Set();
  for (const item of CAFE_ITEMS) {
    counts[getMenuCollection(item)]++;
    assert.equal(item.imageSrc, `/images/menu-hd/${item.id}.webp`);
    const image = await readFile(new URL(`../../../public${item.imageSrc}`, import.meta.url));
    assert.equal(image.toString('ascii', 8, 12), 'WEBP');
    const metadata = await sharp(image).metadata();
    assert.ok(metadata.width >= 1000 && metadata.height >= 1000, `${item.name} needs a high-resolution source`);
    assert.ok(metadata.hasAlpha, `${item.name} needs a transparent surround`);
    const stats = await sharp(image).stats();
    assert.equal(stats.channels[3].min, 0, `${item.name} must not have an opaque white surround`);
    hashes.add(createHash('sha256').update(image).digest('hex'));
    if (item.portions) {
      assert.deepEqual(item.portions, { half: 90, full: 150 });
      assert.equal(item.portionImages, undefined, 'Use one Full image for both portion choices');
    } else {
      assert.equal(item.price, item.id === 'egg-puffs' ? 15 : 12);
    }
  }
  assert.equal(hashes.size, 24);
  assert.deepEqual(counts, { biriyani: 8, savouries: 12, sweets: 4 });
});

test('plate edits retain a verifiable, untouched original for every serving image', async () => {
  const provenance = JSON.parse(await readFile(new URL('../../../public/images/plate-edits/EDIT-SOURCES.json', import.meta.url), 'utf8'));
  assert.equal(provenance.length, 32);
  for (const entry of provenance) {
    assert.ok(entry.original.startsWith('/images/'));
    assert.ok(!entry.original.includes('plate-edits'));
    const original = await readFile(new URL(`../../../public${entry.original}`, import.meta.url));
    assert.equal(createHash('sha256').update(original).digest('hex'), entry.originalSha256);
    const edited = await readFile(new URL(`../../../public${entry.edited}`, import.meta.url));
    assert.equal(createHash('sha256').update(edited).digest('hex'), entry.editedSha256);
  }
});
