import aplicacion from './app.js';

import { conectarBd } from './config/database.js';
import { sembrarRoles } from './seeds/roles.seed.js';

const PUERTO = process.env.PORT || 3000;

try {
  await conectarBd();
  await sembrarRoles();
  aplicacion.listen(PUERTO, () => console.log(`TaskFlow listo en http://localhost:${PUERTO}. MongoDB conectado.`));
} catch {
  console.error('No se pudo iniciar. Revisa MONGO_DB_URI, permisos, red e IP autorizada.');
  process.exitCode = 1;
}
