// acesse um array de objetos e imprima no terminal os nomes e status de ativação de cada pessoa.

const clientes = [
    {
        nome: 'Marina M',
        ativo: true,
    },
    {
        nome: 'Rafael R',
        ativo: false,
    },
    {
        nome: 'Fabio F',
        ativo: false,
    },
];

for (const cliente of clientes) {
    const status = cliente.ativo ? 'Ativo' : 'Inativo'
    console.log(`Status cliente ${cliente.nome}: ${status}`);
    
}