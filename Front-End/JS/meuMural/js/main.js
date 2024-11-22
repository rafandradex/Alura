import ui from "./ui.js"
import api from "./api.js"

const pensamentosSet = new Set()

async function adicionarChaveAoPensamento() {
  try {
    const pensamentos = await api.buscarPensamentos()
    pensamentos.forEach(pensamento => {
      const chaveNovoPensamento = `${pensamento.conteudo.trim().toLowerCase()}`
      pensamentosSet.add(chaveNovoPensamento)
    })
  } catch {
    alert('Erro ao adicionar chave ao pensamento')
  }
}

function removerEspacos(string) {
  return string.replaceAll(/\s+/g, '')
}

const regexConteudo = /^[A-Za-z\s]{10,}$/
const regexAutoria = /^[A-Za-z\s]{3,15}$/


function validarconteudo(conteudo) {
  return regexConteudo.test(conteudo)
}

function validarAutoria(autoria) {
  return regexAutoria.test(autoria)
}

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos()
  adicionarChaveAoPensamento()

  const formularioPensamento = document.getElementById("pensamento-form")
  const botaoCancelar = document.getElementById("botao-cancelar")
  const inputBusca = document.getElementById('campo-busca')

  formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario)
  botaoCancelar.addEventListener("click", manipularCancelamento)
  inputBusca.addEventListener('input', manipularBusca)
})

async function manipularSubmissaoFormulario(event) {
  event.preventDefault()
  const id = document.getElementById("pensamento-id").value
  const conteudo = document.getElementById("pensamento-conteudo").value
  const autoria = document.getElementById("pensamento-autoria").value
  const data = document.getElementById("pensamento-data").value

  const conteudoSemEspacos = removerEspacos(conteudo)
  const AutoriaSemEspacos = removerEspacos(autoria)

  if (!validarconteudo(conteudoSemEspacos)) {
    alert("É permitida a inclusão apenas de letra e espaços com um minimo 10 caracteres")
    return
  }

  if (!validarAutoria(AutoriaSemEspacos)) {
    alert("É permitida a inclusão apenas de letras com o minimo de 3 caracteres e maximo de 15")
    return
  }

  if (!validarData(data)) {
    alert("Não é permitido o cadastro de datas futuras")
    return
  }

  const chaveNovoPensamento = `${conteudo.trim().toLowerCase()}`

  if (pensamentosSet.has(chaveNovoPensamento)) {
    alert('Não poder repetir esse pensamento')
    return
  }

  try {
    if (id) {
      await api.editarPensamento({ id, conteudo, autoria, data })
    } else {
      await api.salvarPensamento({ conteudo, autoria, data })
    }
    ui.renderizarPensamentos()
  } catch {
    alert("Erro ao salvar pensamento")
  }
}

function manipularCancelamento() {
  ui.limparFormulario()
}

async function manipularBusca() {
  const termoBusca = document.getElementById('campo-busca').value
  try {
    const pensamentoFiltrados = await api.buscarPensamentoPortermo(termoBusca)
    ui.renderizarPensamentos(pensamentoFiltrados)
  } catch (error) {
    alert('Erro ao realizar busca');

  }
}
function validarData(data) {
  const dataAtual = new Date()
  const dataInserida = new Date(data)
  return dataInserida <= dataAtual
}