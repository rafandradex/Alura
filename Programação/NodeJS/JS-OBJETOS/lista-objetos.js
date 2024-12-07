const estudante = {
    nome: 'Rafael Gaspar',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefone: ['963418757', '965547624'],
    edereco: [{
        rua: 'Rua do Rodrigo',
        numero: '4',
        complemento: '3DRT'
    }]
}
estudante.edereco.push({
    rua: 'Avenida Mateu Ferndander',
    numero: '1',
    complemento: ''
})

console.log(estudante.edereco)
console.log(estudante.edereco[0])
console.log(estudante.edereco[1])

const listaEndereçosComComplemento = estudante.edereco.filter((edereco) => edereco.complemento)

console.log(listaEndereçosComComplemento)