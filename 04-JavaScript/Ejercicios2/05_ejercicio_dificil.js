/*
================================================================================
EJERCICIO 5 - NIVEL DIFÍCIL: COMBINACIÓN DE TODOS LOS CONCEPTOS
================================================================================

INSTRUCCIONES:
Crea un sistema de gestión de estudiantes que cumpla con los siguientes 
requisitos:

1. Crea una función 'crearEstudiante' que reciba (nombre, edad, calificaciones) 
   y retorne un objeto con esas propiedades.

2. Crea una función 'calcularPromedio' que reciba un arreglo de calificaciones 
   y retorne el promedio usando reduce().

3. Crea una función 'filtrarAprobados' que reciba un arreglo de estudiantes y 
   una callback que determine si un estudiante aprobó (promedio >= 70). Retorna 
   estudiantes que cumplan la condición.

4. Crea una función 'generarReporte' que reciba un arreglo de estudiantes y 
   genere un objeto con estadísticas:
   - totalEstudiantes
   - aprobados
   - reprobados
   - promedioGeneral
   - topEstudiante (nombre del que tiene mejor promedio)
   - estudiantes (arreglo con nombre, promedio y estado 'aprobado'/'reprobado')

5. Crea una función 'buscarPorRango' que reciba estudiantes, y dos números 
   (edadMin, edadMax). Retorne los estudiantes en ese rango de edad, ordenados 
   por edad de forma ascendente. Usa desestructuración y spread operator.

6. BONUS - Crea una función 'procesarCalificacionesAvanzadas' que:
   - Reciba un arreglo de estudiantes
   - Filtre solo mayores de 18 años
   - Agregue una propiedad 'calificacionAjustada' (promedio * 1.1 si aprobó, 
     promedio * 0.9 si reprobó)
   - Ordene por calificación ajustada descendente
   - Retorne solo nombre y calificación ajustada

================================================================================
*/

// DATOS DE PRUEBA (puedes usarlos para probar)
/*
const estudiantes = [
  crearEstudiante("Juan", 20, [85, 90, 88]),
  crearEstudiante("Ana", 19, [92, 95, 90]),
  crearEstudiante("Pedro", 21, [60, 65, 70]),
  crearEstudiante("Sofia", 18, [75, 80, 78]),
  crearEstudiante("Carlos", 22, [45, 50, 55])
];
*/


// ESCRIBE TU CÓDIGO AQUÍ:

// PRUEBAS
console.log("=== PRUEBAS DEL SISTEMA DE GESTIÓN DE ESTUDIANTES ===\n");

// const estudiantes = [
//   crearEstudiante("Juan", 20, [85, 90, 88]),
//   crearEstudiante("Ana", 19, [92, 95, 90]),
//   crearEstudiante("Pedro", 21, [60, 65, 70]),
//   crearEstudiante("Sofia", 18, [75, 80, 78]),
//   crearEstudiante("Carlos", 22, [45, 50, 55])
// ];

// Prueba 1: Crear estudiante
console.log("=== Ejercicio 1: Crear Estudiante ===");
// console.log(crearEstudiante("Luis", 20, [80, 85, 90]));
// Salida esperada: { nombre: 'Luis', edad: 20, calificaciones: [80, 85, 90] }

// Prueba 2: Calcular promedio
console.log("\n=== Ejercicio 2: Calcular Promedio ===");
// console.log(calcularPromedio([85, 90, 88]));  // Salida esperada: 87.67
// console.log(calcularPromedio([92, 95, 90]));  // Salida esperada: 92.33

// Prueba 3: Filtrar aprobados
console.log("\n=== Ejercicio 3: Filtrar Aprobados ===");
// const aprobadosCriteria = (est) => calcularPromedio(est.calificaciones) >= 70;
// const aprobados = filtrarAprobados(estudiantes, aprobadosCriteria);
// console.log(aprobados.map(e => e.nombre));
// Salida esperada: ['Juan', 'Ana', 'Sofia']

// Prueba 4: Generar reporte
// console.log("\n=== Ejercicio 4: Generar Reporte ===");
// console.log(generarReporte(estudiantes));
// Salida esperada:
// {
//   totalEstudiantes: 5,
//   aprobados: 3,
//   reprobados: 2,
//   promedioGeneral: 76.87,
//   topEstudiante: 'Ana',
//   estudiantes: [
//     { nombre: 'Juan', promedio: 87.67, estado: 'aprobado' },
//     { nombre: 'Ana', promedio: 92.33, estado: 'aprobado' },
//     { nombre: 'Pedro', promedio: 65, estado: 'reprobado' },
//     { nombre: 'Sofia', promedio: 77.67, estado: 'aprobado' },
//     { nombre: 'Carlos', promedio: 50, estado: 'reprobado' }
//   ]
// }

// Prueba 5: Buscar por rango de edad
// console.log("\n=== Ejercicio 5: Buscar por Rango de Edad ===");
// console.log(buscarPorRango(estudiantes, 19, 21));
// Salida esperada: estudiantes con edad entre 19 y 21, ordenados por edad

// Prueba BONUS: Calificaciones avanzadas
// console.log("\n=== BONUS: Procesar Calificaciones Avanzadas ===");
// console.log(procesarCalificacionesAvanzadas(estudiantes));
// Salida esperada: estudiantes > 18 años con calificación ajustada ordenados

