// Importaciones de modulos nativos y de terceros
import path from 'node:path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
// Importaciones de la aplicacion (Propias)
import taskRouter from './routes/task.route.js';
import { logger } from './middlewares/logger.js';
import errorHandler from './middlewares/error.handler.js';

const app = express();

app.use(helmet());

app.use(cors({
  origin: 'http://127.0.0.1:5500',
}));

app.use(logger);

app.use(express.json());

const publicDir = path.join(process.cwd(), 'public');

console.log(publicDir);

app.use('/assets', express.static(path.join(publicDir, 'assets')));

app.use('/api/v1/tasks', taskRouter);

app.get('/', (request, response) => {
  response.sendFile('index.html', {
    root: path.join(publicDir, 'views'),
    dotfiles: 'deny',
  });
});

app.get('/api/health', (request, response) => {
  response.json({ status: 'Ok', system: 'TaskFlow' });
});

app.get('/api/info', (request, response) => {
  const info = {
    name : 'TaskFlow',
    version: '1.0.0',
    description: 'TaskFlow, el sistema de seguimiento de tareas y proyectos.',
  };

  response.json(info);
});

app.use((request, response) => {
  const mensaje = {
    mensaje: 'Ruta no encontrada',
    path: request.path,
  };
  response.status(404).json(mensaje);
});

app.use(errorHandler);

export default app;