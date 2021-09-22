export const DB = {
    PROTOCOL: process.env.DB_PROTOCOL || 'mongodb',
    HOST: process.env.DB_HOST || 'mongodb://localhost:27017/test',
    PORT: process.env.DB_PORT || 27017,
    NAME: process.env.DB_NAME || 'typescript_practice',
    USER: '',
    PASSWORD: ''
}