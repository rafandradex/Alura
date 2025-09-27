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

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto);
    }
}