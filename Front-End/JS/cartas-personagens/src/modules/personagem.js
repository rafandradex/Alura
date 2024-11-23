export class Personagem {
  nome;
  vida = 100;
  mana = 100;
  #level;
  tipo;

  constructor(nome, level) {
    this.nome = nome;
    this.#level = 1;
  }

  get level() {
    return this.#level
  }

  aumentarLevel() {
    this.level += 1
  }

  diminuirLevel() {
    this.level -= 1
  }

  set level(novoLevel) {
    if(novoLevel >= 1 && novoLevel <= 10) {
        this.#level = novoLevel
    }
  }

  obterInsignia() {
    if (this.#level >= 5) {
      return `Implacavel ${this.constructor.tipo}`;
    } else {
      return `${this.constructor.tipo} iniciante`;
    }
  }

  static verificarVencedor(personagem1, personagem2) {
    if (personagem1.level == personagem2.level) {
      return "Empate!!!";
    } else if (personagem1.level > personagem2.level) {
      return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!`;
    } else {
      return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor!`;
    }
  }
}
