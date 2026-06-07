class Episodio
{
    private List<string> convidados = new();
    public Episodio(int ordem, string titulo, int duracao)
    {
        Titulo = titulo;
        Ordem = ordem;
        Duracao = duracao;
    }

    public string Titulo { get; }
    public int Ordem { get; }
    public int Duracao { get; }
    public string Resumo => $"Episodio {Ordem}: {Titulo} ({Duracao} min) - {string.Join(", ", convidados)}";

    public void AdicionarConvidado(string convidado)
    {
        convidados.Add(convidado);
    }
}