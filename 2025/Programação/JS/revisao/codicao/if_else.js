// IF/ELSE

// defenir um fluxo para somar ou multiplicar dois números usando if/else

const num1 = 4;
const num2 = 2;
const operacao = 'dividir'

if (operacao === 'somar') {
    console.log(num1 + num2);
} else if (operacao === 'multiplicar') {
    console.log(num1 * num2);
} else if (operacao === 'dividir') {
    console.log(num1 / num2);
} else {
    console.log('Operação não indentificada');
}

// localizar o nível do bônus de acordo com a faixa salarial
// ex $11000 e acima: 3% de bônus
//    $10999 a $7000: 5% de bônus
//    $ 6999 a $4000: 7% de bônus
//    $ 3999 p baixo: 9% de bônus

const salario = 12000;

if (salario >= 11000) {
    console.log('3% de bônus');
} else if(salario < 11000  && salario >= 7000) {
    console.log('5% de bônus');
} else if (salario < 7000  && salario >= 4000) {
    console.log('7% de bônus');
} else {
    console.log('9% de bônus');
}