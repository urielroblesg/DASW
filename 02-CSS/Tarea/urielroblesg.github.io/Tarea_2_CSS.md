# Tarea 2: CSS — Dale estilo a tu sitio

> **nombre:** _escribe aquí tu nombre_

## 🎯 El proyecto

Vas a tomar la **plantilla HTML** que se te proporciona (`plantilla.html`) y, ejercicio a ejercicio, la vas a ir transformando con CSS. La plantilla **no tiene ids, clases ni atributos extra** a propósito: tú los irás agregando conforme cada ejercicio te lo pida. No inventes contenido con *lorem ipsum*: escribe textos reales sobre un tema que te interese (puedes reusar el tema de tu Tarea 1 de HTML, o elegir uno nuevo).

**A diferencia de la Tarea 1, esta tarea es incremental**: vas a usar el mismo archivo HTML y la misma hoja de estilos (`estilos.css`) durante casi todos los ejercicios (excepto el primero). Cada ejercicio agrega nuevas reglas **sin borrar las anteriores**. Para que se pueda calificar cada sección por separado, debes delimitar cada ejercicio dentro de tu CSS con un comentario, así:

```css
/* ===== Ejercicio 2: Selectores básicos ===== */
... tus reglas aquí ...
```

**Instrucciones generales**:
- No modifiques el orden ni la jerarquía de las etiquetas de la plantilla — solo agrega atributos (`id`, `class`, `href`, `type`, etc.) cuando el ejercicio te lo indique explícitamente.
- Marca con X el checklist como en la tarea anterior (dentro de los corchetes, sin espacios).
- **Criterios de Evaluación**:
  - Cada ejercicio del 1 al 8 tiene un valor asignado (Total Ejercicios: **80 puntos**).
  - **Presentación y Diseño Resultante (20 puntos)**: Se evaluará la coherencia visual, legibilidad, uso adecuado de colores, espaciados (`padding`/`margin`), bordes y estética general del sitio.
  - Cada actividad (inciso) incompleta dentro de un ejercicio reduce 5 puntos de la ponderación de dicho ejercicio.
  - De no añadir conclusiones al final se penaliza con 5 puntos.
- 💡 Retos opcionales 🌟 no son obligatorios, pero suman puntos extra.
- Instala las extensiones recomendadas.

---

## 📊 Tabla de Ponderación de la Evaluación

| Criterio / Sección | Ponderación |
| :--- | :--- |
| **Ejercicio 1**: Los 3 métodos de inclusión | 10 pts |
| **Ejercicio 2**: Selectores básicos | 10 pts |
| **Ejercicio 3**: Especificidad | 10 pts |
| **Ejercicio 4**: Selectores de atributos | 10 pts |
| **Ejercicio 5**: Selectores de subcadenas | 10 pts |
| **Ejercicio 6**: Pseudoclases (UI y estructura) | 10 pts |
| **Ejercicio 7**: Pseudoelementos | 10 pts |
| **Ejercicio 8**: Selectores combinadores | 10 pts |
| **Diseño y Presentación Visual Resultante** | **20 pts** |
| **Total** | **100 pts** |

---

### 🎨 Consejos de diseño (para que tu sitio se vea bien, no solo "funcione")

Esta tarea evalúa tanto el uso correcto de selectores como la **presentación general y estética** del sitio. Aprovecha estas propiedades a lo largo de tus ejercicios:

- **Espaciado**: usa `padding` y `margin` generosos — el contenido pegado a los bordes resta en la evaluación de diseño.
- **Bordes redondeados**: `border-radius` en tarjetas, botones, imágenes y etiquetas le da un look moderno.
- **Sombras suaves**: `box-shadow: 0 4px 12px rgba(0,0,0,0.1);` le da profundidad a tus `<article>` o `<aside>`.
- **Paleta de colores**: elige 2-3 colores que combinen (puedes definirlos con variables CSS en `:root`).
- **Tipografía**: importa una fuente de Google Fonts en el `<head>` y aplícala con `font-family`.
- **Layout**: usa `display: flex` o `display: grid` en contenedores para organizar el contenido visualmente.

---

## Ejercicio 1: 🧩 Los 3 métodos de inclusión (10 pts)

Antes de trabajar con una sola hoja de estilos, practica los tres métodos que existen para aplicar CSS. Haz una copia de la plantilla llamada `Ejercicio1.html` y trabaja solo en ese archivo.

