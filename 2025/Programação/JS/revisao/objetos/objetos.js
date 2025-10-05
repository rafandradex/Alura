const pessoa = {
    nome: 'Roberta R',
    nascimento: '2020-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};

console.log(pessoa.nome);
console.log(pessoa.trofeus[0]);

delete pessoa.cpf

console.log(pessoa);

function exibeTrofeus(listaDeTrofeus) {
    for(const trofeu of listaDeTrofeus) {
        console.log(`Tem os trofeu ${trofeu}`);
        
    }
}

exibeTrofeus(pessoa.trofeus)