function calcularFrete(dista) {
    if(dista <= 5){
        console.log('5');
    } else if(dista <= 20) {
        const novopreco = 0.5 * dista 
        console.log(novopreco);
    } else {
        console.log('20');
    }
}

calcularFrete(22)