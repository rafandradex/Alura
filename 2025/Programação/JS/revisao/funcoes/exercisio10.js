function calcularConsumo(potencia, horasPorDia) {
    return (potencia * horasPorDia * 30) / 1000
}

function classificarConsumo(consumo) {
    if (consumo >= 200) {
        console.log("Alto consumo");
    } else if (consumo < 199) {
        console.log("Consumo moderado");
    } else {
        console.log("Baixo consumo");
    }
}

const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);

function exibirResumo(nomeAparelho, consumo, classificacao) {
    console.log(`${nomeAparelho} tem consumo de ${consumo} kWh/mês e é classificada como ${classificacao}.`);
    
}

exibirResumo(nomeAparelho, consumo, classificacao);