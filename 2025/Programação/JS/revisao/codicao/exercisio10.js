const bateria = 81;

if (bateria > 80){
  console.log('Cheia');
} else if (bateria === 80 || bateria >= 20){
  console.log('Moderada');
} else {
  console.log('Crítica');
}