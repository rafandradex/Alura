// Funções
function formatarMoeda(valor) {
    return valor.toLocaleString("pt", { currency: "EUR", style: "currency" });
}
var FormatoData;
(function (FormatoData) {
    FormatoData["PADRAO"] = "DD/MM/YYYY";
    FormatoData["DIA_SEMANA_DIA_MES_ANO"] = "DIA_SEMANA, DD/MM/AAAA";
    FormatoData["DIA_MES"] = "DD/MM";
})(FormatoData || (FormatoData = {}));
function formatarData(data, formato = FormatoData.PADRAO) {
    if (formato === FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    }
    else if (formato === FormatoData.DIA_MES) {
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
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = formatarMoeda(saldo);
const elementoDataAcesso = document.querySelector(".block-saldo time");
const dataAcesso = new Date();
elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preeencha todos os campos da transação!");
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    let TipoTransacao;
    (function (TipoTransacao) {
        TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
        TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
        TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
    })(TipoTransacao || (TipoTransacao = {}));
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipoTransacao == TipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipoTransacao == TipoTransacao.TRANSFERENCIA ||
        tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação é invalida");
        return;
    }
    elementoSaldo.textContent = formatarMoeda(saldo);
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
