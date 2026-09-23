console.log("%c--- 2. TIPOS DE DATOS ---", "color: cyan; font-weight: bold;");

// 1. PRIMITIVOS (Guardan el valor directamente en memoria)
const texto = "Hola Mundo";       // String
const numero = 42;                 // Number
const booleano = true;             // Boolean
const nulo = null;                 // Null (ausencia intencional de valor)
let indefinido;                    // Undefined (variable sin valor asignado)

console.log(typeof texto);       // "string"
console.log(typeof numero);      // "number"
console.log(typeof booleano);    // "boolean"
console.log(typeof nulo);        // "object" (comportamiento histórico de JS)
console.log(typeof indefinido);  // "undefined"

// Copia de primitivos (Se copia el valor real)
let a = 10;
let b = a;
b = 20;
console.log({ a, b }); // a sigue siendo 10, b es 20

// 2. COMPLEJOS / REFERENCIA (Guardan una referencia en memoria)
const usuario = { nombre: "Ana", edad: 25 }; // Object
const frutas = ["Manzana", "Banana"];          // Array

console.log(typeof usuario); // "object"
console.log(typeof frutas);  // "object"

// Copia por referencia
const usuario2 = usuario;
usuario2.nombre = "Carlos"; 

// Ambos cambian porque apuntan a la misma dirección de memoria
console.log(usuario.nombre);  // "Carlos"
console.log(usuario2.nombre); // "Carlos"