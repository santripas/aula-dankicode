function aplicarDesconto(precoProduto,desconto){
    return (precoProduto - (precoProduto * (desconto / 100)));

}

function aplicarJuros(precoProduto , juros){
    return (precoProduto + (precoProduto * (juros / 100)));
}

const precoProduto = 100;
const condPagamento = 4;



if(condPagamento === 1){
    console.log(aplicarDesconto(precoProduto ,10));

}else if(condPagamento === 2){
    console.log(aplicarDesconto(precoProduto , 15));

}else if(condPagamento === 3){
    console.log(precoProduto);

}else if(condPagamento === 4){
    console.log(aplicarJuros (precoProduto ,10));
}

console.log( 200 / 100);


