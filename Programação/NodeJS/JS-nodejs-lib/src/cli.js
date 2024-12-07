import fs from "fs";
import path from "path";
import trataErros from "./erros/funcoesErro.js";
import { contaPalavras } from "./index.js";
import { montaSaidaArquivo } from "./helpers.js";
import { Command } from "commander";
import chalk from "chalk";

const program = new Command();

program
  .version("1.0.0")
  .option("-t, --texto <string>", "Caminho do texto a ser processado")
  .option(
    "-d, --destino <string>",
    "Caminho da pasta onde salvar o arquivo de resultados"
  )
  .action((option) => {
    const { texto, destino } = option;

    if (!texto || !destino) {
      console.error(
        chalk.red("erro: favor inserir caminho de origem e destino")
      );
      program.help();
      return;
    }

    const caminhoTexto = path.resolve(texto);
    const caminhoDestino = path.resolve(destino);

    try {
      processaArquivo(caminhoTexto, caminhoDestino);
      console.log(chalk.green("Texto processado com sucesso"));
    } catch (error) {
      console.log(chalk.red("Ocorreu um erro no processamento", error));
    }
  });

program.parse();

function processaArquivo(texto, destino) {
  fs.readFile(texto, "utf-8", (erro, texto) => {
    try {
      if (erro) throw erro;
      const resultado = contaPalavras(texto);
      criaESalvaArquivo(resultado, destino);
    } catch (erro) {
      console.log(trataErros(erro));
    }
  });
}

function criaESalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado-${process.argv[3].replace(
    "arquivos/",
    ""
  )}`;
  const textoPalavras = montaSaidaArquivo(listaPalavras);

  fs.promises
    .writeFile(arquivoNovo, textoPalavras)
    .then(() => {
      console.log("Arquivo criado");
    })
    .catch((erro) => {
      throw erro;
    })
    .finally(() => console.log("Operação finalizada"));
}
