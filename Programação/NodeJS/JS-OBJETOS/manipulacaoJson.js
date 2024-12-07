
const novoAnimal = {
    "id": 4,
    "nome": "Tigre",
    "tipo": "Sla",
    "habitat": "Floresta Tropical"
}

const animais = require('./animais.json');
animais.push(novoAnimal)

const stringAnimais = JSON.parse(JSON.stringify(animais))

console.log(stringAnimais);
