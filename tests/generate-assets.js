const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const ICON_SVG_PATH = path.join(__dirname, '..', 'public', 'brand', 'cafe-serenity-icon.svg');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

const SIZES = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-icon-192.png', size: 192 },
  { name: 'android-icon-512.png', size: 512 }
];

async function generate() {
  console.log('Reading SVG icon...');
  let svgContent;
  try {
    svgContent = fs.readFileSync(ICON_SVG_PATH, 'utf8');
  } catch (err) {
    console.error('Error reading SVG icon:', err.message);
    process.exit(1);
  }

  console.log('Launching Puppeteer browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Make the page load the raw SVG inline
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body, html { width: 100%; height: 100%; background: transparent; overflow: hidden; display: flex; align-items: center; justify-content: center; }
          svg { width: 100%; height: 100%; display: block; }
        </style>
      </head>
      <body>
        ${svgContent}
      </body>
    </html>
  `;

  await page.setContent(html);

  for (const item of SIZES) {
    console.log(`Rendering ${item.name} (${item.size}x${item.size})...`);
    await page.setViewport({ width: item.size, height: item.size, deviceScaleFactor: 1 });
    
    // Slight delay to ensure render
    await new Promise(r => setTimeout(r, 100));

    const outputPath = path.join(PUBLIC_DIR, item.name);
    await page.screenshot({
      path: outputPath,
      omitBackground: true,
      type: 'png'
    });
    console.log(`Saved to ${outputPath}`);
  }

  // Generate favicon.ico by copying favicon-32x32.png
  console.log('Creating favicon.ico...');
  const fav32Buffer = fs.readFileSync(path.join(PUBLIC_DIR, 'favicon-32x32.png'));
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), fav32Buffer);
  console.log('Saved favicon.ico');

  await browser.close();
  console.log('Asset generation complete!');
}

generate();
