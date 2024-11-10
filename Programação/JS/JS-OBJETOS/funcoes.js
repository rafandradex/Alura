const estudante = {
    nome: 'Rafael Gaspar',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefone: ['963418757', '965547624'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false
    }
}

console.log(estudante.estaAprovado(7))