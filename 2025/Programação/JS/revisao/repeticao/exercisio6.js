let contador = 0;

while (contador !== 10) {
    console.log(contador);
    contador++
}

console.log('Número proibido encontrado! Encerrando...');

// ou

for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log("Número proibido encontrado! Encerrando...");
    break;
  }
  console.log(i);
}