import DONENV from 'dotenv';
import { socketService } from './src/socket/socket.service'
/** configer .env file */
DONENV.config();
import Http from 'http';
import { CONFIG } from './src/config';
import { APP } from './src/startup/express.startup';

Http.createServer(APP).listen(CONFIG.SERVER.SERVER_PORT, () => {
    console.log(`Server is running on port ${CONFIG.SERVER.SERVER_PORT}`)
    if (CONFIG.SERVER.SERVER_SOCKET) {
        let io: any = require('socket.io')({
            transports: ['websocket'],
        });
        io.attach(CONFIG.SERVER.SERVER_SOCKET_PORT);
        socketService.connect(io);
        console.log(`Server socket port is ${CONFIG.SERVER.SERVER_SOCKET_PORT}`)
    }
});
