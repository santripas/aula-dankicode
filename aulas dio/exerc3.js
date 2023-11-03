/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

/*class Carros {
    marca;
    cor;
    gastoMedio;
    

    constructor(marca,cor,gastoMedio){
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
*/

/*
  2 - Crie uma classe para representar pessoas.
  Para cada pessoa teremos os aributos nome, peso e altura.
  As pessoas devem ter a capacidade de dizer o valor do seu IMC ( IMC = peso / (altura * altura));
  Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
*/

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
       
    }

    calcularIMC(){
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC(){
    const imc = this.calcularIMC();
        if (imc < 18.5) {
            return 'Abaixo do Peso';
        
        } else if (imc >= 18.5 && imc <= 25) {
            return 'Peso Normal';
        
        } else if (imc > 25 && imc <= 30) {
            return 'Acima do Peso';
        
        } else if (imc > 30 && imc <= 40) {
            return 'Obeso';
        
        } else if (imc > 40) {
            return 'Obesidade Grave';
        }
    }
}

const jose = new Pessoas('Jose', '70', 1.75);
console.log(jose);
console.log(jose.classificarIMC());

const sandro = new Pessoas('Sandro', '80', 1.83);
console.log(sandro);
console.log(sandro.classificarIMC());