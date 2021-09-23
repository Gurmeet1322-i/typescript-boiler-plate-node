import MONGOOSE from 'mongoose';
import { CONFIG } from '../config';
export const connectDatabase = async () => {
    return await MONGOOSE.connect(CONFIG.DB.URL);
}