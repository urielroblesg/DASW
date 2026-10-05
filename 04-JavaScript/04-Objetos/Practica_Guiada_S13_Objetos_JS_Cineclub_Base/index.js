import { Pelicula, PeliculaException } from "./peliculas.js";
import { CatalogoCineclub } from "./catalogo.js";
import { Cartelera } from "./cartelera.js";

console.group("1. Objeto literal");

const peliculaLiteral = {
  id: "pel-001",
  titulo: "Cinema Paradiso",
  genero: "Drama",
  duracion: 124
};

console.log(peliculaLiteral);
console.groupEnd();

console.group("2. Consulta de propiedades");

console.log("Punto:", peliculaLiteral.titulo);
console.log("Corchetes:", peliculaLiteral["genero"]);
console.log(
  "¿Tiene duración?",
  Object.hasOwn(peliculaLiteral, "duracion")
);
console.log(
  "¿Tiene director?",
  Object.hasOwn(peliculaLiteral, "director")
);

console.groupEnd();

console.group("3. Clonación con spread");

// TODO A: crea peliculaExtendida mediante spread.
// Cambia únicamente la duración a 155.

// TODO B: muestra la duración original y la actualizada.
// Verificación: la original debe conservar 124.

console.groupEnd();

console.group("4. Modelo Pelicula");

// TODO C: crea una Pelicula con estos datos:
// "La llegada", "Ciencia ficción", 116.

// TODO D: muestra su ID y resumen().

console.groupEnd();

console.group("5. Validaciones y excepción");

// TODO E: cambia la duración válida a 118.

// TODO F: intenta crear estos tres casos dentro de try/catch:
// 1. título vacío
// 2. género vacío
// 3. duración negativa
// Verificación: cada caso debe lanzar PeliculaException.

console.groupEnd();

console.group("6. Objeto externo y JSON");

const datosExternos = {
  titulo: "Amélie",
  genero: "Comedia romántica",
  duracion: 122,
  notaInterna: "No copiar"
};

const peliculaJson = `{
  "titulo": "El viaje de Chihiro",
  "genero": "Animación",
  "duracion": 125
}`;

// TODO G: crea una película desde datosExternos.
// TODO H: verifica que notaInterna no se copió.
// TODO I: crea una película desde peliculaJson.
// TODO J: comprueba que es una instancia de Pelicula.

console.groupEnd();

console.group("7. Preparación para catálogo y cartelera");

const catalogo = new CatalogoCineclub();

// TODO K: agrega las películas creadas durante la práctica.
// TODO L: busca una película por su ID.
// TODO M: actualiza una duración sin modificar la instancia anterior.
// TODO N: crea una Cartelera y muestra sus resúmenes.

console.groupEnd();
