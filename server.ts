import DONENV from 'dotenv';
/** configer .env file */
DONENV.config();
import Http from 'http';
import { CONFIG } from './config';
import APP from './startup/express.startup';

Http.createServer(APP).listen(CONFIG.SERVER.SERVER_PORT);