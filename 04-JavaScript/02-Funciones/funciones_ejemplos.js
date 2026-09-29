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

// 4. FUNCIÓN INMEDIATA
// ============================================

console.log("====IIEF - Funcion inmediata====");

(
  function(nombre){
    console.log(`Lambda tradicional: Bienvenido: ${nombre}`);
  }
)("Uriel");

((nombre) =>{
  console.log(`IIFE con ARROW: Bienvenido: ${nombre}`);
})("Lalo");


// 5. THIS EN JAVASCRIPT
// ============================================
console.log("\n=== THIS ===");

// THIS en función tradicional
const persona = {
  nombre: "Pedro",
  edad: 30,
  saludar: function() {
    console.log(`Hola, soy ${this} y tengo ${this.edad} años`);
  }
};

persona.saludar();

// THIS en arrow function (hereda el this del contexto externo)
const persona2 = {
  nombre: "Laura",
  edad: 25,
  saludar: () => {
    console.log(`Hola, soy ${this}`);  // this se refiere al objeto global
  }
};

persona2.saludar();
// 6. CALLBACKS
// ============================================
console.log("\n=== CALLBACKS ===");

function procesarDatos(datos, callback) {
  console.log("Procesando datos...");
  const resultado = datos * 2;
  callback(resultado, "operacion exitosa");
}

procesarDatos(5, (resultado, msg) => {
  console.log(`Resultado del callback: ${resultado}`);
  console.log(`Mensaje de operacion: ${msg}`);
});

procesarDatos(10, (resultado) => {console.log(`Guardando datos en la bd. Dato almacenado: ${resultado}`)})


console.log("\n=== CALLBACK HELL ===");

function obtenerDatos(id, callback) {
  setTimeout(() => {
    callback(`Datos del usuario ${id}`);
  }, 1000);
}

obtenerDatos(1, (datos) => {
  console.log(datos);
  obtenerDatos(2, (datos2) => {
    console.log(datos2);
    obtenerDatos(3, (datos3) => {
      console.log(datos3);  // Pirámide de callbacks
    });
  });
});


// 7. FUNCIONES DE ORDEN SUPERIOR
// ============================================

console.log("\n=== FUNCIONES DE ORDEN SUPERIOR ===");

// Función que retorna otra función
function multiplicador(factor) {
  return (numero) => numero * factor;
}

const duplicar = multiplicador(2);
const triplicar = multiplicador(3);

console.log(duplicar(5));  // Salida: 10
console.log(triplicar(5));  // Salida: 15

// Función que recibe una función como parámetro
function aplicarOperacion(a, b, operacion) {
  return operacion(a, b);
}

const suma = (x, y) => x + y;
const resta = (x, y) => x - y;

console.log(aplicarOperacion(10, 5, suma));  // Salida: 15
console.log(aplicarOperacion(10, 5, resta));