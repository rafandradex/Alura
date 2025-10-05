function avaliarDesempenho(pontu, callback) {
    console.log(`Pontuação: ${pontu}`);
    callback(pontu)
}

function gerarMensagem(pontu) {
    if (pontu >= 70) {
        console.log(`Parabéns! Você foi aprovado!`);
    } else if (pontu >= 50) {
        console.log("Atenção! Você precisa de reforço.");
    } else {
        console.log("Infelizmente, você foi reprovado. Tente novamente.");
    }

}

avaliarDesempenho(1, gerarMensagem)