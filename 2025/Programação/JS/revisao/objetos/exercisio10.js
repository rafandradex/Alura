const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "Ana", progresso: 85 },
    { nome: "Carlos", progresso: 40 },
    { nome: "Juliana", progresso: 72 },
    { nome: "Pedro", progresso: 60 }
  ],
  gerarRelatorio: function gerarRelatorio() {
    let media = 0
    this.estudantes.forEach(estudante => {
      const status = estudante.progresso >= 70 ? 'Aprovado': 'Em andamento'
      console.log(`Estudante: ${estudante.nome} | Progresso: ${estudante.progresso}% | Situação: ${status}`);
      media += estudante.progresso
    })
    console.log(`Total de estudantes: ${this.estudantes.length}`);
    let mediaTotal = (media / this.estudantes.length).toFixed(2)
    console.log(`Média geral da turma: ${mediaTotal}%`);
    
    
    
  }
};

curso.gerarRelatorio();