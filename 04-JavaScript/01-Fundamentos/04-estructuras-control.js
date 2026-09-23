console.log("%c--- 4. ESTRUCTURAS DE CONTROL ---", "color: cyan; font-weight: bold;");

// 1. IF / ELSE
const edad = 18;
if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// 2. SWITCH
const dia = "Lunes";
switch (dia) {
  case "Lunes":
    console.log("Inicio de semana");
    break;
  case "Viernes":
    console.log("Casi fin de semana");
    break;
  default:
    console.log("Día normal");
}

// 3. BUCLE FOR (Ideal cuando sabemos el número de iteraciones)
console.log("--- Bucle For ---");
for (let i = 1; i <= 3; i++) {
  console.log(`Iteración ${i}`);
}

// 4. BUCLE WHILE (Se ejecuta mientras la condición sea verdadera)
console.log("--- Bucle While ---");
let contador = 0;
while (contador < 3) {
  console.log(`Contador While: ${contador}`);
  contador++;
}

// 5. BUCLE DO WHILE (Garantiza ejecutar el bloque al menos 1 vez)
console.log("--- Bucle Do While ---");
let numero = 5;
do {
  console.log(`Ejecución Do While: ${numero}`);
  numero++;
} while (numero < 3); // La condición es falsa, pero se ejecutó una vez