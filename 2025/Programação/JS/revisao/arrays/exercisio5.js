const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];

console.log(`Lista inicial: ${tarefas}`);

tarefas.push = 'Pagar boletos'

console.log(`Lista após adicionar: ${tarefas}`);

tarefas.pop();
console.log(`Lista após remover a última tarefa: ${tarefas}`);


//Lista após adicionar: ['Estudar', 'Lavar roupa', 'Fazer compras', 'Pagar boletos']
//Lista após remover a última tarefa: ['Estudar', 'Lavar roupa', 'Fazer compras']