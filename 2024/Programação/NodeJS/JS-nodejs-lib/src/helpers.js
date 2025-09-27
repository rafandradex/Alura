function filtrarOcorrencias(paragrafos) {
  return Object.keys(paragrafos).filter((chaves) => paragrafos[chaves] > 1);
}

function montaSaidaArquivo(listaPalavras) {
  let textoFinal = "";
  listaPalavras.forEach((paragrafo, indice) => {
    const duplicadas = filtrarOcorrencias(paragrafo).join(", ");
    if (duplicadas.length > 0) {
      textoFinal += `Palavras duplicadas no paragrafo ${
        indice + 1
      }: ${duplicadas} \n`;
    }
  });

  return textoFinal;
}

export { filtrarOcorrencias, montaSaidaArquivo };
