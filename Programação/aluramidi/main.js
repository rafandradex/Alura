function tocaSom(seletorAudio) {
    const elemento = document.getElementById(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log("Elemento não encontrado");
    }
}

const listaDeTeclas = document.querySelectorAll(".tecla")

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio);

    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add("ativa");
        }
    }

    tecla.onkeyup = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.remove("ativa");
        }
    }

}

// let contador = 0;

// enquanto
// while (contador < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];
//     const idAudio = `som_${instrumento}`

//     tecla.onclick = function () {
//         tocaSom(idAudio);

//     }
//     contador = contador + 1;
//     console.log(contador);
// }