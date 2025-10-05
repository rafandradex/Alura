const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const livroProcurado = 'O Cortiço';

if (livros.indexOf(livroProcurado) !== -1) {
    console.log(`O livro "${livroProcurado}" está disponível.`);
} else {
    console.log(`O livro "${livroProcurado}" não foi encontrado.`);

}

console.log(livros.indexOf(livroProcurado));
