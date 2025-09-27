import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

async function listaVideos() {
    const listaApi = await conectaApi.listaVideos();
    // listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    listaApi.forEach(videos => {
        lista.innerHTML += `<li class="videos__item">
            <iframe width="100%" height="72%" src="${videos.url}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${videos.imagem}" alt="logo canal alura">
                <h3>${videos.titulo}</h3>
                <p>${videos.descricao}</p>
            </div>
        </li>`;
    })
}

listaVideos()