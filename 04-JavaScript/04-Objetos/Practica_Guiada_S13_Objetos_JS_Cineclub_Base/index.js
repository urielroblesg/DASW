import { Pelicula, PeliculaException } from "./peliculas.js";
import { CatalogoCineclub } from "./catalogo.js";
import { Cartelera } from "./cartelera.js";

console.group("1. Objeto literal");

const peliculaLiteral = {
  id: "pel-001",
  titulo: "Cinema Paradiso",
  genero: "Drama",
  duracion: 124,
};

console.log(peliculaLiteral);
console.groupEnd();

console.group("2. Consulta de propiedades");

console.log("Punto:", peliculaLiteral.titulo);
console.log("Corchetes:", peliculaLiteral["genero"]);
console.log("¿Tiene duración?", Object.hasOwn(peliculaLiteral, "duracion"));
console.log("¿Tiene director?", Object.hasOwn(peliculaLiteral, "director"));

console.groupEnd();

console.group("3. Clonación con spread");

// Cambia únicamente la duración a 155.
const peliculaExtendida = {
  ...peliculaLiteral,
  duracion: 155,
};
// Verificación: la original debe conservar 124.
console.log("Duración original:", peliculaLiteral.duracion);
console.log("Duración actualizada:", peliculaExtendida.duracion);

console.groupEnd();

console.group("4. Modelo Pelicula");

const pelicula = new Pelicula("La llegada", "Ciencia ficción", 116);

console.log("ID:", pelicula.id);
console.log("Resumen:", pelicula.resumen());

console.groupEnd();

console.group("5. Validaciones y excepción");

pelicula.duracion = 118;
console.log("Duración válida:", pelicula.duracion);

// Verificación: cada caso debe lanzar PeliculaException.
for (const datos of [
  ["", "Suspenso", 160],
  ["Psicosis", "", 109],
  ["Psicosis", "Suspenso", -10],
]) {
  try {
    new Pelicula(...datos);
  } catch (error) {
    console.error(error);
    console.assert(error instanceof PeliculaException);
  }
}
console.groupEnd();

console.group("6. Objeto externo y JSON");

const datosExternos = {
  titulo: "Amélie",
  genero: "Comedia romántica",
  duracion: 122,
  notaInterna: "No copiar",
};

const peliculaJson = `{
  "titulo": "El viaje de Chihiro",
  "genero": "Animación",
  "duracion": 125
}`;

const amelie = Pelicula.createFromObject(datosExternos);
const chihiro = Pelicula.createFromJson(peliculaJson);

console.log("Amélie:", amelie);
console.assert(!Object.hasOwn(amelie, "notaInterna"));
console.log("Chihiro:", chihiro);
console.assert(chihiro instanceof Pelicula);

console.groupEnd();

console.group("7. Preparación para catálogo y cartelera");

const catalogo = new CatalogoCineclub();

// TODO K: agrega las películas creadas durante la práctica.
// TODO L: busca una película por su ID.
// TODO M: actualiza una duración sin modificar la instancia anterior.
// TODO N: crea una Cartelera y muestra sus resúmenes.

console.groupEnd();
