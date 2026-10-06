class PeliculaException extends Error {
  constructor(message) {
    super(message);
    this.name = "PeliculaException";
  }
}

class Pelicula {
  #titulo;
  constructor(titulo) {
    this.titulo = titulo;
  }

  get titulo() {
    return this.#titulo;
  }

  set titulo(value = "") {
    if (typeof value !== "string" || value.length == 0) {
      throw new PeliculaException("El titulo no puede estar vacio.");
    }

    this.#titulo = value;
  }
  resumen() {
    console.log(this.#titulo);
  }
}

const mostrarPelicula = ({ titulo, duracion = 60 }) => {
  console.log(titulo, " ", duracion);
};

try {
  const inception = new Pelicula("Inception");

  console.log(inception.titulo);

  mostrarPelicula(inception);
  
} catch (error) {
  console.error(error.message);
  console.log(error instanceof PeliculaException);
}
const peliculaLiteral = {
  id: "pel-001",
  titulo: "Cinema Paradiso",
  genero: "Drama",
  duracion: 124
};

const json = JSON.stringify(peliculaLiteral);

console.log(json);

const pelicula = JSON.parse(json);

