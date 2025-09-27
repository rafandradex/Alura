let jogosAlugados;

function totalDeJogosAlugado() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");
    let nomeJogo = gameClicado.querySelector(".dashboard__item__name");

    if (botao.classList.contains("dashboard__item__button--return")) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            botao.classList.remove("dashboard__item__button--return");
            imagem.classList.add("dashboard__item__img--rented");
            botao.innerHTML = "Alugar";
            jogosAlugados--;
        }
    } else {
        if (confirm(`Você tem certeza que quer alugar o jogo ${nomeJogo.textContent}?`)) {
            botao.classList.add("dashboard__item__button--return");
            imagem.classList.remove("dashboard__item__img--rented");
            botao.innerHTML = "Devolver";
            jogosAlugados++;
        }
    }

    totalDeJogosAlugado();
}

document.addEventListener("DOMContentLoaded", function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    totalDeJogosAlugado();
})