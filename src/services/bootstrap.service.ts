import { Admin } from "../custom-data-types/interfaces";
import { MODELS } from "../models"
import { commonFunctions } from "../utils/common.functions";

export const bootstrap = {
    /**
     * function to create default admin
     */
    createAdmin: async () => {
        const admin = await MODELS.ADMIN.countDocuments();
        if (!admin) {
            const adminDetail: Admin = {
                email: process.env.EMAIL || 'admin@yopmail.com',
                password: commonFunctions.hashPassword(process.env.PASSWORD || '123456')
            };
            await MODELS.ADMIN.create(adminDetail);
        }
    }
}