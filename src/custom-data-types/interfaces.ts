/**
 * Interface for define connection of database
 */
export interface DbConfig {
    PROTOCOL: string
    HOST: string,
    PORT: number,
    NAME: string,
    USER: string,
    PASSWORD: string,
}

export interface Admin{
    email:string,
    password:string
}