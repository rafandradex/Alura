const status = "recusado"

switch (status) {
  case 'aprovado':
    console.log('Pagamento aprovado.');
    break;
  case 'pendente':
    console.log('Pagamento pendente.');
    break;
  case 'recusado':
    console.log('Pagamento recusado.');
    break;
  default:
    console.log('Status inválido.');
    break;
}