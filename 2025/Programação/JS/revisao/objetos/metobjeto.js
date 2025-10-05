// adicione ao obj um método para calcular a idade da pessoa e retornar o valor no terminal como string.

const user = {
    nome: 'Roberta R',
    nascimento: '1996-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};

user.calcularIdade = function calcularIdade () {
    const anoNascimento = parseInt(this.nascimento.slice(0, 4))
    const idade = new Date().getFullYear() - anoNascimento;
    console.log(`A idade é ${idade}`);
    
    
}

user.calcularIdade()