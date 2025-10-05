function montarObjeto(arrPares) {
    const resultado = {};
 
    for (const [chave, valor] of arrPares) {
        resultado[chave] = valor;
    }
 
    return resultado;
}
 
const dados = [
    ['nome', 'João'],
    ['idade', 30],
    ['cidade', 'Curitiba']
];
 
console.log(montarObjeto(dados));