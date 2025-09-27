// Screen Sound 
string mensagemDeBoasVindas = "Bem Vindo ao Screen Sound";
void ExibirMensagemDeBoasVindas()
{
    Console.WriteLine(@"
░██████╗░█████╗░██████╗░███████╗███████╗███╗░░██╗  ░██████╗░█████╗░██╗░░░██╗███╗░░██╗██████╗░
██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝████╗░██║  ██╔════╝██╔══██╗██║░░░██║████╗░██║██╔══██╗
╚█████╗░██║░░╚═╝██████╔╝█████╗░░█████╗░░██╔██╗██║  ╚█████╗░██║░░██║██║░░░██║██╔██╗██║██║░░██║
░╚═══██╗██║░░██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║  ░╚═══██╗██║░░██║██║░░░██║██║╚████║██║░░██║
██████╔╝╚█████╔╝██║░░██║███████╗███████╗██║░╚███║  ██████╔╝╚█████╔╝╚██████╔╝██║░╚███║██████╔╝
╚═════╝░░╚════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝  ╚═════╝░░╚════╝░░╚═════╝░╚═╝░░╚══╝╚═════╝░");
    Console.WriteLine("\n" + mensagemDeBoasVindas);
}

void ExibirOpcoesDoMenu()
{
    Console.WriteLine("\nDigite 1 para salvar uma banda");
    Console.WriteLine("Digite 2 para mostrar todas as bandas");
    Console.WriteLine("Digite 3 para avaliar uma banda");
    Console.WriteLine("Digite 4 para exibir uma média de uma banda");
    Console.WriteLine("Digite -1 para sair");

    Console.Write("\nDigite a sua opção: ");
    string opcaoEscolhida = Console.ReadLine()!;
    int opcaoEscolhidaNumerica = int.Parse(opcaoEscolhida);
    switch (opcaoEscolhidaNumerica)
    {
        case 1: Console.WriteLine($"\nVocê escolheu a opção {opcaoEscolhidaNumerica}");
            break;
        case 2:
            Console.WriteLine($"\nVocê escolheu a opção {opcaoEscolhidaNumerica}");
            break;
        case 3:
            Console.WriteLine($"\nVocê escolheu a opção {opcaoEscolhidaNumerica}");
            break;
        case 4:
            Console.WriteLine($"\nVocê escolheu a opção {opcaoEscolhidaNumerica}");
            break;
        case -1:
            Console.WriteLine("\nTcahuuuuu ate nunca :)");
            break;
        default: 
            Console.WriteLine("\nDeves achar que és a ultima bolacha do pacote");
            break;

    }
}


ExibirMensagemDeBoasVindas();

ExibirOpcoesDoMenu();