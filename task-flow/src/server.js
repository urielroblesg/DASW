import aplicacion from './app.js';

import { conectarBd } from './config/database.js';
import { sembrarRoles } from './seeds/roles.seed.js';
import { validarEntorno } from './config/env.js';
import { Usuario } from './entities/usuario.entidad.js';
import { Rol } from './entities/rol.entidad.js';
const PUERTO = process.env.PORT || 3000;

try {
  validarEntorno();
  await conectarBd();
  await Promise.all([Usuario.init(), Rol.init()]);
  await sembrarRoles();
  aplicacion.listen(PUERTO, () => console.log(`TaskFlow listo en http://localhost:${PUERTO}. MongoDB conectado.`));
} catch {
  console.error('No se pudo iniciar. Revisa MONGO_DB_URI, permisos, red e IP autorizada.');
  process.exitCode = 1;
}
