
import express, { request, response } from 'express';


const app = express();


app.get('/api/health', (request, response) => {
    response.json({status: 'Ok', system: 'TaskFlow'});
});


app.get('/api/info', (request, response) => {
    const info = {
        name : 'TaskFlow',
        version: '1.0.0',
        description: 'TaskFlow, el sistema de seguimiento de tareas y proyectos.'
    };

    response.json(info);
});

app.get('/api/tasks', (request, response) => {
    const tasks = [
    { id: 1, title: 'Configurar Node.js', status: 'DONE', project: 'TaskFlow' },
    { id: 2, title: 'Crear rutas Express', status: 'TODO', project: 'TaskFlow' },
    { id: 3, title: 'Documentar API', status: 'TODO', project: 'DASW' }
  ];
  response.json(tasks);
});


app.use((request, response) =>{
    const mensaje = {
    mensaje: 'Ruta no encontrada',
    path: request.path
  }
    response.status(404).json(mensaje);
});

export default app;