/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carros {
    marca;
    cor;
    gastoMedio;
    

    constructor(marca,cor,gastoMedio,kmRodado){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
       
    }

    calcularGastoDeViagem(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedio * precoCombustivel;
    }

}

const uno = new Carros('Fiat', 'Vermelho', 1/12);
console.log(uno.calcularGastoDeViagem(70, 5));

const palio = new Carros('Fiat', 'Prata' , 1/11);
console.log(palio.calcularGastoDeViagem(400,5));
