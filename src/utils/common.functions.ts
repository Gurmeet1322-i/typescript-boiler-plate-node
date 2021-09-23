import BCRYPT from 'bcryptjs';
import { SECURITY } from './constants';
export const commonFunctions = {
    /**
     * incrypt password in case user login implementation
     * @param {*} payloadString 
     */
    hashPassword: (payloadString: string) => {
        return BCRYPT.hashSync(payloadString, SECURITY.BCRYPT_SALT);
    },

    /**
     * function to compare hash value and real value are equal or not
     * @param payloadPassword 
     * @param userPassword 
     * @returns 
     */
    compareHash:(payloadPassword:string,userPassword:string)=>{
        return BCRYPT.compareSync(payloadPassword,userPassword);
    }

}