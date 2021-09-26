import { DATABASE } from './db.setup'
import { SERVER } from './servre.setup'
import { swaggerInfo } from './swagger';
export const CONFIG = {
    SERVER: SERVER,
    DB: DATABASE,
    SWAGGER:swaggerInfo
};