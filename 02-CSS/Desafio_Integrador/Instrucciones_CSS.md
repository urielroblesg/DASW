# 📋 Guía de Trabajo Práctico: Estilos y Pseudo-clases en CSS

¡Hola a todos! 👋  
En este ejercicio aplicaremos estilos CSS avanzados a un formulario HTML. Aprenderemos a manejar estados interactivos (`:hover`, `:focus`, `:active`, `:disabled`) y a seleccionar elementos específicos según su posición usando pseudo-clases estrucutrales (`:first-child`, `:last-child`, `:nth-child`).

---

## 🎯 Objetivos de la Práctica
1. Dar formato visual a diferentes tipos de campos (`input`) y botones.
2. Aplicar pseudo-clases de estado y pseudo-clases estructurales.
3. Crear interacciones fluidas mediante transiciones CSS.

---

## 🛠️ Especificaciones de Estilos por Elemento

### 1. Campos de Texto (`input[type="text"]`, `input[type="email"]`, `input[type="password"]`)
* **Aspecto General:** Todos los campos de texto (texto plano, correo electrónico y contraseña) deben compartir la misma base de diseño (bordes, relleno/padding y tipografía uniforme).
* **Foco (`:focus`):** Cuando el usuario haga clic o seleccione un campo para escribir, resáltalo con un **borde o contorno azul**.
* **Interacción (`:hover`):** Al pasar el cursor sobre cualquier campo, su fondo debe cambiar a un **gris claro**.

---

### 2. Checkboxes y Radio Buttons (`input[type="checkbox"]`, `input[type="radio"]`)
* **Personalización:** Modifica los estilos por defecto que vienen en el navegador para darles un aspecto personalizado y moderno (puedes ajustar el tamaño, bordes o color de acento).

---

### 3. Botón de Envío (`button[type="submit"]` o `input[type="submit"]`)
* **Estado Normal:** Asigna un diseño destacado (por ejemplo, un color de fondo llamativo).
* **Al pasar el cursor (`:hover`):** Agrega una **sombra paralela (`box-shadow`)** para darle un efecto de elevación.
* **Al hacer clic (`:active`):** Aplica un estilo que simule que el botón está **presionado** (puedes lograrlo reduciendo ligeramente la sombra o usando `transform: scale(0.98)`).

---

### 4. Botón de Reinicio (`button[type="reset"]` o `input[type="reset"]`)
* **Estado Deshabilitado (`:disabled`):** Por defecto, este botón debe estar deshabilitado. Aplícale tonos de **gris** (tanto en fondo como en texto) para indicar que no está disponible.

---

### 5. Estilos Especiales para Etiquetas (`label`)
Usa pseudo-clases estructurales para darle estilo a las etiquetas según su orden de aparición dentro de su contenedor:

* **Primera etiqueta (`:first-child`):** Debe resaltarse con texto en **negrita** (`font-weight: bold`).
* **Última etiqueta (`:last-child`):** Debe mostrarse en texto en **cursiva** (`font-style: italic`).
* **Etiquetas en posiciones pares (`:nth-child(even)`):** Agrégales un **fondo claro** para diferenciarlas visualmente del resto.

---

### 6. Elementos Deshabilitados en General (`:disabled`)
* **Aspecto Global:** Cualquier `input` o elemento de formulario que tenga el atributo `disabled` debe mostrarse en **color gris**.
* **Cursor:** El puntero del ratón debe cambiar a **`cursor: not-allowed`** al pasar por encima.

---

### 7. Transiciones Suaves
* **Fluidez:** Para que los cambios de estado (`:hover`, `:focus`, etc.) no se sientan bruscos, aplica una transición suave de **`0.3s`** a todos los elementos interactivos del formulario (`transition: all 0.3s ease;`).

---

## 💡 Consejos para la Entrega
* Escribe tu CSS de manera ordenada agrupando los selectores.
* Comprueba los estados del formulario interactuando con él directamente en el navegador.
* ¡No olvides probar el comportamiento al navegar usando la tecla `Tab`!
