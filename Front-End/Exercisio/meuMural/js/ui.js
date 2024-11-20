import api from "./api.js";

const ui = {
    async renderizarAnimais() {
        const lista = document.getElementById('nossosanimais')
        try {
            const animais = await api.buscarPets()
            animais.forEach(animal => {
                lista.innerHTML += `
                    <li>
                        <p>Especie: ${animal.especie}</p>
                        <p>Nome: ${animal.nome}</p>
                        <p>Raça: ${animal.raca}</p>
                    </li>`
            });
            
        } catch {
            alert('Erro na criação')
            
        }
    }
}

export default ui;