- [ ] **Inline**: agrega el atributo `style` directamente en la etiqueta `<h1>` para cambiar su color de texto y su tamaño de letra.
- [ ] **Interno**: agrega un bloque `<style>` dentro del `<head>` con una regla que cambie el color o el fondo de todos los `<h2>` de la página.
- [ ] **Externo**: crea un archivo nuevo llamado `estilos.css`, enlázalo desde el `<head>` con `<link rel="stylesheet" href="estilos.css">`, y agrega ahí una regla que cambie el estilo (tipografía, color, etc.) de todos los `<p>`.
- [ ] Debajo del `<h1>`, agrega un párrafo nuevo (contenido real, escrito por ti) explicando cuál de los tres métodos crees que es mejor para un proyecto grande con muchas páginas, y por qué.

🌟 **Bonus**: agrega un segundo estilo inline en cualquier otro elemento distinto al `<h1>` y, en un comentario dentro del `<style>` interno, explica por qué en general no es buena práctica abusar del estilo inline.

---

## Ejercicio 2: 🎯 Selectores básicos (10 pts)

**A partir de este ejercicio y hasta el final de la tarea**, haz una copia nueva de la plantilla llamada `proyecto.html`, crea un archivo `estilos.css` enlazado con método **externo**, y sigue usando estos mismos dos archivos para todos los ejercicios restantes.

- [ ] **Universal (`*`)**: agrega una regla con el selector universal que aplique una misma familia tipográfica (`font-family`) a toda la página.
- [ ] **Etiqueta**: selecciona todos los elementos `<li>` (sin usar clases ni ids) y cambia su color de texto.
- [ ] **Clase**: agrega el atributo `class="destacado"` a **uno** de los tres `<article>` y, usando el selector `.destacado`, dale un color de fondo distinto al de los demás.
- [ ] **ID**: agrega el atributo `id="principal"` a la **primera** `<section>` de la página y, usando el selector `#principal`, cambia su `padding` o `margin`.

---

## Ejercicio 3: ⚖️ Especificidad (10 pts)

En este ejercicio vas a **crear un conflicto de estilos a propósito** para entender qué regla gana y por qué.

- [ ] Elige un párrafo `<p>` de tu plantilla y agrágale el atributo `class="texto-especial"`.
- [ ] Escribe una regla usando el selector de **etiqueta** (`p`) que cambie el `color` del texto a un valor (por ejemplo, azul).
- [ ] Escribe una segunda regla usando el selector de **clase** (`.texto-especial`) que cambie el `color` del texto de ese mismo párrafo a un valor distinto (por ejemplo, rojo).
- [ ] Ahora agrágale también el atributo `id="parrafo-vip"` a ese mismo párrafo, y escribe una tercera regla con el selector de **ID** (`#parrafo-vip`) que cambie el `color` a un tercer valor (por ejemplo, verde).
- [ ] Abre la página en el navegador y observa qué color ganó. Debajo de las 3 reglas, agrega un **comentario CSS** explicando cuál regla se aplicó y por qué, en términos de especificidad (etiqueta vs. clase vs. ID).

🌟 **Bonus**: agrágale además un estilo `style="color: naranja;"` inline a ese mismo párrafo y explica en tu comentario por qué el inline le gana a las tres reglas anteriores (y qué es lo único que le podría ganar al inline).

---

## Ejercicio 4: 🏷️ Selectores de atributos (10 pts)

- [ ] **Existencia `[attr]`**: en el menú del `<nav>`, agrega el atributo `href` (con cualquier valor, por ejemplo `#`) a **solo 2 de los 4** enlaces `<a>`. Usando el selector `a[href]`, dale un estilo distinto (por ejemplo, subrayado) **únicamente** a los enlaces que sí tienen `href`, dejando sin ese estilo a los que no lo tienen.
- [ ] **Valor exacto `[attr="valor"]`**: en la sección "Enlaces relacionados" del `<aside>`, agrega el atributo `target="_blank"` **solo** al enlace "Enlace externo 1". Usando el selector `a[target="_blank"]`, dale un color de texto distinto.
- [ ] **Lista de palabras `[attr~="valor"]`**: en la sección "Etiquetas", agrega el atributo `class="tag popular"` (dos clases separadas por un espacio) **solo** a la etiqueta `css`. Usando el selector de atributo `[class~="popular"]` (no uses `.popular`, debe ser la sintaxis de atributo), resáltala con un fondo de color.

---

## Ejercicio 5: 🔤 Selectores de subcadenas (10 pts)

