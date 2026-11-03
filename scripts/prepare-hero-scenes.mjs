// Usage: node scripts/prepare-hero-scenes.mjs <tea.mp4> <vada.mp4> <biriyani.mp4>
// Also supports --tea-only <tea.mp4> or --menu-only <vada.mp4> <biriyani.mp4>.
// Originals are unchanged. Colour and opacity share one portable H.264 file.
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const localTool = path.resolve('.codex/media-tools/node_modules/ffmpeg-static/ffmpeg.exe');
const ffmpeg = process.env.FFMPEG_PATH || (fs.existsSync(localTool) ? localTool : 'ffmpeg');
const mode = process.argv[2]?.startsWith('--') ? process.argv[2] : 'all';
const sources = process.argv.slice(mode === 'all' ? 2 : 3);
const names = mode === '--tea-only' ? ['tea'] : mode === '--menu-only' ? ['vada', 'biriyani'] : mode === 'all' ? ['tea', 'vada', 'biriyani'] : [];
if (!names.length || sources.length !== names.length) throw new Error('Provide the source video(s) for all scenes, --tea-only, or --menu-only.');
for (const source of sources) if (!fs.existsSync(source)) throw new Error(`Video not found: ${source}`);

const run = args => {
  const result = spawnSync(ffmpeg, ['-y', '-hide_banner', '-loglevel', 'error', ...args], { stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`FFmpeg failed with status ${result.status}`);
};
const timings = { tea: [3, 9.6], vada: [1, 7], biriyani: [1, 8] };
for (const [index, name] of names.entries()) {
  const [start, end] = timings[name];
  const cropX = name === 'tea' ? 480 : 240;
  const key = `crop=800:720:${cropX}:0,setsar=1,format=rgba,geq=r='r(X,Y)':g='g(X,Y)':b='b(X,Y)':a='255*(1-clip((g(X,Y)-max(r(X,Y),b(X,Y))-10)/24,0,1))',format=rgba,despill=green:mix=0.5`;
  const filter = `[0:v]${key},split=2[colour][alpha];[colour]format=yuv420p[rgb];[alpha]alphaextract,gblur=sigma=0.45,format=yuv420p[mask];[rgb][mask]hstack[out]`;
  const output = `public/videos/serenity-${name}-character.mp4`;
  run(['-ss', String(start), '-i', sources[index], '-t', String(end - start), '-filter_complex', filter, '-map', '[out]', '-an', '-c:v', 'libx264', '-crf', '18', '-preset', 'slow', '-g', '3', '-keyint_min', '3', '-sc_threshold', '0', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', output]);
  run(['-i', output, '-filter_complex', '[0:v]split[c][a];[c]crop=800:720:0:0[rgb];[a]crop=800:720:800:0,format=gray[mask];[rgb][mask]alphamerge', '-frames:v', '1', '-c:v', 'libwebp', '-quality', '92', `public/videos/serenity-${name}-character.webp`]);
  console.log(`Prepared ${name}: source ${start}s–${end}s, ${end - start}s duration, native 800×720 crop.`);
}
