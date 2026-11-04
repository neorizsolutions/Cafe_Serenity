import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const files = new Map([['/', ['index.html', 'text/html; charset=utf-8']], ['/logo.png', ['logo.png', 'image/png']]]);
createServer(async (request, response) => {
  const file = files.get(new URL(request.url, 'http://localhost').pathname);
  if (!file) { response.writeHead(404).end(); return; }
  try { const body = await readFile(new URL(file[0], import.meta.url)); response.writeHead(200, { 'Content-Type': file[1], 'Cache-Control': 'no-store' }); response.end(body); }
  catch { response.writeHead(500).end(); }
}).listen(3100, '127.0.0.1', () => console.log('Design study: http://127.0.0.1:3100/'));
