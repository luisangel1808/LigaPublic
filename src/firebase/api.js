import { db } from '../firebase';

export async function createData(data, collection){
    return await db
        .collection(collection)
        .doc()
        .set(data);
}

export async function deleteData(id, collection){
    return await db
        .collection(collection)
        .doc(id)
        .delete();
}

export async function updateData(data, collection){
    return await db
        .collection(collection)
        .doc()
        .update(data);
}