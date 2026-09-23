console.log("%c--- 5. FUNCIONES ---", "color: cyan; font-weight: bold;");

// 1. FUNCIÓN TRADICIONAL (DECLARATIVA)
// Tienen "hoisting" (pueden llamarse antes de ser declaradas)
function saludarTradicional(nombre) {
  return `Hola ${nombre} desde función tradicional`;
}
console.log(saludarTradicional("María"));

// 2. FUNCIÓN ANÓNIMA (EXPRESIÓN DE FUNCIÓN)
// Se asigna a una variable. No sufren de hoisting completo.
const saludarAnonima = function (nombre) {
  return `Hola ${nombre} desde función anónima`;
};
console.log(saludarAnonima("Pedro"));

// 3. FUNCIÓN FLECHA (ARROW FUNCTION)
// Sintaxis corta e implícita para retornos simples
const saludarFlecha = (nombre) => `Hola ${nombre} desde arrow function`;

console.log(saludarFlecha("Luis"));

// Ejemplo práctico con sintaxis reducida (un parámetro y retorno implícito)
const duplicar = n => n * 2;
console.log("Duplicar 5:", duplicar(5)); // 10