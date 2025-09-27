const carrinhoVazioo = false;

const mensagem = (carrinhoVazioo) ? "Não é possível finalizar a compra: carrinho vazio." : "Compra finalizada com sucesso!";

console.log(mensagem);

// Alura 

const carrinhoVazio = false;

if (!carrinhoVazio) {
  console.log("Compra finalizada com sucesso!");
} else {
  console.log("Não é possível finalizar a compra: carrinho vazio.");
}