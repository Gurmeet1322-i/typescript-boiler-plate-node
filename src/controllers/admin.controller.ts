import { Admin } from "../custom-data-types/interfaces";

export const adminController = {
    /**
     * function for admin login
     * @param payload 
     */
    AdminLogin: async (payload: Admin) => {
        console.log('------------>>>', payload);
    }
}