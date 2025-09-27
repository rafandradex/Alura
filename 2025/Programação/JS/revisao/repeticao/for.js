// FOR

// Gerar números aleatórios de 1 a 50 e
// interromper o laço caso o número gerado seja 15.
// Interromper depois de 30 tentativas e contar a quantidade de tentativas


for (let i = 1; i <= 50; i++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1)
    if (numero === 15) {
        console.log(`Foram precisos ${i}`);
        break
    }
}

// Gerar números aleatórios de 1 a 50 e
// Criar um contador que só é incrementado caso os números sejam divisíveis por 5
// No final, exibir o valor do contador

contador = 0;

for (let i = 1; i <= 50; i++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1)
    if (numero % 4 === 0) {
        continue
    }
    contador++
}

console.log(contador);
