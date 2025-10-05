// Gerar um laço que tente "advinhar" um dado número de 1 a 50
// e conte a quantidade de tentativas até o resultado

const numeroSecreto = 8;
let numeroaleatorio = 0;
let tentativa = 0;

while (numeroSecreto !== numeroaleatorio) {
    numeroaleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1)
    tentativa++
}

console.log(`Adivinhou em ${tentativa} tentativas`);

// Gerar um laço que tente "advinhar" um dado número de 1 a 50
// executar o laço enquanto não gerar um numero par

let numeroRandom = 0;

do {
    numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1)
    console.log(numeroRandom);

} while (numeroRandom % 2 !== 0)

console.log(numeroRandom);


// criar um laço que recebe um texto e verifica se é um palíndromo
// imprimir no console o texto, informando se é ou não palíndromo

const texto = 'arara'

let textoInvertido = '';

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i]
}

let result = (texto === textoInvertido) ? `O/A ${texto} é palíndromo`:`O/A ${texto} não é palíndromo`

console.log(result);



