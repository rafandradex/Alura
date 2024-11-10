const estudante = {
    nome: 'Rafael Gaspar',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, 'nome'))

console.log(estudante['idade'])

console.log(estudante.turma)