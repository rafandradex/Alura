import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {
  static tipo = "Guerreiro";
  forca;
  static descricao = "Você será esmagado pela fúria do Guerreiro!";

  constructor(nome, forca) {
    super(nome);
    this.forca = forca;
  }

  obterInsignia() {
    if (this.forca >= 5) {
      return `Guerreiro furioso`;
    } else {
      return super.obterInsignia();
    }
  }
}
