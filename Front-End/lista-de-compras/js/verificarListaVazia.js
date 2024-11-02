const mesagemListaVazia = document.getElementById('mensagem-lista-vazia')

export function verificarListaVazia(lista) {
    if (lista.ChildElementCount === 0) {
        mesagemListaVazia.style.display = "block";
    } else {
        mesagemListaVazia.style.display = "none";
        
    }
}