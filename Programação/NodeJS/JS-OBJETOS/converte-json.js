const estudante = require('./estudante.json')

const stringEstudante = JSON.stringify(estudante)

// console.log(estudante)
console.log(stringEstudante);

const objEstudante = JSON.parse(stringEstudante)

console.log(objEstudante);

