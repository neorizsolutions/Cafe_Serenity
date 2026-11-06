import sharp from 'sharp';
import fs from 'node:fs/promises';

async function main() {
  const outputDir = 'public/images/menu-hd';
  await fs.mkdir(outputDir, { recursive: true });

  const brainDir = 'C:/Users/risal/.gemini/antigravity/brain/e2fcf78f-5f19-48fb-a4c1-447bfb92fe36';

  // 1. Sukhiyan - from newly generated cafe_serenity_sukhiyan_1793952750061.jpg
  console.log('Processing sukhiyan...');
  await sharp(`${brainDir}/cafe_serenity_sukhiyan_1793952750061.jpg`)
    .resize(1024, 1024, { fit: 'cover' })
    .webp({ quality: 92, effort: 6 })
    .toFile(`${outputDir}/sukhiyan.webp`);

  // 2. Kesari - from newly generated cafe_serenity_kesari_1793952812049.jpg
  console.log('Processing kesari...');
  await sharp(`${brainDir}/cafe_serenity_kesari_1793952812049.jpg`)
    .resize(1024, 1024, { fit: 'cover' })
    .webp({ quality: 92, effort: 6 })
    .toFile(`${outputDir}/kesari.webp`);

  // 3. Ela Ada - from newly generated cafe_serenity_ela_ada_1793952867952.jpg
  console.log('Processing ela-ada...');
  await sharp(`${brainDir}/cafe_serenity_ela_ada_1793952867952.jpg`)
    .resize(1024, 1024, { fit: 'cover' })
    .webp({ quality: 92, effort: 6 })
    .toFile(`${outputDir}/ela-ada.webp`);

  // 4. Kozhukatta - from newly generated cafe_serenity_kozhukatta_1793952922162.jpg
  console.log('Processing kozhukatta...');
  await sharp(`${brainDir}/cafe_serenity_kozhukatta_1793952922162.jpg`)
    .resize(1024, 1024, { fit: 'cover' })
    .webp({ quality: 92, effort: 6 })
    .toFile(`${outputDir}/kozhukatta.webp`);

  // 5. Cutlet - from newly generated cafe_serenity_cutlet_1793952987067.jpg
  console.log('Processing cutlet...');
  await sharp(`${brainDir}/cafe_serenity_cutlet_1793952987067.jpg`)
    .resize(1024, 1024, { fit: 'cover' })
    .webp({ quality: 92, effort: 6 })
    .toFile(`${outputDir}/cutlet.webp`);

  // 6. Vada - from newly generated cafe_serenity_vada_1793953050249.jpg
  console.log('Processing vada...');
  await sharp(`${brainDir}/cafe_serenity_vada_1793953050249.jpg`)
    .resize(1024, 1024, { fit: 'cover' })
    .webp({ quality: 92, effort: 6 })
    .toFile(`${outputDir}/vada.webp`);

  // 7. Bonda - from newly generated cafe_serenity_bonda_v2_1793953133769.jpg
  console.log('Processing bonda...');
  await sharp(`${brainDir}/cafe_serenity_bonda_v2_1793953133769.jpg`)
    .resize(1024, 1024, { fit: 'cover' })
    .webp({ quality: 92, effort: 6 })
    .toFile(`${outputDir}/bonda.webp`);

  // 8. Pazham Pori - from newly generated cafe_serenity_pazham_pori_1793953174902.jpg
  console.log('Processing pazham-pori...');
  await sharp(`${brainDir}/cafe_serenity_pazham_pori_1793953174902.jpg`)
    .resize(1024, 1024, { fit: 'cover' })
    .webp({ quality: 92, effort: 6 })
    .toFile(`${outputDir}/pazham-pori.webp`);

  // 9. Idli - from rustic banana leaf morning photo (2 fluffy steamed idlis)
  console.log('Processing idli...');
  await sharp('public/images/early-morning-5am.webp')
    .extract({ left: 750, top: 380, width: 520, height: 388 })
    .resize(1024, 1024, { fit: 'cover', position: 'center' })
    .webp({ quality: 92, effort: 6 })
    .toFile(`${outputDir}/idli.webp`);

  // 10. Egg Bajji - from test composite with dark plate & shadow (1 whole + 1 halved showing yolk)
  console.log('Processing egg-bajji...');
  await sharp(`${brainDir}/test-egg-bajji-plate.webp`)
    .resize(1024, 1024, { fit: 'cover' })
    .webp({ quality: 92, effort: 6 })
    .toFile(`${outputDir}/egg-bajji.webp`);

  // 11. Egg Puffs - from test composite with dark plate & shadow (1 whole + 1 cut open showing egg & masala)
  console.log('Processing egg-puffs...');
  await sharp(`${brainDir}/test-egg-puffs-plate.webp`)
    .resize(1024, 1024, { fit: 'cover' })
    .webp({ quality: 92, effort: 6 })
    .toFile(`${outputDir}/egg-puffs.webp`);

  // 12. Samosa - studio 2-samosa arrangement on dark plate
  console.log('Processing samosa...');
  const samosaCutout = await sharp('public/images/menu-studio/samosa.webp')
    .resize(820, 750, { fit: 'contain' })
    .toBuffer();

  const plateSvg = Buffer.from(`
    <svg width="1024" height="1024" viewBox="0 0 1024 1024">
      <defs>
        <radialGradient id="slateGrad" cx="48%" cy="46%" r="52%">
          <stop offset="0%" stop-color="#242721"/>
          <stop offset="55%" stop-color="#181a15"/>
          <stop offset="85%" stop-color="#121410"/>
          <stop offset="100%" stop-color="#0c0e0b"/>
        </radialGradient>
        <radialGradient id="rimGrad" cx="50%" cy="50%" r="50%">
          <stop offset="90%" stop-color="#1c1f19" stop-opacity="0"/>
          <stop offset="96%" stop-color="#36392f" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#21241c" stop-opacity="0.9"/>
        </radialGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="25" stdDeviation="35" flood-color="#000000" flood-opacity="0.85"/>
        </filter>
      </defs>
      <rect width="1024" height="1024" fill="#151713"/>
      <circle cx="512" cy="512" r="440" fill="url(#slateGrad)" filter="url(#shadow)"/>
      <circle cx="512" cy="512" r="440" fill="url(#rimGrad)"/>
      <circle cx="512" cy="512" r="438" fill="none" stroke="#484438" stroke-width="1.5" stroke-opacity="0.35"/>
    </svg>
  `);
  const plateBase = await sharp(plateSvg).png().toBuffer();

  await sharp(plateBase)
    .composite([{ input: samosaCutout, left: 102, top: 137 }])
    .webp({ quality: 92, effort: 6 })
    .toFile(`${outputDir}/samosa.webp`);

  // 13. Mulaku Bajji - studio bajjis on dark slate plate
  console.log('Processing mulaku-bajji...');
  const bajjiCutout = await sharp('public/images/menu-studio/mulaku-bajji.webp')
    .resize(820, 547, { fit: 'contain' })
    .toBuffer();

  await sharp(plateBase)
    .composite([{ input: bajjiCutout, left: 102, top: 238 }])
    .webp({ quality: 92, effort: 6 })
    .toFile(`${outputDir}/mulaku-bajji.webp`);

  // 14. Parippu Vada - coarse dal vadas on dark plate
  console.log('Processing parippu-vada...');
  const pvCutout = await sharp('public/images/menu-studio/parippu-vada.webp')
    .resize(800, 533, { fit: 'contain' })
    .toBuffer();

  await sharp(plateBase)
    .composite([{ input: pvCutout, left: 112, top: 245 }])
    .webp({ quality: 92, effort: 6 })
    .toFile(`${outputDir}/parippu-vada.webp`);

  // 15. Ulli Vada - tangled onion fritters on dark plate
  console.log('Processing ulli-vada...');
  const uvCutout = await sharp('public/images/menu-studio/ulli-vada.webp')
    .resize(800, 533, { fit: 'contain' })
    .toBuffer();

  await sharp(plateBase)
    .composite([{ input: uvCutout, left: 112, top: 245 }])
    .webp({ quality: 92, effort: 6 })
    .toFile(`${outputDir}/ulli-vada.webp`);

  // 16. Poricha Pathiri - puffed golden pathiris on dark plate
  console.log('Processing poricha-pathiri...');
  const ppCutout = await sharp('public/images/menu-studio/poricha-pathiri.webp')
    .resize(800, 533, { fit: 'contain' })
    .toBuffer();

  await sharp(plateBase)
    .composite([{ input: ppCutout, left: 112, top: 245 }])
    .webp({ quality: 92, effort: 6 })
    .toFile(`${outputDir}/poricha-pathiri.webp`);

  console.log('All 16 snacks & sweets prepared successfully!');

  // Create a 24-dish contact sheet of the new menu grid for review!
  const allDishes = [
    'hyderabadi-biriyani', 'thalappakatti-biriyani', 'chettinad-biriyani', 'ravuthar-biriyani',
    'ambur-biriyani', 'dhilli-darbar-biriyani', 'kozhikode-biriyani', 'malabar-biriyani',
    'sukhiyan', 'kesari', 'ela-ada', 'kozhukatta',
    'cutlet', 'vada', 'bonda', 'pazham-pori',
    'egg-bajji', 'egg-puffs', 'idli', 'mulaku-bajji',
    'samosa', 'parippu-vada', 'ulli-vada', 'poricha-pathiri'
  ];

  const tiles = [];
  for (let i = 0; i < allDishes.length; i++) {
    const id = allDishes[i];
    const imgBuf = await sharp(`public/images/menu-hd/${id}.webp`)
      .resize(250, 250, { fit: 'cover' })
      .toBuffer();
    const svgLabel = Buffer.from(`<svg width="250" height="30"><rect width="250" height="30" fill="#151713"/><text x="10" y="20" fill="#FFF9EE" font-family="sans-serif" font-size="13">${id}</text></svg>`);
    const tile = await sharp({ create: { width: 250, height: 280, channels: 3, background: '#1c1f19' } })
      .composite([{ input: imgBuf, left: 0, top: 0 }, { input: svgLabel, left: 0, top: 250 }])
      .png()
      .toBuffer();
    tiles.push({ input: tile, left: (i % 4) * 250, top: Math.floor(i / 4) * 280 });
  }

  await sharp({ create: { width: 1000, height: Math.ceil(allDishes.length / 4) * 280, channels: 3, background: '#151713' } })
    .composite(tiles)
    .jpeg({ quality: 92 })
    .toFile(`${brainDir}/refined-menu-grid-review.jpg`);

  console.log('Saved refined-menu-grid-review.jpg in artifact directory!');
}

main().catch(err => {
  console.error(err);
  process.exitCode = 1;
});
