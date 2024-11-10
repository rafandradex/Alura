const livro = {
    nome: 'Robinson Crusoé',
    autor: 'Daniel Defoe',
    anoPublicacao: '2015',
    genero: 'Fantasia',
    avaliacao: null
}

console.log(livro)

const anoAtual = new Date().getFullYear();
const idade = anoAtual - livro.anoPublicacao

livro.idade = idade

livro.avaliacao = `8.5/10 Estrelas`
livro.genero = 'Aventura'

console.log(livro.avaliacao)


delete livro.avaliacao

console.log(livro)
console.log(livro.nome)
console.log(livro.autor)
console.log(livro.anoPublicacao)
console.log(livro.genero)
console.log(livro.idade)
console.log(livro.avaliacao)