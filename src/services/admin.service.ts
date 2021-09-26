import { Admin } from "../custom-data-types/interfaces"

export const adminService: any = {
    createAdmin: async () => {

    },
    adminLogin: async (payload:Admin) => {
        console.log('--------------------->>',payload)
    }
}