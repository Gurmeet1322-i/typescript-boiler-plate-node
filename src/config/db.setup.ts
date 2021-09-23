import { DbConfig } from "../custom-data-types/interfaces"

const DB: DbConfig = {
    PROTOCOL: process.env.DB_PROTOCOL || 'mongodb',
    HOST: process.env.DB_HOST || '127.0.0.1',
    PORT: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 27017,
    NAME: process.env.DB_NAME || 'typescript_practice',
    USER: '',
    PASSWORD: '',
}

export const DATABASE = {
    // URL:process.env.dbUrl || `${DB.PROTOCOL}://${DB.USER}:${DB.PASSWORD}@${DB.HOST}:${DB.PORT}/${DB.NAME}`
    URL: process.env.dbUrl || `${DB.PROTOCOL}://${DB.HOST}:${DB.PORT}/${DB.NAME}`
}
