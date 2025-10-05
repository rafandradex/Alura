const dispositivos = [
  {
    nome: 'Impressora',
    status: true
  },
  {
    nome: 'Scanner',
    status: false
  },
  {
    nome: 'Projetor',
    status: true
  }
];



for (const dispositivo of dispositivos) {
  const status = dispositivo.status ? "ativo" : 'inativo'
  console.log(`Dispositivo: ${dispositivo.nome} | Status: ${status} `);

}