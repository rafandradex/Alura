const api = {
    async buscarPets() {
        try {
            const result = await fetch('http://localhost:3000/pets')
            return result.json()
        } catch {
            alert('Deu erro na conexão')
            throw error
        }
    },

    async salvarPets(animais) {
        try {
            const result = await fetch('http://localhost:3000/pets', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(animais)
            })
            return result.json()
        } catch {
            alert('Deu erro na conexão')
            throw error
        }
    }
}

export default api;