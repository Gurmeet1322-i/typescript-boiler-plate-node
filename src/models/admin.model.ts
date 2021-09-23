/************* Modules ***********/
import MONGOOSE from 'mongoose';
import { Admin } from '../custom-data-types/interfaces';
/**************************************************
 ************* Admin Model or collection ***********
 **************************************************/
const adminSchema = new MONGOOSE.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});
adminSchema.set('timestamps', true);

export default MONGOOSE.model<Admin>('admin', adminSchema);