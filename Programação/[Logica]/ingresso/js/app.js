function comprar() {
    let tipo = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);
    quantidade = 1;

    if (quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida.');
    }

    if (tipo == 'pista') {
        comprarPista(quantidade);
    } else if (tipo == 'superior') {
        comprarSuperior(quantidade);
    } else if (tipo == 'inferior') {
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade) {
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    if (quantidade > qtdPista) {
        alert("Valor indesponivel");
    } else {
        qtdPista = qtdPista - quantidade;
        document.getElementById("qtd-pista").textContent = qtdPista;
    }
}

function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if (quantidade > qtdSuperior) {
        alert("Valor indesponivel");
    } else {
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
    }
}

function comprarInferior(quantidade) {
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent)
    if (quantidade > qtdInferior) {
        alert("Valor indesponivel");
    } else {
        qtdInferior = qtdInferior - quantidade;
        document.getElementById("qtd-inferior").textContent=qtdInferior;
    }
}