const pontos = 60;
const vidas = 1;

const mensagem = (pontos > 50 && vidas >= 1) ? "Próximo nível liberado!" : "Não pode avançar para o próximo nível.";

console.log(mensagem);