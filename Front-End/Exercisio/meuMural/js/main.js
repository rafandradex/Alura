import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarAnimais()

    const formulario = document.getElementById('pensamento-form')
    formulario.addEventListener("submit", adicionarNovoPet)
})

async function adicionarNovoPet(event) {
    event.preventDefault()
    const id = document.getElementById('pensamento-id').value
    const especie = document.getElementById('pensamento-especie').value
    const nome = document.getElementById('pensamento-nome').value
    const raca = document.getElementById('pensamento-raca').value

    try {
        await api.salvarPets({ especie, nome, raca })
        ui.renderizarAnimais()
    } catch {
        alert('Nepiaaa')
    }
}