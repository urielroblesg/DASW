# Práctica guiada S16: Asincronía en JavaScript

Proyecto inicial para construir en clase el **Monitor de pedidos**.

## Archivos

- `index.html`: interfaz y estilos del monitor.
- `api.js`: módulo que exporta la API simulada mediante promesas y temporizadores.
- `app.js`: módulo de entrada que importa la API, consume promesas y actualiza el DOM.

## Uso

1. Abre la carpeta en tu editor.
2. Sigue los pasos de `Practica_Guiada_S16_Asincronia_JS_Monitor_Pedidos.md`.
3. Inicia un servidor local, por ejemplo con Live Server.
4. Abre la URL local de `index.html` en el navegador.
5. Usa la consola de las herramientas de desarrollo para realizar las pruebas.

El proyecto utiliza módulos ES. `index.html` carga `app.js` con `type="module"`, y `app.js` importa las funciones exportadas por `api.js`. No abras el archivo mediante una URL `file://`.

Las funciones de la plantilla se declaran con sintaxis arrow function, incluidas las funciones asíncronas y las exportaciones del módulo.

## Datos de prueba

- Pedido existente: `A-17`
- Pedido existente: `B-08`
- Pedido inexistente: `X-00`

La interfaz ya está preparada. Completa los TODO PG en `api.js` y `app.js` durante la demostración. No cambies los nombres de las funciones.

---

## Url de la practica guiada

<https://canvas.iteso.mx/courses/59868/pages/practica-guiada-s16-asincronia-js-monitor-pedidos>
