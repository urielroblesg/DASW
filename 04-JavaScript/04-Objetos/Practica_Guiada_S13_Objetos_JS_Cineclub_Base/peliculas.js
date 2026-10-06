import { generarId } from "./utils.js";

export class PeliculaException extends Error {
  constructor(message) {
    super(message);
    this.name = "PeliculaException";
  }
}

export class Pelicula {
  #id;
  #titulo;
  #genero;
  #duracion;
  constructor(titulo, genero, duracion) {
    this.#id = generarId();
    this.titulo = titulo;
    this.genero = genero;
    this.duracion = duracion;
  }

  get id() {
    return this.#id;
  }

  get titulo() {
    return this.#titulo;
  }

  set titulo(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new PeliculaException("El titulo no puede estar vacio.");
    }
    this.#titulo = value.trim();
  }

  get genero() {
    return this.#genero;
  }

  set genero(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new PeliculaException("El genero no puede estar vacio.");
    }

    this.#genero = value.trim();
  }

  get duracion() {
    return this.#duracion;
  }

  set duracion(value) {
    if (!Number.isFinite(value) || value <= 0) {
      throw new PeliculaException(
        "La duracion no tiene el formato correcto/es invalida.",
      );
    }
    this.#duracion = value;
  }

  resumen() {
    return `${this.titulo} · ${this.genero} · ${this.duracion} min`;
  }

  static createFromObject(value) {
    if (value === null || typeof value !== "object" || Array.isArray(value)) {
      throw new PeliculaException("Se espera un objeto de Pelicula");
    }

    const { titulo, genero, duracion } = value;

    return new Pelicula(titulo, genero, duracion);
  }

  static createFromJson(jsonValue) {
    if (typeof jsonValue !== "string") {
      throw new PeliculaException("Se espera un texto en formato json.");
    }

    try {
      const obj = JSON.parse(jsonValue);
      return Pelicula.createFromObject(obj);
    } catch (error) {
      if (error instanceof PeliculaException) throw error;
      throw new PeliculaException("EL JSON de la peli no es valido.");
    }
  }
}
