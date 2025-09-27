const carro = {
    marca: 'Nissan',
    mode: 'GT-R',
    ano: 2007,
    cor: 'black'
}
for (let chaves in carro) {
    console.log(chaves)
}

console.log('')

carro.extra = 'body kit'

for (let chaves in carro) {
    console.log(chaves)
}
