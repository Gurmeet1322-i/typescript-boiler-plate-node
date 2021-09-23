import EXPRESS from 'express';
import { connectDatabase } from './db.startup';
export const APP = EXPRESS();

/********************************
 ***** Server Configuration *****
 ********************************/
APP.use(EXPRESS.json());
// APP.use(EXPRESS.urlencoded());
APP.use((req, res, next) => {
    console.log(`Api hitted ${req.url} method ${req.method}`);
    next();
});

/********************************
***** For handling CORS Error ***
*********************************/
APP.all('/*', (request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Content-Type, api_key, Authorization, x-requested-with, Total-Count, Total-Pages, Error-Message');
    response.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT, OPTIONS');
    response.header('Access-Control-Max-Age');
    next();
});
APP.use('/public', EXPRESS.static('../../public'));
connectDatabase().then(res=>{
console.log(`Database connected...`);
}).catch(err=>{
    throw err;
})