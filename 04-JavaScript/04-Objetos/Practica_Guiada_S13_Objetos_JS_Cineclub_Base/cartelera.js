export class Cartelera {
  constructor(catalogo) {
    this.catalogo = catalogo;
  }

  resumenes() {
    return this.catalogo.listar().map((pelicula) => pelicula.resumen());
  }

  mostrarEnConsola() {
    console.table(this.resumenes());
  }
}
