/*
================================================================================
EJERCICIO 4 - NIVEL MEDIO: REDUCE, ENCADENAMIENTO Y TRANSFORMACIÓN
================================================================================

INSTRUCCIONES:
1. Crea una función 'calcularTotal' que reciba un arreglo de objetos con 
   propiedad 'precio' y retorne la suma total de todos los precios usando reduce().

2. Crea una función 'contarOcurrencias' que reciba un arreglo de palabras y 
   retorne un objeto donde las claves sean las palabras y los valores sean 
   cuántas veces aparecen (usando reduce()).

3. Crea una función 'procesarProductos' que reciba un arreglo de productos 
   (con propiedades {nombre, precio, cantidad}). Debe filtrar productos con 
   cantidad > 0, multiplicar el precio por la cantidad, y retornar un arreglo 
   con {nombre, total}. Usa encadenamiento de métodos.

4. Crea una función 'dividirEnGrupos' que reciba un arreglo de números y los 
   divida en un objeto con dos arrays: uno para números pares y otro para impares.
   Usa reduce().

5. Crea una función 'obtenerEstadisticas' que reciba un arreglo de números y 
   retorne un objeto con {minimo, maximo, promedio, suma} usando reduce().

================================================================================
*/

// ESCRIBE TU CÓDIGO AQUÍ:


// console.log("=== Ejercicio 1: calcularTotal ===");
// const items = [
//   { nombre: "Laptop", precio: 1000 },
//   { nombre: "Mouse", precio: 50 },
//   { nombre: "Teclado", precio: 150 }
// ];
// console.log(calcularTotal(items));                        // Salida esperada: 1200

// const items2 = [
//   { nombre: "Manzana", precio: 2 },
//   { nombre: "Banana", precio: 1.5 }
// ];
// console.log(calcularTotal(items2));                       // Salida esperada: 3.5


// console.log("\n=== Ejercicio 2: contarOcurrencias ===");
// console.log(contarOcurrencias(["hola", "mundo", "hola"]));
// Salida esperada: { hola: 2, mundo: 1 }

// console.log(contarOcurrencias(["a", "b", "a", "c", "b", "a"]));
// Salida esperada: { a: 3, b: 2, c: 1 }


// console.log("\n=== Ejercicio 3: procesarProductos ===");
// const stock = [
//   { nombre: "Monitor", precio: 300, cantidad: 2 },
//   { nombre: "Webcam", precio: 80, cantidad: 0 },
//   { nombre: "Micrófono", precio: 120, cantidad: 3 }
// ];
// console.log(procesarProductos(stock));
// Salida esperada: [
//   { nombre: "Monitor", total: 600 },
//   { nombre: "Micrófono", total: 360 }
// ]


// console.log("\n=== Ejercicio 4: dividirEnGrupos ===");
// console.log(dividirEnGrupos([1, 2, 3, 4, 5, 6]));
// Salida esperada: { pares: [2, 4, 6], impares: [1, 3, 5] }

// console.log(dividirEnGrupos([10, 15, 20, 25]));
// Salida esperada: { pares: [10, 20], impares: [15, 25] }


// console.log("\n=== Ejercicio 5: obtenerEstadisticas ===");
// console.log(obtenerEstadisticasCompleto([10, 20, 30]));
// Salida esperada: { minimo: 10, maximo: 30, suma: 60, promedio: 20 }

// console.log(obtenerEstadisticasCompleto([5, 15, 25, 35, 45]));
// Salida esperada: { minimo: 5, maximo: 45, suma: 125, promedio: 25 }
