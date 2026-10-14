import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const PORT = 3000;
const publicDir = join(process.cwd(), 'public');

let eventos = [
  { id: 1, nombre: 'Concierto', fecha: '2026-11-20' },
  { id: 2, nombre: 'Conferencia', fecha: '2026-11-27' }
];

const enviarJson = (res, status, data, extraHeaders = {}) => {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    ...extraHeaders
  });
  res.end(JSON.stringify(data));
};

const leerCuerpo = async (req) => {
  const partes = [];
  for await (const parte of req) partes.push(parte);
  if (partes.length === 0) return {};
  return JSON.parse(Buffer.concat(partes).toString('utf8'));
};

const servirArchivo = async (res, pathname) => {
  const ruta = pathname === '/' ? '/index.html' : pathname;
  const archivo = join(publicDir, ruta);
  const tipos = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };
  try {
    const contenido = await readFile(archivo);
    res.writeHead(200, { 'Content-Type': tipos[extname(archivo)] ?? 'application/octet-stream' });
    res.end(contenido);
  } catch {
    enviarJson(res, 404, { error: 'Archivo no encontrado' });
  }
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (!url.pathname.startsWith('/api/')) {
    await servirArchivo(res, url.pathname);
    return;
  }

  // PG1: registra método, ruta y dos headers de la solicitud.
  console.log(/* TODO PG1 */);

  if (url.pathname === '/api/events' && req.method === 'GET') {
    // TODO PG2: responde 200 con { eventos }.
    return;
  }

  if (url.pathname === '/api/events' && req.method === 'POST') {
    // TODO PG3: valida Content-Type, lee el JSON, crea el evento y responde 201.
    return;
  }

  const coincidencia = url.pathname.match(/^\/api\/events\/(\d+)$/);
  if (coincidencia && req.method === 'PATCH') {
    // TODO PG4: actualiza sólo los campos del evento recibidos y responde 200 o 404.
    return;
  }

  if (coincidencia && req.method === 'DELETE') {
    // TODO PG5: elimina el evento y responde 204 o 404.
    return;
  }

  if (url.pathname === '/api/privado') {
    // TODO PG6: exige Authorization: Bearer aula-http y responde 401 si falta.
    return;
  }

  enviarJson(res, 404, { error: 'Ruta no encontrada' });
});

server.listen(PORT, () => {
  console.log(`Servidor disponible en http://localhost:${PORT}`);
});
