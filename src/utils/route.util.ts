import { CONFIG } from "../config";
import { Route } from "../custom-data-types/interfaces";
const createSwaggerUIForRoutes = (app: any, routes: Route[] = []) => {
    const swaggerInfo = {
        version: CONFIG.SWAGGER.info.version,
        tittle: CONFIG.SWAGGER.info.title,
        description: CONFIG.SWAGGER.info.description,
        "termsOfService": CONFIG.SWAGGER.info.termsOfService,
        "contact": {
            "name": CONFIG.SWAGGER.info.contact.name
        },
        "license": {
            "name": CONFIG.SWAGGER.info.license.name
        }
    };
    
}

export const routeUtil = {
    route: async (app: any, routes: Route[]) => {
        createSwaggerUIForRoutes(app, routes);
    },

}