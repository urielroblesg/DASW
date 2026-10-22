import express from 'express';

import path from 'node:path';

const tasks = [
  { id: 1, title: 'Configurar Node.js', status: 'DONE', project: 'TaskFlow' },
  { id: 2, title: 'Crear rutas Express', status: 'TODO', project: 'TaskFlow' },
  { id: 3, title: 'Documentar API', status: 'TODO', project: 'DASW' },
];

const app = express();

app.use(express.json());

const publicDir = path.join(process.cwd(), 'public');

console.log(publicDir);

app.use('/assets', express.static(path.join(publicDir, 'assets')));

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

app.get('/api/tasks', (request, response) => {
  const { status } = request.query;

  console.log(status);

  let resultados = [];

  if (status?.trim()) {
    resultados = tasks.filter(t => t.status === status);
  }

  response.json(resultados.length === 0 ? tasks : resultados);
});

app.get('/api/tasks/:id', (request, response) => {
  const id = Number(request.params.id);

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return response.status(404).json({ mensaje: 'No se encontró la tarea ', id });
  }

  response.json(task);
});

app.post('/api/tasks', (request, response) => {
  const { title, status, project = 'TaskFlow' } = request.body;

  if (!title?.trim() || !status?.trim()) {
    return response.status(400).json({
      mensaje: 'title y status son obligatorios',
    });
  }

  const nextId = tasks.length + 1;

  const task = {
    id: nextId,
    title: title.trim(),
    status: status.trim(),
    project,
  };

  tasks.push(task);

  response.status(201).json(task);
});

app.use((request, response) => {
  const mensaje = {
    mensaje: 'Ruta no encontrada',
    path: request.path,
  };
  response.status(404).json(mensaje);
});

export default app;