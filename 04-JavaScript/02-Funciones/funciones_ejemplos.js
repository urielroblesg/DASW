// ============================================
// EJEMPLOS DE FUNCIONES EN JAVASCRIPT
// ============================================

// 1. FUNCIÓN TRADICIONAL
// ============================================
console.log("=== FUNCIÓN TRADICIONAL ===");

function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

console.log(saludar("Juan"));  // Salida: Hola, Juan!


// 2. FUNCIÓN ANÓNIMA
// ============================================
console.log("\n=== FUNCIÓN ANÓNIMA ===");

const despedir = function(nombre) {
  return `Adiós, ${nombre}!`;
};

console.log(despedir("María"));  // Salida: Adiós, María!


// 3. ARROW FUNCTION (FUNCIÓN FLECHA)
// ============================================
console.log("\n=== ARROW FUNCTION ===");

// Sintaxis básica
const sumar = (a, b) => {
  return a + b;
};
console.log(sumar(5, 3));  // Salida: 8

// Arrow function con return implícito (sin llaves)
const multiplicar = (a, b) => a * b;
console.log(multiplicar(5, 3));  // Salida: 15

// Arrow function con un solo parámetro (sin paréntesis)
const cuadrado = x => x * x;
console.log(cuadrado(4));  // Salida: 16

// Arrow function sin parámetros
const generarNumero = () => Math.random();
console.log(generarNumero());  // Salida: número aleatorio

// 4. LAMBDA / FUNCIÓN INMEDIATA
// ============================================

// 5. THIS EN JAVASCRIPT
// ============================================

// 6. CALLBACKS
// ============================================


// 7. FUNCIONES DE ORDEN SUPERIOR
// ============================================