# 📘 Cheatsheet de CSS

Guía de referencia rápida con las propiedades, valores y ejemplos más comunes de CSS.

---

## 1. Selectores

| Selector | Ejemplo | Descripción |
|---|---|---|
| Universal | `* { }` | Selecciona todos los elementos |
| Etiqueta | `p { }` | Selecciona todos los `<p>` |
| Clase | `.card { }` | Selecciona elementos con `class="card"` |
| ID | `#header { }` | Selecciona el elemento con `id="header"` |
| Descendiente | `div p { }` | `<p>` dentro de un `<div>` |
| Hijo directo | `div > p { }` | `<p>` hijo directo de `<div>` |
| Hermano adyacente | `h1 + p { }` | `<p>` justo después de `<h1>` |
| Hermano general | `h1 ~ p { }` | Todos los `<p>` después de `<h1>` |
| Atributo | `input[type="text"] { }` | Elementos con ese atributo |
| Pseudo-clase | `a:hover { }` | Estado del elemento |
| Pseudo-elemento | `p::first-line { }` | Parte del elemento |

```css
/* Combinando selectores */
.card.active { }        /* clase card Y active */
.card, .box { }         /* clase card O box */
```

---

## 2. Modelo de caja (Box Model)

```css
.elemento {
  width: 200px;
  height: 100px;
  padding: 10px;        /* espacio interno */
  border: 2px solid #333;
  margin: 20px;          /* espacio externo */
  box-sizing: border-box; /* incluye padding y border en el width/height */
}
```

| Propiedad | Valores comunes | Ejemplo |
|---|---|---|
| `width` / `height` | px, %, em, rem, auto, vw/vh | `width: 50%;` |
| `padding` | shorthand: arriba derecha abajo izq. | `padding: 10px 20px;` |
| `margin` | igual que padding, admite `auto` | `margin: 0 auto;` |
| `border` | ancho estilo color | `border: 1px solid #000;` |
| `border-radius` | px, % | `border-radius: 8px;` |
| `box-sizing` | `content-box`, `border-box` | `box-sizing: border-box;` |

---

## 3. Colores y fondos

```css
.elemento {
  color: #333333;               /* texto */
  background-color: #f5f5f5;
  background: url("img.jpg") no-repeat center/cover;
  opacity: 0.8;
}
```

**Formatos de color:**
```css
color: red;                  /* nombre */
color: #ff0000;              /* hexadecimal */
color: rgb(255, 0, 0);       /* rgb */
color: rgba(255, 0, 0, 0.5); /* rgb + alpha */
color: hsl(0, 100%, 50%);    /* hsl */
```

---

## 4. Tipografía

| Propiedad | Ejemplo |
|---|---|
| `font-family` | `font-family: "Helvetica", Arial, sans-serif;` |
| `font-size` | `font-size: 16px;` / `1rem` |
| `font-weight` | `font-weight: bold;` / `700` |
| `font-style` | `font-style: italic;` |
| `line-height` | `line-height: 1.5;` |
| `text-align` | `text-align: center;` |
| `text-decoration` | `text-decoration: underline;` |
| `text-transform` | `text-transform: uppercase;` |
| `letter-spacing` | `letter-spacing: 1px;` |

---

## 5. Display y posicionamiento

```css
.elemento {
  display: block;      /* block, inline, inline-block, flex, grid, none */
  position: relative;  /* static, relative, absolute, fixed, sticky */
  top: 0; left: 0;
  z-index: 10;
}
```

| Valor de `display` | Comportamiento |
|---|---|
| `block` | Ocupa todo el ancho, salto de línea |
| `inline` | No respeta width/height, sin salto |
| `inline-block` | Como inline pero admite width/height |
| `flex` | Contenedor flexible (ver sección 6) |
| `grid` | Contenedor de cuadrícula (ver sección 7) |
| `none` | Oculta el elemento |

| Valor de `position` | Comportamiento |
|---|---|
| `static` | Por defecto, no se puede mover con top/left |
| `relative` | Se mueve respecto a su posición original |
| `absolute` | Se posiciona respecto al ancestro posicionado más cercano |
| `fixed` | Fijo respecto a la ventana (viewport) |
| `sticky` | Híbrido entre relative y fixed según scroll |

---

## 6. Flexbox

```css
.contenedor {
  display: flex;
  flex-direction: row;         /* row, column, row-reverse, column-reverse */
  justify-content: center;     /* eje principal */
  align-items: center;         /* eje transversal */
  flex-wrap: wrap;
  gap: 16px;
}

.item {
  flex: 1;              /* grow shrink basis */
  flex-grow: 1;
  align-self: flex-end; /* sobreescribe align-items para ese item */
}
```

| `justify-content` | Descripción |
|---|---|
| `flex-start` | Al inicio |
| `flex-end` | Al final |
| `center` | Centrado |
| `space-between` | Espacio entre elementos |
| `space-around` | Espacio alrededor |
| `space-evenly` | Espacio uniforme |

---

## 7. Grid

```css
.contenedor {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
}

.item {
  grid-column: 1 / 3;   /* desde columna 1 hasta 3 */
  grid-row: 1 / 2;
}
```

```css
/* Ejemplo responsive común */
.contenedor {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

---

## 8. Unidades

| Unidad | Tipo | Ejemplo |
|---|---|---|
| `px` | Absoluta | `16px` |
| `%` | Relativa al contenedor | `50%` |
| `em` | Relativa al font-size del padre | `1.5em` |
| `rem` | Relativa al font-size raíz (`html`) | `2rem` |
| `vw` / `vh` | % del ancho/alto de la ventana | `100vw` |
| `fr` | Fracción disponible (solo Grid) | `1fr` |

---

## 9. Pseudo-clases y pseudo-elementos comunes

```css
a:hover { color: blue; }
input:focus { border-color: green; }
li:first-child { font-weight: bold; }
li:last-child { margin-bottom: 0; }
li:nth-child(2n) { background: #eee; }  /* pares */
p::before { content: "→ "; }
p::after { content: ""; }
```

---

## 10. Transiciones y animaciones

```css
.boton {
  transition: background-color 0.3s ease-in-out;
}
.boton:hover {
  background-color: darkblue;
}

@keyframes aparecer {
  from { opacity: 0; }
  to { opacity: 1; }
}

.elemento {
  animation: aparecer 1s ease-in forwards;
}
```

---

## 11. Media queries (diseño responsivo)

```css
/* Móviles */
@media (max-width: 600px) {
  .contenedor { flex-direction: column; }
}

/* Tablets en adelante */
@media (min-width: 768px) {
  .contenedor { grid-template-columns: repeat(2, 1fr); }
}
```

---

## 12. Variables CSS (Custom Properties)

```css
:root {
  --color-primario: #3498db;
  --espaciado: 16px;
}

.boton {
  background-color: var(--color-primario);
  padding: var(--espaciado);
}
```

---

## 13. Buenas prácticas rápidas

- Usa `box-sizing: border-box;` globalmente para evitar sorpresas con el tamaño.
- Prefiere `rem` para tipografía y `%`/`fr` para layouts flexibles.
- Usa `flex` para layouts en una dimensión y `grid` para dos dimensiones.
- Agrupa estilos repetidos en variables (`:root`).
- Usa nombres de clase descriptivos (BEM: `.bloque__elemento--modificador`).

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```
