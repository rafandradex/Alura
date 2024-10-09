let totalGeral;
limpar()

function adicionar() {
    // recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;

    if (quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;

    //adicionar no carrinho
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`

    //atualizar o valor total 
    totalGeral = totalGeral + preco;
    let valorTotal = document.getElementById("valor-total");
    valorTotal.innerHTML = `R$ ${totalGeral}`;
}

function limpar() {
    totalGeral = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$ 0";
    document.getElementById("quantidade").value = 1;
}