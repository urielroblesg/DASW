'use strict';

import {
  esperar,
  obtenerPedido,
  obtenerRepartidor
} from './api.js';

const form = document.querySelector('#pedido-form');
const input = document.querySelector('#pedido-id');
const estado = document.querySelector('#estado');
const resultado = document.querySelector('#resultado');
const botonConsultar = document.querySelector('#consultar-btn');

/*
 * PREDICCIÓN 1. Orden de ejecución
 *
 * Antes de ejecutar este bloque, escribe el orden esperado en el comentario.
 * Después comprueba tu respuesta en la consola.
 */

// Orden esperado: _______________________________________________

// console.log('A: inicio');

// setTimeout(() => {
//   console.log('B: temporizador');
// }, 0);

// console.log('C: fin');

/*
 * DEMOSTRACIÓN. Operación bloqueante
 *
 * Descomenta la llamada sólo durante la actividad indicada por tu docente.
 */
const bloquearDurante = (ms) => {
  const limite = Date.now() + ms;

  while (Date.now() < limite) {
    // El hilo permanece ocupado.
  }
};

// bloquearDurante(1500);

/*
 * PREDICCIÓN 2. Microtareas y tareas
 *
 * Predice el orden antes de descomentar y ejecutar el bloque.
 */

// console.log('1');
// Promise.resolve().then(() => console.log('2'));
// setTimeout(() => console.log('3'), 0);
// console.log('4');
// Orden esperado: _______________________________________________

/**
 * TODO PG3. Consumir una promesa con then, catch y finally.
 *
 * Requisitos:
 * - Retorna la cadena completa.
 * - Muestra el pedido en then.
 * - Muestra error.message en catch.
 * - Registra "Consulta terminada" en finally.
 */
const cargarPedidoConThen = (id) => {
  // TODO PG3: implementa esta función.
  throw new Error('TODO PG3 pendiente: implementar cargarPedidoConThen(id)');
};

/**
 * TODO PG4. Retornar valores dentro de una cadena.
 *
 * Debe producir una promesa que se cumpla con el texto:
 * "Total: $420", por ejemplo.
 */
const totalDelPedido = (id) => {
  // TODO PG4: implementa esta función.
  throw new Error('TODO PG4 pendiente: implementar totalDelPedido(id)');
};

/**
 * TODO PG5. Reescribir el consumo mediante async/await.
 *
 * Espera obtenerPedido(id) y retorna el pedido.
 */
const cargarPedido = async (id) => {
  // TODO PG5: implementa esta función.
  throw new Error('TODO PG5 pendiente: implementar cargarPedido(id)');
};

/**
 * Activa o desactiva el estado visual de carga.
 * Completa esta función durante el TODO PG6.
 */
const mostrarCarga = (activa) => {
  // TODO PG6: actualiza el texto y el botón.
  console.log('Estado de carga:', activa);
};

/**
 * Presenta los datos de un pedido dentro de #resultado.
 */
const mostrarPedido = (pedido) => {
  // TODO PG6: genera el HTML del pedido.
  console.log('Pedido recibido:', pedido);
};

/**
 * Presenta un mensaje de error dentro de #resultado.
 */
const mostrarError = (mensaje) => {
  // TODO PG6: genera el HTML del error.
  console.error(mensaje);
};

/**
 * TODO PG6. Manejar éxito, error y limpieza.
 *
 * Requisitos:
 * - Activa la carga antes de comenzar.
 * - Usa try para esperar obtenerPedido(id).
 * - Usa catch para mostrar el error.
 * - Usa finally para desactivar la carga.
 */
const consultarPedido = async (id) => {
  // TODO PG6: implementa esta función.
  throw new Error('TODO PG6 pendiente: implementar consultarPedido(id)');
};

/**
 * TODO PG8. Ejecutar operaciones independientes en paralelo.
 *
 * Usa Promise.all con obtenerPedido(id) y obtenerRepartidor().
 * Retorna un objeto con las propiedades pedido y repartidor.
 */
const cargarResumen = async (id) => {
  // TODO PG8: implementa esta función.
  throw new Error('TODO PG8 pendiente: implementar cargarResumen(id)');
};

/*
 * TODO PG6. Conectar el formulario.
 *
 * Conserva event.preventDefault(). Después:
 * - Limpia y normaliza el ID.
 * - Llama a consultarPedido(id).
 */
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();

    // TODO PG6: normaliza el ID y llama consultarPedido(id).
    console.log('Formulario listo. Falta completar el TODO PG6.');
  });
} else {
  console.info('Completa el TODO 10 para habilitar el formulario.');
}

