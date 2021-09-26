export const SERVER = {
    PROTOCOL: process.env.SERVER_PROTOCOL || 'http',
    HOST: process.env.SERVER_HOST || '0.0.0.0',
    SERVER_PORT: process.env.PORT || '3000',
    SERVER_SOCKET:false, /** If you want to use socket then set it true else false */
    SERVER_SOCKET_PORT:'8080'
}