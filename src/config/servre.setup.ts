export const SERVRE = {
    PROTOCOL: process.env.SERVER_PROTOCOL || 'http',
    HOST: process.env.SERVER_HOST || '0.0.0.0',
    SERVER_PORT: process.env.PORT || '3000',
}