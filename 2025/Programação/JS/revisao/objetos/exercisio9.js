const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7
};

let totaisDeDias = 0
let totaisDeMeses = 0
const manu = Object.entries(manutencao)

for(let [chaves, valor] of manu) {
    totaisDeDias += valor
    if (valor > 0){
        totaisDeMeses += 1
    }
}


console.log(`Total de dias parados: ${totaisDeDias}`);
console.log(`Meses com manutenção registrada: ${totaisDeMeses}  `);

totaisDeDias > 20 ? console.log('Status: Atenção! Acima do limite anual.'): console.log('Status: Dentro do limite anual.')

