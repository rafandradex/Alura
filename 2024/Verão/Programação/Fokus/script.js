const html = document.querySelector("html");
const botaoIniciar = document.querySelector('.app__card-primary-button');
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const displayTempo = document.querySelector("#timer");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const musicaFocoInput = document.getElementById("alternar-musica");
const musica = new Audio('/sons/luna-rise-part-one.mp3') 
const startpauseBt = document.querySelector("#start-pause");
const startpauseBtText = document.querySelector("#start-pause span");


let tempoDecorridoEmSegundos = 1500
let intervaloID = null
const start = new Audio('/sons/play.wav') 
const pause = new Audio('/sons/pause.mp3') 
const final = new Audio('/sons/beep.mp3') 

musica.loop = true;

musicaFocoInput.addEventListener("change", () => {
    if(musica.paused) {

        musica.play();
    } else {
        musica.pause();
    }
})

focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    alterarContexto("foco")
    focoBt.classList.add("active")
})

curtoBt.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 300
    alterarContexto("descanso-curto")
    curtoBt.classList.add("active")
})

longoBt.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 900
    alterarContexto("descanso-longo")
    longoBt.classList.add("active")
})

function alterarContexto(contexto) {
    mostrarTempo()
    botoes.forEach(function (contexto){
        contexto.classList.remove("active")
    })
    html.setAttribute("data-contexto", contexto)
    banner.setAttribute("src", `/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `              Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`

            break;

        case "descanso-curto":
            titulo.innerHTML = `              Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`

            break;

        case "descanso-longo":
            titulo.innerHTML = `             Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`

        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0) {
        // final.play()
        const focoAtivo = html.getAttribute('data-contexto') == 'foco'
        if (focoAtivo)  {
            const evento = new CustomEvent('FocoFinalizado')
            document.dispatchEvent(evento)
        }
        zerar()
        return
    }
   tempoDecorridoEmSegundos -= 1
   mostrarTempo()
}

startpauseBt.addEventListener("click", iniciarOupausar)

function iniciarOupausar() {
    if(intervaloID){
        pause.play()
        zerar()
        return
    }
    intervaloID = setInterval(contagemRegressiva, 1000)
    startpauseBtText.textContent = "Pausar"
    start.play()
}

function zerar() {
    clearInterval(intervaloID)
    startpauseBtText.textContent = "Começar"
    intervaloID = null
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFotmatado = tempo.toLocaleString('pt', {minute: '2-digit', second: '2-digit'})
    displayTempo.innerHTML = `${tempoFotmatado}`
}

mostrarTempo()