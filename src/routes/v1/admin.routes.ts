import { Route } from "../../custom-data-types/interfaces";
import * as Joi from 'joi';
import { CONSTROLLERS } from "../../controllers";
export const adminRoutes: Route[] = [
    {
        method: 'POST',
        path: '/v1/admin/login',
        joiSchemaForSwagger: {
            body: {
                email: Joi.string().required().description('Admin email.'),
                password: Joi.string().required().description('Admin password.')
            },
            group: 'Admin',
            description: 'Route to login an admin to system.',
            model: 'Admin Login'
        },
        handler: CONSTROLLERS.adminController.AdminLogin
    }
]