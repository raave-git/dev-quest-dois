export const screen = {
    user_profile: document.querySelector('.profile-data'),
    render_user(user){
        this.user_profile.innerHTML = `<div class="info">
                                            <img src="${user.avatar_url}" alt="Foto de perfil do usuário.">
                                                <div class="data">
                                                    <h1>${user.name ?? "Usuário sem nome."}</h1>
                                                        <p>${user.bio ?? "Usuário sem bio."}</p>
                                                </div>
                                        </div>`

        let repositories_itens = '';
        user.repositories.forEach(repo => repositories_itens += `<li><a href="${repo.html_url}" target="_black">${repo.name}</a></li>`);

        if(user.repositories.length > 0){
            this.user_profile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios:</h2>   
                                                    <ul>
                                                        ${repositories_itens}
                                                    </ul>
                                            </div>`
        }
    },
    
    render_not_found(){
        this.user_profile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}