const maquina = {
  nome: 'Esteira Transportadora',
  funcionando: true,
  exibirStatus: function exibirStatus() {
    const status = this.funcionando ? 'está em funcionamento' : 'não está em funcionamento'

    console.log(`A máquina ${this.nome} ${status}.`);

  }
};

maquina.exibirStatus();