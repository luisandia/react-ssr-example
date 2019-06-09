import { fetchUsers } from '../actions';

export async function loadDataUsers(store) {
    console.log("cargando desde servidor")
    return await store.dispatch(fetchUsers());
}