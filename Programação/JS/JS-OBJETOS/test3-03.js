const carro = {
    marca: 'Nissan',
    mode: 'GT-R',
    ano: 2007,
    cor: 'black',
    placa: 'ABC1234',
    ligado: true,
    ligar: function() {
        return this.ligado === true ? 'Carro esta Ligado' : 'O carro esta Desligado'
    },
    obterDetalhes: function () {
        return `Carro ${this.marca} ${this.mode} do ano ${this.ano} da cor ${this.cor}
${this.ligar()}`
    }
}

console.log(carro.obterDetalhes())


// Defina a propriedade placa como não enumerável
Object.defineProperty(carro, "placa", { enumerable: false });

// Utilize um loop for...in para percorrer as propriedades enumeráveis do objeto carro
console.log("Propriedades Enumeráveis do Carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

// Utilize Object.keys() para obter um array com as chaves enumeráveis do objeto carro
const chavesEnumeraveis = Object.keys(carro);
console.log("\nChaves Enumeráveis do Carro:");
console.log(chavesEnumeraveis);

// Tente acessar a propriedade placa diretamente e imprima o resultado obtido
console.log("\nAcesso direto à propriedade placa:");
console.log(carro.placa);