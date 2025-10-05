const tempoMinimoo = 5;
const temperaturaIdealAlcancadaEmm = 3;

for (i = 1; i <= tempoMinimoo; i++) {
  console.log(`Aquecendo... segundo ${i}`);
  if (i === temperaturaIdealAlcancadaEmm) {
    console.log('Temperatura ideal atingida.');

  }
}

console.log(`Tempo total de aquecimento: ${tempoMinimoo} segundos`);


// Ou 

const tempoMinimo = 5;
const temperaturaIdealAlcancadaEm = 3;
 
let segundos = 0;
 
do {
    segundos++;
    console.log(`Aquecendo... segundo ${segundos}`);
 
    if (segundos === temperaturaIdealAlcancadaEm) {
        console.log("Temperatura ideal atingida.");
    }
 
} while (segundos < tempoMinimo);
 
console.log(`Tempo total de aquecimento: ${segundos} segundos`);