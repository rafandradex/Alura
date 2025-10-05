function processarPedido(nome, tipo_cliente, callback) {
    console.log(`Processando pedido de ${nome}...`);
    callback(nome, tipo_cliente)
}

function mensagemPersonalizada(nome, tipo_cliente) {
    if (tipo_cliente === 'comum') {
        console.log(`Obrigado pela sua compra, ${nome}!`);
    } else if (tipo_cliente === 'novo') {
        console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
    } else if (tipo_cliente === 'vip') {
        console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`);
    } else {
        console.log(`Erro no sistema volte em alguns minutos`);
    }
}

processarPedido('Rafael', 'vip', mensagemPersonalizada)