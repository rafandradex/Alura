const relatorio = {
    temperatura: 75,
    vibracao: 40,
    pressao: 55,
    nivelRuido: 30
};

const categorias = Object.keys(relatorio);
const valores = Object.values(relatorio);
const entradas = Object.entries(relatorio);

console.log("Categorias avaliadas:", categorias);
console.log("Valores registrados:", valores);

console.log("\nDetalhamento:");
for (let [chave, valor] of entradas) {
    const status = valor > 50 ? "alerta" : "ok";
    console.log(`${chave}: ${valor} (${status})`);
}