const express = require('express');
const path = require('path');

const qr = require('./routes/qr.route');

class Server {

    app;
    port;

    constructor() {
        this.app = express();
        this.port = 3000;
        this.middlewares();
        this.routes();
        this.folder();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    };

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/qr', qr);
    }

    folder() {
        this.app.use('uploads', express.static(path.resolve('uploads')));
    }
}

const server = new Server();

server.listen();