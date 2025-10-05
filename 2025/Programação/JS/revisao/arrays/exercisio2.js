const despesas = [120, 80, 45.5, 200, 60];
let valorFinal = 0

for(let i = 0; i < despesas.length; i++) {
    valorFinal += despesas[i]
}

console.log(`Total de despesas: R$ ${valorFinal}`);
