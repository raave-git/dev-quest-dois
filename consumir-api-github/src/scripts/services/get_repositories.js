import { api_url, repos_quantity } from "./variables.js";

export async function get_repositories(username){
    const response = await fetch(`${api_url}/${username}/repos?per_page=${repos_quantity}`);
    return await response.json();
}