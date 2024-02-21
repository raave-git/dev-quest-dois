//importações de funções:
import { report } from "./services/base.js";
import { get_user } from "./services/get_user.js";
import { get_repositories } from "./services/get_repositories.js";

//importações de objetos:
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

//main
document.getElementById('btn-search').addEventListener('click',()=>{
    const username = document.getElementById('input-search').value;
        
        if(validate_empty_input(username)){ return };
        get_user_data(username);
});

document.getElementById('input-search').addEventListener('keydown',(event)=>{
    const username = event.target.value;
    const key = event.code;

    if(key==='Enter'){
        if(validate_empty_input(username)){ return };
        get_user_data(username);
    }
});

function validate_empty_input(username){
    if(username.length===0){
        alert('Digite um número de usuário do GitHub');
        return true;
    } 
}


async function get_user_data(username){
    const user_response = await get_user(username);
    const repositories_response = await get_repositories(username);

        if(user_response.message==='Not Found'){
            screen.render_not_found();
            return
        }

            user.set_info(user_response);
            user.set_repositories(repositories_response);

                screen.render_user(user);
}

report('Ok')