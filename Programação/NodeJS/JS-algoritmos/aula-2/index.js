const listaLivros = require('./array')

function mergeSort(array) {
    if(array.length > 1) {
        const meio = Math.floor(array.length / 2)
        const parte1 = mergeSort(array.slice(0, meio))
        const parte2 = mergeSort(array.slice(meio, array.length))
        array = ordena(parte1, parte2)
    }

    return array
}

function ordena(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    // while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
    //     let produtoAtualParte1 = 
    //     let produtoAtualParte2 = 
    // }
}

console.log(mergeSort(listaLivros));

