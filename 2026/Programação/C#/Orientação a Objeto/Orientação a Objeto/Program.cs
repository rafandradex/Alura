Banda mdlr = new Banda("M.D.L.R");

Album albumDoMorad = new Album("Reinsertado 2.0");

Musica musica1 = new Musica(mdlr, "Perezoso")
{
    Duracao = 191,
    Disponivel = true,
};

Musica musica2 = new Musica(mdlr, "Banda")
{
    Duracao = 213,
    Disponivel = false,
};

Musica musica3 = new Musica(mdlr, "Lamine")
{
    Duracao = 209,
    Disponivel = false,
};

Musica musica4 = new Musica(mdlr, "Chula")
{
    Duracao = 192,
    Disponivel = true,
};

//albumDoMorad.AdicionarMusica(musica1);
//albumDoMorad.AdicionarMusica(musica2);
//albumDoMorad.AdicionarMusica(musica3);
//albumDoMorad.AdicionarMusica(musica4);
//musica1.ExibirFichaTecnica();
//musica2.ExibirFichaTecnica();
//musica3.ExibirFichaTecnica();
//musica4.ExibirFichaTecnica();

//albumDoMorad.ExibirMusicasDoAlbum();


//mdlr.AdicionarAlbum(albumDoMorad);
//mdlr.ExibirDiscografia();

Podcast podpah = new Podcast("Igão e Mítico", "Podpah");

Episodio episodio1 = new Episodio(1, "PODEROSÍSSIMO NINJA", 85);
episodio1.AdicionarConvidado("Douglas Viegas");
Episodio episodio2 = new Episodio(2, "IGOR 3k (FLOW PODCAST)", 101);
episodio2.AdicionarConvidado("Igor 3k");


podpah.AdicionarEpisodio(episodio1);
podpah.AdicionarEpisodio(episodio2);

podpah.ExibirDetalhes();