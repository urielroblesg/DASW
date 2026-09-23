console.log("%c--- 3. OPERADORES ---", "color: cyan; font-weight: bold;");

// 1. ARITMÉTICOS
const suma = 10 + 5;
const modulo = 10 % 3; // Residuo (1)
let incremento = 5;
incremento++; // 6

console.log({ suma, modulo, incremento });

// 2. COMPARACIÓN
const num = 5;
const strNum = "5";

console.log(num == strNum);  // true (Compara solo valor, realiza conversión débil)
console.log(num === strNum); // false (Compara valor Y tipo de dato -> RECOMENDADO)
console.log(num !== 10);     // true (Diferencia estricta)

// 3. LÓGICOS (AND &&, OR ||, NOT !)
const tieneEdad = true;
const tienePermiso = false;

// AND (&&): Ambos deben ser true
console.log("Puede conducir:", tieneEdad && tienePermiso); // false

// OR (||): Al menos uno debe ser true
console.log("Acceso concedido:", tieneEdad || tienePermiso); // true

// NOT (!): Invierte el valor booleano
console.log("Invertido:", !tieneEdad); // false