import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

async function updateMetadata() {
  const folder = 'public/images/menu-hd';
  const files = await fs.readdir(folder);
  const webpFiles = files.filter(f => f.endsWith('.webp'));

  const records = [];
  for (const file of webpFiles) {
    const filePath = path.join(folder, file);
    const id = file.replace('.webp', '');
    const meta = await sharp(filePath).metadata();
    const stats = await fs.stat(filePath);
    const sha = crypto.createHash('sha256').update(await fs.readFile(filePath)).digest('hex');

    let composition = 'Full regional biriyani portion';
    if (['ela-ada'].includes(id)) {
      composition = 'Type A: Banana leaf presentation (wrapped + open with filling)';
    } else if (['kesari', 'vada', 'pazham-pori', 'idli', 'poricha-pathiri'].includes(id)) {
      composition = 'Type B: Two-item presentation (curated balance & texture)';
    } else if (['sukhiyan', 'kozhukatta', 'cutlet', 'bonda', 'egg-bajji', 'egg-puffs', 'samosa', 'mulaku-bajji'].includes(id)) {
      composition = 'Type C: Whole + open cut presentation (revealing interior filling)';
    } else if (['parippu-vada', 'ulli-vada'].includes(id)) {
      composition = 'Type D: Authentic crunchy snack bites';
    }

    records.push({
      id,
      composition,
      image: `/images/menu-hd/${file}`,
      width: meta.width,
      height: meta.height,
      bytes: stats.size,
      sha256: sha
    });
  }

  await fs.writeFile(`${folder}/ASSETS.json`, JSON.stringify(records, null, 2) + '\n');
  await fs.writeFile(`${folder}/CREDITS.md`, `# Café Serenity — Refined Menu Visual Collection\n\nRefined 2026-11-06 with controlled presentation variety across all menu cards. Replaces the repetitive 3-on-a-plate formula with intentional art-directed compositions:\n\n- **Type A — Single Hero / Banana Leaf**: Ela Ada in traditional folded banana leaf with unwrapped sweet pocket\n- **Type B — Two-Item Duos**: Kesari (2 diamond cuts with saffron & cashews), Medu Vada (2 golden crispy vadas on banana leaf/slate), Pazham Pori (2 caramelized long plantain fritters on slate), Idli (2 fluffy steamed idlis on banana leaf), Poricha Pathiri\n- **Type C — Whole + Cut Open**: Sukhiyan (1 whole + 1 cut open showing green gram & jaggery), Kozhukatta (1 whole + 1 halved showing jaggery-coconut), Cutlet (1 whole + 1 broken open showing Kerala beetroot interior), Potato Bonda (1 whole + 1 halved showing spiced potato masala), Egg Bajji, Egg Puffs, Samosa, Mulaku Bajji\n- **Type D — Authentic Snack Bites**: Parippu Vada, Ulli Vada\n- **Biriyani Collection**: Eight distinct regional biriyani styles with authentic grain textures, garnishes and regional character.\n`);

  console.log(`Updated ASSETS.json with ${records.length} records`);
}

updateMetadata();

