import express, { request, response } from "express";

const app = express();


app.get('/api/health', (request, response) => {
    response.json({status: 'Ok', system: 'TaskFlow'});
});


export default app;
