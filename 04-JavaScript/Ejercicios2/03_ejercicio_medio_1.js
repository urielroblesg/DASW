/*
================================================================================
EJERCICIO 3 - NIVEL MEDIO: DESESTRUCTURACIÓN, SPREAD Y CALLBACKS
================================================================================

INSTRUCCIONES:
1. Crea una función 'intercambiar' que reciba un arreglo con al menos dos 
   elementos, intercambie el primer y último elemento (usando desestructuración),
   y retorne el arreglo modificado.

2. Crea una función 'filtrarYMap' que reciba un arreglo de números, una callback 
   para filtrar y una callback para transformar. Debe filtrar con la primera 
   callback y mapear (transformar) con la segunda.

3. Crea una función 'procesarDatos' que reciba un arreglo de objetos (usuarios) 
   con propiedades {nombre, edad}. La función debe extraer (usando desestructuración 
   en parámetros) los nombres y edades, filtrar mayores de 18, y retornar un 
   arreglo con solo los nombres de los mayores de edad.

4. Crea una función 'combinarYOrdenar' que reciba dos arreglos (usando spread 
   operator), los combine, elimine duplicados y los ordene de forma ascendente.

5. Crea una función 'aplicarCallback' que reciba un arreglo y una callback que 
   se ejecute sobre cada elemento. La función debe retornar un nuevo arreglo con 
   los resultados.

================================================================================
*/

// ESCRIBE TU CÓDIGO AQUÍ:


// console.log("=== Ejercicio 1: intercambiar ===");
// console.log(intercambiar([1, 2, 3]));                     // Salida esperada: [3, 2, 1]
// console.log(intercambiar([10, 20, 30, 40]));              // Salida esperada: [40, 20, 30, 10]
// console.log(intercambiar(["a", "b"]));                    // Salida esperada: ['b', 'a']


// console.log("\n=== Ejercicio 2: filtrarYMap ===");
// const resultado1 = filtrarYMap(
//   [1, 2, 3, 4, 5],
//   n => n > 2,
//   n => n * 10
// );
// console.log(resultado1);                                  // Salida esperada: [30, 40, 50]

// const resultado2 = filtrarYMap(
//   [2, 4, 6, 8],
//   n => n < 7,
//   n => n + 1
// );
// console.log(resultado2);                                  // Salida esperada: [3, 5, 7]




// console.log("\n=== Ejercicio 3: procesarDatos ===");
// const usuarios = [
//   { nombre: "Juan", edad: 25 },
//   { nombre: "Ana", edad: 17 },
//   { nombre: "Pedro", edad: 30 },
//   { nombre: "Sofia", edad: 16 }
// ];
// console.log(procesarDatos(usuarios));                     // Salida esperada: ['Juan', 'Pedro']

// const usuarios2 = [
//   { nombre: "Carlos", edad: 20 },
//   { nombre: "María", edad: 18 },
//   { nombre: "Luis", edad: 35 }
// ];
// console.log(procesarDatos(usuarios2));                    // Salida esperada: ['Carlos', 'María', 'Luis']


// console.log("\n=== Ejercicio 4: combinarYOrdenar ===");
// console.log(combinarYOrdenar([3, 1, 2], [2, 4, 5]));      // Salida esperada: [1, 2, 3, 4, 5]
// console.log(combinarYOrdenar([5, 5, 3], [3, 1]));         // Salida esperada: [1, 3, 5]
// console.log(combinarYOrdenar([1, 2], [3, 4, 5]));         // Salida esperada: [1, 2, 3, 4, 5]


// console.log("\n=== Ejercicio 5: aplicarCallback ===");
// const resultado3 = aplicarCallback([1, 2, 3], **Agrega tu callback**);
// console.log(resultado3);                                  // Salida esperada: [1, 4, 9]

// const resultado4 = aplicarCallback(
//   ["hola", "mundo"],
//   **Agrega tu callback**
// );
// console.log(resultado4);                                  // Salida esperada: ['HOLA', 'MUNDO']
