const produtos = [
    { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
    { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
    { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
    { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];

console.log('Relatório de produtos vendidos:\n');


produtos.forEach((produto) => {
    console.log(`Produto: ${produto.nome} | Preço: ${produto.preco} | Quantidade vendida: ${produto.quantidadeVendida}`);
})

console.log(`\nProdutos com alto volume de vendas (> 100 unidades):`);


produtos.forEach((produto) => {
    if (produto.quantidadeVendida > 100) {
        console.log(`${produto.nome}`);

    }
})

console.log(`\nTotal de vendas por produto:`);


let maiorValor = 0

produtos.forEach((produto) => {
    let ganhosTotal = produto.quantidadeVendida * produto.preco
    console.log(`${produto.nome}: R$ ${ganhosTotal}`);
    if (maiorValor < ganhosTotal) {
        maiorValor = ganhosTotal
        mairNome = produto.nome
    }
})

console.log(`\nProduto mais lucrativo: ${mairNome} com R$ ${maiorValor} em vendas.`);

