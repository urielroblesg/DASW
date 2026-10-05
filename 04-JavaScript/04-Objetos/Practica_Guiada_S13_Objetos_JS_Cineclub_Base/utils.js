/**
 * Genera un identificador para cada película.
 */
export function generarId() {
  if (globalThis.crypto?.randomUUID) {
    return crypto.randomUUID();
  }

  return `pel-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
