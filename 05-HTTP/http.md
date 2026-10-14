# Modelo mental

HTTP es un protocolo de aplicación que permite intercambiar mensajes entre un cliente y un servidor. El cliente envía una **solicitud** y el servidor devuelve una **respuesta**. Cada mensaje contiene una línea inicial, headers, una línea vacía y, cuando aplica, un cuerpo.

```mermaid
sequenceDiagram
    autonumber
    actor Cliente
    participant Servidor

    Cliente->>Servidor: POST /api/events HTTP/1.1<br/>Content-Type: application/json<br/>{ "nombre": "Concierto" }
    Servidor-->>Cliente: HTTP/1.1 201 Created<br/>Location: /api/events/3
```

Una solicitud no es una función ni una llamada directa al servidor. Es un mensaje que viaja por una conexión y describe qué recurso quiere operar el cliente.
