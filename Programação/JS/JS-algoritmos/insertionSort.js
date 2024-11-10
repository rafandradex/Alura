const livro = require('./listaLivros');

function insertionSort(lista) {

    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            let itemAnalise = lista[analise];
            let itemAnterio = lista[analise - 1]

            lista[analise] = itemAnterio
            lista[analise - 1] = itemAnalise

            analise--
        }
    }

    console.log(lista);
}

insertionSort(livro)