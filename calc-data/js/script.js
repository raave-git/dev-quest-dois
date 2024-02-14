function reporte(texto){
    console.log(texto);
}

// const sub  = document.getElementById('subtrator');
//     sub.addEventListener('mouseover',()=>{
//         sub.classList.add('opcao_hover');
//     })

//     sub.addEventListener('mouseout', () => {
//         sub.classList.remove('opcao_hover');
//     });





// Seleciona o formulário pelo ID
const formulario = document.getElementById('formulario');

// Adiciona um evento de clique ao botão
document.getElementById('pegar_valor').addEventListener('click', function(event) {
    // Evita o comportamento padrão do formulário de ser enviado
    event.preventDefault();

    // Seleciona o radio button selecionado
    const operacaoSelecionada = formulario.querySelector('input[name="operacoes"]:checked');

    // Verifica se algum radio button foi selecionado
    if (operacaoSelecionada) {
        // Captura o valor do radio button selecionado
        const valorSelecionado = operacaoSelecionada.value;
        
        // Faça o que precisar com o valor capturado
        alert('Valor selecionado: ' + valorSelecionado);
    } else {
        // Caso nenhum radio button tenha sido selecionado
        alert('Nenhuma operação selecionada.');
    }
});


