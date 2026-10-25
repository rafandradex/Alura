class Musica
{
    public Musica(Banda artista, string nome)
    {
        Artista = artista;
        Nome = nome;
    }

    public string Nome { get; }
    public Banda Artista { get; }     
    public int Duracao { get; set; }
    public bool Disponivel { get; set; }
    public string DescricaoResumida =>
        $"A música {Nome} pertence á/ao {Artista.Nome}\n";

    public void ExibirFichaTecnica()
    {
        Console.WriteLine($"Nome da música: {Nome}");
        Console.WriteLine($"Nome do artista: {Artista.Nome}");
        Console.WriteLine($"Duração da musica: {Duracao}");
        if (Disponivel)
        {
            Console.WriteLine("Disponível no plano.\n");
        } 
        else
        {
            Console.WriteLine("Adquira o plano Plus+\n");
        }
    }
}