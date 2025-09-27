import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

// Magos
const magoAntonio = new Mago("Antonio", 4, "fogo", 4, 3);
const magaJulia = new Mago("Julia", 8, "gelo", 7, 10);

// Arqueiro
const arqueiroBruno = new Arqueiro("Bruno", 7, 8);

// ArqueiroMago
const arqueiroMagoChico = new ArqueiroMago("Chico", 7, 10, "ar", 4, 8);
const arqueiroMagoAna = new ArqueiroMago("Ana", 3, 6, "ar", 4, 7);

//Guerreiro

const guerreiroCosta = new Guerreiro('Costa', 9)

const personagem = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoChico, guerreiroCosta];

new PersonagemView(personagem).render();
console.log(Personagem.verificarVencedor(arqueiroBruno, magaJulia));
