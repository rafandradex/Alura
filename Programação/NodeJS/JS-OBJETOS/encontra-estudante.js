const estudantes = require('./estudantes.json')

function buscarInformacao(lista, chave, valor) {
    console.log(lista.find((estudante) => estudante[chave].includes(valor)));
}

buscarInformacao(estudantes, 'nome', 'Juliet')
buscarInformacao(estudantes, 'email', 'eempsonc@bloomberg.com')