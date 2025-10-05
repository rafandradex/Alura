const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
];

const autorizados = participantes.filter(p => {
  p.idade >= 18 ? console.log(`Acesso liberado para: ${p.nome}`) : false;
  return p.idade >= 18;
});

const aprovados = autorizados.map(p => p.nome);

console.log("Lista de aprovados:", aprovados);