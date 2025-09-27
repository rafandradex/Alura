const livro = require('./listaLivros');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livro.length - 1; atual++) {
    let menor = menorValor(livro, atual)

    let livrosAtual = livro[atual];
    console.log('possicao atual', atual)
    console.log(`Livro atual`, livro[atual]);
    let livroMenorPreco = livro[menor]
    console.log(`Livro menor preço`, livro[menor]);
    console.log(``);
    

   livro[atual] = livroMenorPreco
   livro[menor] = livrosAtual
    
}

console.log(livro);
