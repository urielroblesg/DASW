// ============================================
// EJEMPLOS DE ARREGLOS EN JAVASCRIPT
// ============================================

// 1. DESESTRUCTURACIÓN DE ARREGLOS
// ============================================
console.log("=== DESESTRUCTURACIÓN DE ARREGLOS ===");


const frutas = ["manzana", "banana", "naranja", "fresa"];
const [primera, segunda, tercera] = frutas;


// console.log(primera);
// console.log(segunda);
// console.log(tercera);

const [fruta1, , fruta3] = frutas;
console.log(fruta1, fruta3); 

const [color1, color2, color3, color4, color5 = "morado"] = ["rojo", "azul", "verde"];
console.log(color4);
console.log(color5);


function mostrarPareja([a, b]) {
  console.log(`Pareja: ${a} y ${b}`);
}

mostrarPareja(["pato", "ganso"]); 

const [primero, ...resto] = [1, 2, 3, 4, 5];
console.log(primero);
console.log(resto);  
// 2. SPREAD OPERATOR (...)
// ============================================
console.log("\n=== SPREAD OPERATOR ===");

const numeros = [1, 2, 3];
const copia = [...numeros];

console.log(copia); 

// Combinar arreglos
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinado = [...arr1,...arr2];
console.log(combinado);


// Agregar elementos al combinar
const conExtras = [0, ...arr1, 3.5, ...arr2, 7];
console.log(conExtras); 


// Spread en llamada de función
function sumarTres(a, b, c) {
  return a + b + c;
}

const valores = [1, 2, 3];
console.log(sumarTres(...valores));

// 3. MÉTODOS DE INSERCIÓN Y EXTRACCIÓN
// ============================================
console.log("\n=== MÉTODOS DE INSERCIÓN Y EXTRACCIÓN ===");

// push() - agrega al final
let stack = [1, 2, 3];
stack.push(4);
console.log("push:", stack);  // Salida: [1, 2, 3, 4]

// pop() - extrae del final
const ultimoElemento = stack.pop();
console.log("pop:", ultimoElemento, "Arreglo:", stack);  // Salida: pop: 4 Arreglo: [1, 2, 3]

// unshift() - agrega al inicio
stack.unshift(0);
console.log("unshift:", stack);  // Salida: [0, 1, 2, 3]

// shift() - extrae del inicio
const primerElemento = stack.shift();
console.log("shift:", primerElemento, "Arreglo:", stack);  // Salida: shift: 0 Arreglo: [1, 2, 3]

// splice() - inserta, reemplaza o elimina elementos
let letters = ["a", "b", "d", "e"];
letters.splice(2, 0, "c");  // En posición 2, elimina 0 elementos, inserta "c"
console.log("splice (insertar):", letters);  // Salida: ['a', 'b', 'c', 'd', 'e']

let numbers = [1, 2, 3, 4, 5];
const eliminados = numbers.splice(1, 2);  // Desde posición 1, elimina 2 elementos
console.log("splice (eliminar):", numbers, "Eliminados:", eliminados);  // Salida: [1, 4, 5] Eliminados: [2, 3]

// concat() - combina arreglos (sin modificar los originales)
const lista1 = [1, 2];
const lista2 = [3, 4];
const concatenado = lista1.concat(lista2);
console.log("concat:", concatenado);  // Salida: [1, 2, 3, 4]
console.log("Original:", lista1);  // Salida: [1, 2] (sin cambios)

// slice() - extrae una porción sin modificar el original
const sliced = concatenado.slice(1, 3);  // Desde índice 1 hasta 3 (no incluye 3)
console.log("slice:", sliced);  // Salida: [2, 3]
console.log("Original:", concatenado);  // Sin cambios

// 4. MÉTODOS DE BÚSQUEDA
// ============================================
console.log("\n=== MÉTODOS DE BÚSQUEDA ===");

const productos = ["laptop", "mouse", "teclado", "monitor", "mouse"];
const edades = [25, 30, 22, 35, 28];

// indexOf() - encuentra la primera ocurrencia
console.log("indexOf 'mouse':", productos.indexOf("mouse"));  // Salida: 1
console.log("indexOf 'cable':", productos.indexOf("cable"));  // Salida: -1

// lastIndexOf() - encuentra la última ocurrencia
console.log("lastIndexOf 'mouse':", productos.lastIndexOf("mouse"));  // Salida: 4

// includes() - verifica si existe
console.log("includes 'teclado':", productos.includes("teclado"));  // Salida: true
console.log("includes 'cable':", productos.includes("cable"));  // Salida: false

// find() - encuentra el primer elemento que cumple una condición
const mayor30 = edades.find(edad => edad > 30);
console.log("find (edad > 30):", mayor30);  // Salida: 35

const producto = productos.find(p => p.startsWith("m"));
console.log("find (comienza con 'm'):", producto);  // Salida: mouse

// findIndex() - encuentra el índice del primer elemento que cumple una condición
const indice = edades.findIndex(edad => edad > 30);
console.log("findIndex (edad > 30):", indice);  // Salida: 3

// filter() - encuentra todos los elementos que cumplen una condición
const mayores25 = edades.filter(edad => edad > 25);
console.log("filter (edad > 25):", mayores25);  // Salida: [30, 35, 28]

// some() - verifica si al menos uno cumple una condición
const hayAlgunoMenor20 = edades.some(edad => edad < 20);
console.log("some (edad < 20):", hayAlgunoMenor20);  // Salida: false

// every() - verifica si todos cumplen una condición
const todosMayores20 = edades.every(edad => edad > 20);
console.log("every (edad > 20):", todosMayores20);  // Salida: true


// 5. MÉTODOS DE TRANSFORMACIÓN
// ============================================
console.log("\n=== MÉTODOS DE TRANSFORMACIÓN ===");

console.log("map (agregar 16% impuesto):", preciosConImpuesto); 


console.log("map (string a número):", numerosInt);


console.log("reduce (suma):", suma);


console.log("reduce (producto):", producto_total); 


console.log("reduce (conteo):", conteo); 


console.log("map (a mayúsculas):", mayusculas);



console.log("flatMap (aplanar):", aplanado);



// 6. MÉTODOS DE MANIPULACIÓN Y COMBINACIÓN
// ============================================
console.log("\n=== MÉTODOS DE MANIPULACIÓN Y COMBINACIÓN ===");


console.log("reverse:", inversible);



console.log("sort (números):", desordenado); 


console.log("sort (alfabético):", palabrasMez);



console.log("sort (descendente):", descendente); 



console.log("join:", mensaje);



console.log("flat (profundidad 1):", plano); 



console.log("flat (profundidad 2):", planoCompleto);



console.log("Encadenamiento:", resultado);