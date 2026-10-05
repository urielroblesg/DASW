import { Pelicula, PeliculaException } from "./peliculas.js";

export class CatalogoCineclub {
  #peliculas = [];

  agregar(pelicula) {
    if (!(pelicula instanceof Pelicula)) {
      throw new PeliculaException("El catálogo sólo acepta películas");
    }

    this.#peliculas.push(pelicula);
    return pelicula;
  }

  buscarPorId(id) {
    return this.#peliculas.find((pelicula) => pelicula.id === id) ?? null;
  }

  listar() {
    return [...this.#peliculas];
  }

  actualizar(id, cambios) {
    // TODO 6.1: encuentra el índice de la película.
    // TODO 6.2: lanza PeliculaException si no existe.
    // TODO 6.3: crea un objeto con los datos actuales y ...cambios.
    // TODO 6.4: crea una Pelicula nueva, reemplaza y devuelve.
    // Verificación: la instancia anterior no debe cambiar.
  }
}
