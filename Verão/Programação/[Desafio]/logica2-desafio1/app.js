let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole() {
    console.log('O botão foi clicado');
}

function mensagemAlert() {
    alert('Eu amo JS')
}


function perguntaPrompt() {
    let cidade = prompt('Diz um nome de um cidade');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function Somadecria() {
    let numero1 = parseInt(prompt('Diz um numero de 1 a 10: '));
    let numero2 = parseInt(prompt('Diz um numero de 1 a 10: '));
    let soma = numero1 + numero2
    alert(`A soma desses numeros da ${soma}`)
}