import path from 'path';
import http from 'http';
import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import favicon from 'serve-favicon';

import { IndexRouter } from 'server/routers/IndexRouter';
import { ApiRouter } from 'server/routers/ApiRouter';
import { NotFoundRouter } from 'server/routers/NotFoundRouter';

import { config } from "server/config";
import { errorHandler } from "server/controller/error/ErrorHandler";

const app = express();

// Support Gzip
app.use(compression());

// Support post requests with body data (doesn't support multipart, use multer)
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Setup logger
app.use(morgan('combined'));

// Index
app.use('/', IndexRouter());

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(favicon(path.resolve(__dirname, '..', 'build', "favicon.ico")));

// APIs
app.use('/api', ApiRouter());

// Not Found
app.use(NotFoundRouter());

// Error
app.use(errorHandler);

const server = http.createServer(app);

// Listen
server.listen(config.server.port);

server.on("listening", () => {
    console.log(`App listening on port ${config.server.port}!`);
})

export interface ErrnoException extends Error {
    errno?: number;
    code?: string;
    path?: string;
    syscall?: string;
    stack?: string;
}

// Process error
server.on('error', (error: ErrnoException) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof config.server.port === 'string' ? 'Pipe ' + config.server.port : 'Port ' + config.server.port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
});
