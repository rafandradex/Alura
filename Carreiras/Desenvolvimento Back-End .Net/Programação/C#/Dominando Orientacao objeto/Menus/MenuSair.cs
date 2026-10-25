using Dominando_Orientacao_objeto.Modelos;

namespace Dominando_Orientacao_objeto.Menus
{
    internal class MenuSair : Menu
    {
        public override void Executar(Dictionary<string, Banda> bandasRegistradas)
        {
            base.Executar(bandasRegistradas);
            Console.WriteLine("Tchau tchau :)");
        }
    }
}
