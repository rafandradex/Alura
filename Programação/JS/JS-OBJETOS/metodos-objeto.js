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

const chavesoBJETO = Object.keys(estudante)

if (!chavesoBJETO.includes('edereco')) {
    console.error('É necessario ter um endereço')
} else if (!chavesoBJETO.includes('nome')) {
    console.error('É necessario ter um nome')
} else if (!chavesoBJETO.includes('idade')) {
    console.error('É necessario ter a idade')
} else if (!chavesoBJETO.includes('cpf')) {
    console.error('É necessario ter um cpf')
} else if (!chavesoBJETO.includes('turma')) {
    console.error('É necessario ter uma turma')
} else if (!chavesoBJETO.includes('bolsista')) {
    console.error('É necessario ter um bolsista')
} else if (!chavesoBJETO.includes('telefone')) {
    console.error('É necessario ter um telefone')
} else {
    console.log(estudante)
}

// if (!chavesoBJETO.includes(chavesoBJETO)) {
//     console.error(`É necessario ter um ${chavesoBJETO}`)
// } else {

// }