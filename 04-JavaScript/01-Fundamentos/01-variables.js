console.log("%c--- 1. VARIABLES Y ALCANCE ---", "color: cyan; font-weight: bold;");

// var: alcance de función o global, permite redeclarar (no recomendado)
var mensajeVar = "Hola con var";
var mensajeVar = "Redeclarando var"; // No da error


// let: alcance de bloque ({ }), permite reasignar pero NO redeclarar
let contador = 1;
contador = 2; // Válido

// const: alcance de bloque, NO permite reasignar ni redeclarar
const PAIS = "México";
// PAIS = "Colombia"; //  Uncaught TypeError: Assignment to constant variable.

// Ejemplo de Alcance de Bloque ({ })
if (true) {
  var variableGlobal = "Accesible fuera del bloque";
  let variableBloque = "Solo accesible aquí";
  const constanteBloque = "Solo accesible aquí";
}

console.log(variableGlobal); // Funciona
// console.log(variableBloque); //  Uncaught ReferenceError: variableBloque is not defined

/* 
  TIPS:
  1. Usa `const` por defecto para evitar mutaciones accidentales.
  2. Usa `let` solo cuando sepas que el valor va a cambiar (ej. en bucles).
  3. Evita usar `var` para prevenir errores de scope indeseados.
*/