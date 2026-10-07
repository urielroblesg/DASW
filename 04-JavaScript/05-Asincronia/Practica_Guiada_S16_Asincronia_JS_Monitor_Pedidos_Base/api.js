'use strict';

// Base de datos simulada para la práctica.
const pedidos = {
  'A-17': {
    id: 'A-17',
    estado: 'En camino',
    total: 420,
    cliente: 'Ana Torres'
  },
  'B-08': {
    id: 'B-08',
    estado: 'Preparando',
    total: 185,
    cliente: 'Luis Vega'
  }
};

/**
 * Crea una promesa que se cumple después del tiempo indicado.
 *
 * TODO PG1:
 * - Retorna una nueva Promise.
 * - Usa setTimeout para llamar a resolve después de ms.
 */
export const esperar = (ms) => {
  // TODO PG1: implementa esta función.
  throw new Error('TODO PG1 pendiente: implementar esperar(ms)');
};

/**
 * Busca un pedido después de una espera simulada.
 *
 * TODO PG2:
 * - Retorna una Promise.
 * - Espera aproximadamente 900 ms.
 * - Resuelve con una copia del pedido cuando el ID existe.
 * - Rechaza con Error cuando el ID no existe.
 */
export const obtenerPedido = (id) => {
  // TODO PG2: implementa esta función.
  throw new Error('TODO PG2 pendiente: implementar obtenerPedido(id)');
};

/**
 * Simula la consulta de la persona que realiza la entrega.
 *
 * TODO PG7:
 * - Usa esperar(700).
 * - Devuelve una promesa cumplida con el objeto del repartidor.
 */
export const obtenerRepartidor = () => {
  // TODO PG7: implementa esta función.
  throw new Error('TODO PG7 pendiente: implementar obtenerRepartidor()');
};

