const elementoChute = document.querySelector("#chute");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-PT'
recognition.start()

recognition.addEventListener("result", onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificarSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `        <div>Você disse:</div>
    <span class="box">${chute}</span>`
}

recognition.addEventListener("end", () => recognition.start())