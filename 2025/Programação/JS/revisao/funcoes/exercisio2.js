function calcularDesconto(preco, desc) {
    let desconto = desc / 100
    let dinheiroAtirar = preco * desconto
    let novoPreco = preco - dinheiroAtirar

    //const valoraFinal = preco - (preco * desconto/100) Opção mais facil

    console.log(novoPreco);
}

calcularDesconto(200, 20)