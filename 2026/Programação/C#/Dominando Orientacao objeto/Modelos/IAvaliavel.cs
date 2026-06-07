namespace Dominando_Orientacao_objeto.Modelos;

internal interface IAvaliavel 
{
    void AdicionarNota(Avaliacao nota);
    double Media { get; }
}
