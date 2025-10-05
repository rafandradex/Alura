const tentativas = ["1234", "admin", "secreto"];
const senhaCorreta = "secreto";
const tentativaMaximas = 3;
let acessoLiberado = false;

for (i = 0; i < tentativaMaximas; i++) {
  if (tentativas[i] === senhaCorreta) {
    console.log('Acesso permitido!');
    acessoLiberado = true
    break
  } else {
    console.log(`Tentativa ${i + 1} inválida.`);
  }
}

if (!acessoLiberado) {
  console.log('Acesso bloqueado. Número máximo de tentativas atingido.');
}