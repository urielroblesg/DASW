# Práctica guiada S17: Explorador HTTP

Proyecto base para observar solicitudes y respuestas HTTP en un servidor local.

## Requisitos

- Node.js 18 o posterior.
- Navegador con herramientas de desarrollo.

## Uso

1. Abre una terminal en esta carpeta.
2. Ejecuta `node server.js`.
3. Abre `http://localhost:3000`.
4. Completa `PG1` a `PG8` siguiendo la práctica guiada.
5. Observa cada intercambio en la pestaña **Network** del navegador.

## Rutas de prueba

- `GET /api/events`
- `POST /api/events`
- `PATCH /api/events/1`
- `DELETE /api/events/2`
- `GET /api/privado` con `Authorization: Bearer aula-http`

No agregues secretos reales al proyecto. El token es didáctico y sólo funciona en el servidor local.
