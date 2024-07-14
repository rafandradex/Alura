alert('Boas vindas ao jogo do numero secreto');
let numeromaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeromaximo + 1);
// console.log(numeroSecreto);
let pergunta;
let tentativas = 1;

// Enquanto chute não for igual ao numero secreto
while (pergunta != numeroSecreto) {
    pergunta = prompt(`Escolha um número entre 1 e ${numeromaximo}`);

    // Se o chute for igual ao numero secreto
    if (numeroSecreto == pergunta) {
        break;
    } else {
        if (pergunta > numeroSecreto) {
            alert(`O número secreto é menor que ${pergunta}`);
        } else {
            alert(`O número secreto é maior que ${pergunta}`);
        }
        // tentativas = tentativas + 1
        tentativas++;
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o numero secreto o número ${numeroSecreto} com ${tentativas} ${palavraTentativas} `);

// if (tentativas > 1){
//     alert(`Isso ai! Você descobriu o numero secreto o número ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Isso ai! Você descobriu o numero secreto o número ${numeroSecreto} com ${tentativas} tentativa`);
// }