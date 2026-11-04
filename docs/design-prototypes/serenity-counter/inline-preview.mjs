import { readFile, writeFile } from 'node:fs/promises';
const source = await readFile(new URL('index.html', import.meta.url), 'utf8');
const logo = await readFile(new URL('logo.png', import.meta.url));
const styles = source.match(/<style>([\s\S]*?)<\/style>/)[1].replaceAll(':root', '#serenity-counter-study').replaceAll('html{', '#serenity-counter-study{').replaceAll('body{', '#serenity-counter-study{');
const fonts = source.match(/<link[^>]+fonts\.googleapis\.com\/css2[^>]+>/)[0];
const body = source.match(/<body>([\s\S]*)<\/body>/)[1].replace('src="logo.png"', `src="data:image/png;base64,${logo.toString('base64')}"`);
await writeFile('C:/Users/risal/.codex/visualizations/2026/11/04/01a1a63d-70a2-71c3-9451-575e9826438c/serenity-counter-study.html', `${fonts}\n<style>${styles}</style>\n<div id="serenity-counter-study">${body}</div>\n`);
