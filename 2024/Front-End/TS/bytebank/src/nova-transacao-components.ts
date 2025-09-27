// Funções

function formatarMoeda(valor: number): string {
  return valor.toLocaleString("pt", { currency: "EUR", style: "currency" });
}

enum FormatoData {
  PADRAO = "DD/MM/YYYY",
  DIA_SEMANA_DIA_MES_ANO = "DIA_SEMANA, DD/MM/AAAA",
  DIA_MES = "DD/MM",
}

function formatarData(
  data: Date,
  formato: FormatoData = FormatoData.PADRAO
): string {
  if (formato === FormatoData.DIA_SEMANA_DIA_MES_ANO) {
    return data.toLocaleDateString("pt", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } else if (formato === FormatoData.DIA_MES) {
    return data.toLocaleDateString("pt", {
      day: "2-digit",
      month: "2-digit",
    });
  }
  return data.toLocaleDateString("pt", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

// Codigo

let saldo: number = 3000;

const elementoSaldo = document.querySelector(
  ".saldo-valor .valor"
) as HTMLElement;

elementoSaldo.textContent = formatarMoeda(saldo);

const elementoDataAcesso = document.querySelector(
  ".block-saldo time"
) as HTMLElement;

const dataAcesso: Date = new Date();

elementoDataAcesso.textContent = formatarData(
  dataAcesso,
  FormatoData.DIA_SEMANA_DIA_MES_ANO
);

const elementoFormulario = document.querySelector(
  ".block-nova-transacao form"
) as HTMLFormElement;

elementoFormulario.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!elementoFormulario.checkValidity()) {
    alert("Por favor, preeencha todos os campos da transação!");
    return;
  }

  const inputTipoTransacao = elementoFormulario.querySelector(
    "#tipoTransacao"
  ) as HTMLSelectElement;

  const inputValor = elementoFormulario.querySelector(
    "#valor"
  ) as HTMLInputElement;

  const inputData = elementoFormulario.querySelector(
    "#data"
  ) as HTMLInputElement;

  enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto",
  }

  let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
  let valor: number = inputValor.valueAsNumber;
  let data: Date = new Date(inputData.value);

  if (tipoTransacao == TipoTransacao.DEPOSITO) {
    saldo += valor;
  } else if (
    tipoTransacao == TipoTransacao.TRANSFERENCIA ||
    tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO
  ) {
    saldo -= valor;
  } else {
    alert("Tipo de transação é invalida");
    return;
  }

  elementoSaldo.textContent = formatarMoeda(saldo);

  type Transacao = {
    tipoTransacao: TipoTransacao;
    valor: number;
    data: Date;
  };

  const novaTransacao: Transacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
  };

  console.log(novaTransacao);
  elementoFormulario.reset();
});
