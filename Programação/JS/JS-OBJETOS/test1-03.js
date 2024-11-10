const pessoa2 = {
    nome: 'Rafael',
    notas: [9, 10, 10, 5, 10],
    calcularMediaNotas: function (){
        let somadasnotas = 0
        for (let i = 0; i < this.notas.length; i++) {
            somadasnotas += this.notas[i]
        }
        const media = somadasnotas / this.notas.length
        return media.toFixed(2)
    },
    classificarDesempenho: function () {
        const media = this.calcularMediaNotas()
        if (media >= 9) {
            return 'Desempenho excelente'
        } else if (media >= 7.6) {
            return 'Bom desempenho'
        } else if (media >= 6) {
            return 'Desempenho regular'
        } else {
            return 'Desempenho insuficiente'
        }
    }
}

console.log(`${pessoa2.nome} sua media foi ${pessoa2.calcularMediaNotas()} e o seu desempenho foi ${pessoa2.classificarDesempenho()}`)