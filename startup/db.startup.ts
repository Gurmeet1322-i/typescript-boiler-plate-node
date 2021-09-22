import MONGOOSE from 'mongoose';
import { CONFIG } from '../src/config';
export const connectDatabase = async () => {
    return await MONGOOSE.connect(CONFIG.DB.HOST, (err) => {
        if (err) {
            console.error('Error: ', err);
        }
    });
}