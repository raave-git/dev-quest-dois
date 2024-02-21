import { api_url } from "./variables.js";

export async function get_user(username){
    const response = await fetch(`${api_url}/${username}`);
    return await response.json();
}