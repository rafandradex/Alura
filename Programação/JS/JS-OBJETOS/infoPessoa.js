const pessoa = {
    nome: 'Rafael Gaspar',
    idade: 15,
    solteiro: false,
    hobbies: ['Programar', 'Jogar', 'Ver videos'],
    endereco: {
        rua: 'Rua do Rodrigo',
        cidade: 'Covihã',
        destrito: 'Castelo Branco',
    }
}

const amigos = [
    { nome: 'Dinis', idade: 15, cidade: 'Cortes'},
    { nome: 'Leo', idade: 15, cidade: 'Caria'},
    { nome: 'Gui', idade: 15, cidade: 'Teixoso'}

]

amigos.push({ nome: 'Caramelo', idade: 15, cidade: 'Torto'})

function mostrarInfoPessoa(aluno) {
    console.log(aluno.nome)
    console.log(aluno.idade)
    console.log(aluno.solteiro)
    console.log(aluno.hobbies)
    console.log(aluno.hobbies)
    console.log(`Nome: ${aluno.nome}
Idade: ${aluno.idade}
Solteiro: ${aluno.solteiro}
Hobbies: ${aluno.hobbies}
Endereço: ${aluno.endereco.rua} ${aluno.endereco.cidade} ${aluno.endereco.destrito}`)
}

function mostrarListaAmigos(lista) {
    const cidade = lista.filter((lista) => lista.cidade.length > 0)
    cidade.forEach(lista => {
        console.log(`Nome: ${lista.nome}, Idade: ${lista.idade}, Cidade: ${lista.cidade}`)
    });
}

const notas = [10, 6.5, 8, 7.5];

const calculadora = {
    soma: (a, b) => console.log(a + b),
    subtracao: (a, b) => console.log(a - b),
    multiplicacao: (a, b) => console.log(a * b),
    divisao: (a, b) => console.log(a / b),
    calcularMedia: function(lista){
        let soma = 0
        for (let i = 0; i < lista.length; i++) {
            soma += lista[i]
        }
        const media = soma / lista.length
        console.log(media)
    }
}


const contaBancaria = {
    titular: 'Rafael Gaspar',
    saldo: 1000,
    depositar: function(quantidade) {
        this.saldo + quantidade
    },
    sacar: function(quantidade) {
        this.saldo - quantidade
    },
    cliente: {
        nome: 'Rafael',
        conta: '1231234786352'
    }


}

mostrarInfoPessoa(pessoa)
mostrarListaAmigos(amigos)
console.log(calculadora.calcularMedia(notas))
