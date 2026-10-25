class Podcast
{
    private List<Episodio> episodios = new List<Episodio>();
    public Podcast(string host, string nome)
    {
        Host = host;
        Nome = nome;
    }

    public string Host { get; }
    public string Nome { get; }
    public int TotalEpisodios 
    { 
        get
        {
            return episodios.Count;
        }
     }

    public void AdicionarEpisodio(Episodio episodio)
    {
        episodios.Add(episodio);
    }

    public void ExibirDetalhes()
    {
        Console.WriteLine($"O podcast {Nome} pertence a/ao {Host}\n");
        Console.WriteLine("Episodios disponiveis:\n");
        foreach (var episodio in episodios)
        {
            Console.WriteLine($"{episodio.Resumo}");
        }
    }
}