- [ ] Agrega atributos `href` con valores reales a los 3 enlaces de "Enlaces relacionados": uno que empiece con `https://` (por ejemplo `https://ejemplo.com`), uno que sea un correo (`mailto:correo@ejemplo.com`) y uno de teléfono (`tel:+525512345678`).
- [ ] **Comienzo `[attr^="valor"]`**: usa `a[href^="https"]` para estilizar (color o ícono) solo los enlaces cuyo `href` **empiece** con `https`.
- [ ] **Contiene `[attr*="valor"]`**: usa `a[href*="mailto"]` para destacar (por ejemplo con negrita o fondo) el enlace de correo, sin importar en qué parte del atributo aparezca "mailto".
- [ ] **Final `[attr$="valor"]`**: agrega el atributo `src` a la `<img>` dentro del `<figure>` con un valor que termine en `.png` (por ejemplo `foto.png`). Usa `img[src$=".png"]` para darle un `border` visible.

---

## Ejercicio 6: 🖱️ Pseudoclases (10 pts)

Primero prepara el formulario agregando estos atributos `type` a los tres primeros `<input>` en orden: `type="text"` (Nombre), `type="email"` (Correo), `type="checkbox"` (Suscribirme). A los dos `<input>` de "Opción A" y "Opción B" agrégales `type="radio"`. Al último `<input>` (antes del botón) agrégale `type="text"` y el atributo `disabled`.

- [ ] **`:hover`**: cambia el estilo de los enlaces del `<nav>` cuando el usuario pasa el mouse sobre ellos.
- [ ] **`:focus`**: cambia el `border` o el fondo del campo de Correo cuando el usuario hace clic dentro de él.
- [ ] **`:checked`**: usa `input:checked` para cambiar el estilo del checkbox de "Suscribirme" cuando esté marcado.
- [ ] **`:disabled`**: dale una apariencia "apagada" al último campo con el atributo `disabled`.
- [ ] **`:first-child`**: usa esta pseudoclase para estilizar el primer `<li>` del menú de navegación.
- [ ] **`:last-child`**: usa esta pseudoclase para estilizar el último `<li>` de la lista de "Enlaces relacionados".
- [ ] **`tr:hover`**: resalta con un color de fondo la fila completa de la tabla sobre la que esté el mouse.
- [ ] **`tr:nth-child(even)`**: alterna el color de fondo de las filas creando un efecto "cebra".
- [ ] **`td:nth-child()`**: elige una sola columna de tu tabla y usa `td:nth-child(2)` para resaltarla.
- [ ] **Reto — `transform` + `transition`**: combina `:hover` con animación suave.

🌟 **Bonus**: aplica `transform` + `transition` a tarjetas `<article>`.
🌟 **Bonus**: regla `tr:nth-child(3n)` y comentario explicativo.

---

## Ejercicio 7: ✨ Pseudoelementos (10 pts)

- [ ] **`::before`**: agrega contenido decorativo (un emoji o símbolo) antes de cada `<h3>` de tus artículos.
- [ ] **`::after`**: combina `a[target="_blank"]` con `::after` para agregar el símbolo `↗`.
- [ ] **`::first-letter`**: agranda y resalta la primera letra del primer párrafo de tu primer artículo.
- [ ] **`::first-line`**: cambia el estilo de la primera línea del párrafo introductorio de la sección principal.

🌟 **Bonus**: usa `::selection` para personalizar el resaltado de texto.

---

## Ejercicio 8: 🔗 Selectores combinadores (10 pts)

- [ ] **Descendiente (espacio)**: usa `nav a` para estilizar TODOS los enlaces dentro de `<nav>`.
- [ ] **Hijo directo (`>`)**: usa `nav > ul > li` para estilizar solo los `<li>` hijos directos y explica la diferencia.
- [ ] **Hermano adyacente inmediato (`+`)**: usa `h3 + p` para estilizar solo el párrafo inmediatamente posterior a un `<h3>`.
- [ ] **Hermano general (`~`)**: usa `blockquote ~ p` para estilizar todos los párrafos hermanos posteriores.

🌟 **Bonus**: demuestra la diferencia de anidamiento entre ` ` y `>`.

---

## Conclusiones (Obligatorias - Penalización de 5 pts si se omiten)

Responde con honestidad y de forma concreta:

1. ¿Qué diferencia notaste entre trabajar con CSS inline, interno y externo? ¿Cuál usarías en un proyecto real y por qué?
2. ¿Qué selector o concepto se te hizo más difícil de entender (especificidad, atributos, combinadores, pseudoclases, etc.)? ¿Por qué crees que fue así?
3. Describe una situación de un proyecto real donde usarías un selector de atributos o un pseudoelemento.

> **respuesta:**
> _Escribe aquí tu respuesta_
