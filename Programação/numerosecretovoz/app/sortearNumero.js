const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Numero Secreto: ' + numeroSecreto)

const elementoMenorValor = document.querySelector("#menor-valor")
elementoMenorValor.textContent = menorValor

const elementoMaiorValor = document.querySelector("#maior-valor")
elementoMaiorValor.textContent = maiorValor