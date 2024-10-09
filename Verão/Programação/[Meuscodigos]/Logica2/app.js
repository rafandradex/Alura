let numeroLimite = 100;
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarnNumeroAleatorio();
let tentativas = 1;
let listaDeQuemAcertou = [];
let numeroLacado = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
    // responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('titulo', 'Jogo do número secreto');
    exibirTextoNaTela('paragrafo', `Escolha um numero entre 1 e ${numeroLimite}`);
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    listaDeNumerosSorteados.push(chute);
    document.getElementById("numerochutes").innerHTML = chute;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('titulo', 'Acertou');
        let palavratentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu um numero secreto com ${tentativas} ${palavratentativas}!`;
        exibirTextoNaTela('paragrafo', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
        quemAcertou()
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('paragrafo', 'O numero secreto é menor ⬇️');
        } else {
            exibirTextoNaTela('paragrafo', 'O numero secreto é maior ⬆️');
        }
        // tentativas = tentativas + 1;
        tentativas++;
        limparCampo()
    }
}

function gerarnNumeroAleatorio() {
    let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(NumeroEscolhido)) {
        return gerarnNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(NumeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return NumeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo() {
    numeroSecreto = gerarnNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function quemAcertou() {
    let quemacertou = prompt('Quem é que acertou?')
    listaDeQuemAcertou.push(quemacertou)
    document.getElementById('ultimo').innerHTML = `As ultimas pessoas que acertaram: ${listaDeQuemAcertou}`;
}
