// criar um array com uma sequência de um número entre x e y

function criaArrNum(inicio, fim) {
    const arr = [];
    let elemento = inicio

    for (let i = 0, j = 0; j < fim; i++, elemento++) {
        arr[i] = elemento;
        j = elemento
    }
    return arr
}

function criaArrNumero(inicio, fim) {
    const arr = [];

    for (let i = 0, j = inicio; j <= fim; i++, j++) {
        arr[i] = j;
    }
    return arr
}

console.log(criaArrNum(12, 30));

console.log(criaArrNumero(12, 30));
