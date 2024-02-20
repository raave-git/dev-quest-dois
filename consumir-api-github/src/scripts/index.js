async function procurar_usuario(usuario){
    const resposta = await fetch(`https://api.github.com/users/taisadefante`);
    return await resposta.json();
}

console.log(await procurar_usuario())

// const botao_buscar = document.getElementById('btn-search');
//       botao_buscar.addEventListener('click');