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
    },
    {
        rua: 'Avenida Mateu Ferndander',
        numero: '1',
        complemento: null
    }]
}

function exibirTelefones(telefone1, telefone2) {
    console.log(`Ligar para ${telefone1}`)
    console.log(`Ligar para ${telefone2}`)

}

exibirTelefones(estudante.telefone[0], estudante.telefone[1])
exibirTelefones(...estudante.telefone)

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.edereco[0]
}

console.log(dadosEnvio)