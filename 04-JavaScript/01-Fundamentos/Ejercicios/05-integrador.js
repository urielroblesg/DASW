/*
  EJERCICIO 5: PROYECTO INTEGRADOR - CALCULADORA DE NÓMINA Y BONIFICACIONES

  Objetivo:
  Combinar variables, operadores, estructuras condicionales (if/else) y funciones sin usar arrays ni objetos.

  Instrucciones:
  1. Crea una función `calcularBonoSemanal(horasTrabajadas, esMetaAlcanzada)`:
     - Retorna 100 si `horasTrabajadas` >= 40 Y `esMetaAlcanzada` es true.
     - Retorna 50 si `horasTrabajadas` >= 40 pero `esMetaAlcanzada` es false.
     - Retorna 0 en cualquier otro caso.

  2. Crea una función `calcularSalarioSemanal(horasTrabajadas, tarifaPorHora, esMetaAlcanzada)`:
     - Debe calcular el pago base (horasTrabajadas * tarifaPorHora).
     - Sumar el bono obtenido mediante `calcularBonoSemanal`.
     - Retornar el total del salario semanal.

  3. Simula el cobro de un mes (4 semanas) usando un bucle `for` (de la semana 1 a la 4):
     - Declara una variable acumuladora `totalCobradoMes = 0`.
     - Dentro del bucle, calcula el pago de cada semana y súmalo a `totalCobradoMes`.

  4. Al finalizar el bucle, imprime en consola el resultado final con un mensaje condicional:
     - Si el total es mayor a 2500, imprime: "¡Excelente mes de ingresos!"
     - De lo contrario, imprime: "Ingresos dentro del promedio"

CASOS DE PRUEBA Y RESULTADOS ESPERADOS:

Prueba 1: Función de bono

console.log(calcularBonoSemanal(45, true));
// Resultado esperado: 100

console.log(calcularBonoSemanal(40, false));
// Resultado esperado: 50

console.log(calcularBonoSemanal(35, true));
// Resultado esperado: 0

Prueba 2: Función de salario semanal
console.log(calcularSalarioSemanal(40, 20, true));
// Resultado esperado: 900 (40 * 20 = 800 + 100 de bono)
*/