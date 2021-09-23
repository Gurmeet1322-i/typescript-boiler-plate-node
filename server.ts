import DONENV from 'dotenv';
/** configer .env file */
DONENV.config();
import Http from 'http';
import { CONFIG } from './src/config';
import {APP} from './src/startup/express.startup';

Http.createServer(APP).listen(CONFIG.SERVER.SERVER_PORT);