import { Server } from 'socket.io';

let io = null;

export function initSocket(server) {
    if (!io) {
        io = new Server(server, {
            cors: { origin: "*" }
        });

        io.on('connection', (socket) => {
            console.log('Un cliente se conectó:', socket.id);
            
            socket.on('disconnect', () => {
                console.log('Un cliente se desconectó:', socket.id);
            });
        });
    }
}

export function getSocket() {
    if (!io) {
        throw new Error('Socket.IO no ha sido inicializado. Llama a initSocket(server) primero.');
    }
    return io;
}