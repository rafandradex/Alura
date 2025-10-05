const caixas = [12, -1, 8, 0, -5, 3, 7, 14];
let contador = 0;
let produto = 0;

while (contador !== 5) {

  if (caixas[produto] < 0) {
    console.log('Caixa danificada, ignorada.');
    produto++
  } else {
    console.log(`Caixa processada: ${caixas[produto]}`);
    produto++
    contador++
  }
}

console.log('Limite de caixas processadas atingido!');


// Ou

let processadas = 0;
 
for (let i = 0; i < caixas.length; i++) {
  let valor = caixas[i];
 
  if (valor < 0) {
    console.log("Caixa danificada, ignorada.");
    continue;
  }
 
  console.log(`Caixa processada: ${valor}`);
  processadas++;
 
  if (processadas === 5) {
    console.log("Limite de caixas processadas atingido!");
    break;
  }
}