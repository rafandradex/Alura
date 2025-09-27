const estudantes = require('./estudantes.json')

function filtrarPropriendade(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

const listaEnderecosImcompletos = filtrarPropriendade(estudantes, 'cep')

console.log(listaEnderecosImcompletos);
