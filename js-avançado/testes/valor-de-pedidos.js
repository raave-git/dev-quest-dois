const pedidos = {
    itens: [
        { nome: 'Pó de Prata Lunar', valor: 1500 },
        { nome: 'Armadura de Ouro-solar', valor: 8000 }
    ]
}

const calcular_valor = pedido => 
    pedido.itens.reduce((total_de_pedidos, pedidos_atuais) => total_de_pedidos + pedidos_atuais.valor, 0); 

console.log(calcular_valor(pedidos));

