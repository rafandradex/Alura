let economiaa = 0;
const totalDiass = 10;
let contador = 0;

for (let i = 1; i <= totalDiass; i++) {
  contador++
  economiaa += contador
  console.log(`Dia ${i}: R$${economiaa}`);
}

console.log(`Total economizado: R$${economiaa}`);

// Ou

const totalDias = 10;
let dia = 1;
let economia = 0;
 
do {
  economia += dia;
  dia++;
} while (dia <= totalDias);
 
console.log(`Total economizado: R$ ${economia}`);