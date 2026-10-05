import { generarId } from "./utils.js";

export class PeliculaException extends Error {
  // TODO 3: implementa la excepción propia.
  // Verificación: error.name debe ser "PeliculaException".
}

export class Pelicula {
  // TODO 1.1: declara #id, #titulo, #genero y #duracion.

  constructor(titulo, genero, duracion) {
    // TODO 1.2: genera el identificador.
    // TODO 1.3: asigna los datos mediante sus setters.
  }

  get id() {
    // TODO 1.4: devuelve el identificador.
  }

  get titulo() {
    // TODO 2.1: devuelve el título.
  }

  set titulo(value) {
    // TODO 2.2: exige texto no vacío y guarda trim().
    // Lanza PeliculaException si el valor es incorrecto.
  }

  get genero() {
    // TODO 2.3: devuelve el género.
  }

  set genero(value) {
    // TODO 2.4: exige texto no vacío y guarda trim().
    // Lanza PeliculaException si el valor es incorrecto.
  }

  get duracion() {
    // TODO 2.5: devuelve la duración.
  }

  set duracion(value) {
    // TODO 2.6: acepta números finitos mayores que cero.
    // Lanza PeliculaException si el valor es incorrecto.
  }

  resumen() {
    return `${this.titulo} · ${this.genero} · ${this.duracion} min`;
  }

  static createFromObject(value) {
    // TODO 4.1: valida que value sea un objeto y no un arreglo.
    // TODO 4.2: desestructura titulo, genero y duracion.
    // TODO 4.3: devuelve una instancia nueva.
  }

  static createFromJson(jsonValue) {
    // TODO 5.1: valida que se recibió texto.
    // TODO 5.2: usa JSON.parse() y createFromObject().
    // TODO 5.3: convierte errores de sintaxis en PeliculaException.
  }
}
