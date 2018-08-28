import { db } from './Firebase';

export const fetchUserData=()=>{
    return db.ref('userdata').once('value');
}