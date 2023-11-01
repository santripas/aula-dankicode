/*2) O IMC = Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC - peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:

- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave; */

const peso = 80;
const altura = 1.65;

const imc = peso / Math.pow(altura, 2);


if (imc < 18.5) {
    console.log('Abaixo do Peso');

} else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso Normal');

} else if (imc > 25 && imc <= 30) {
    console.log('Acima do Peso');

} else if (imc > 30 && imc <= 40) {
    console.log('Obeso');

} else if (imc > 40) {
    console.log('Obesidade Grave');
}

/* ================================== DESAFIO 3 ================================
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- A vista Débito , recebe 10% de desconto;
- A vista no Dinheiro ou PIX , recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoProduto = 100;
const condPagamento = 4;

if(condPagamento === 1){
    console.log(precoProduto - (precoProduto * 0.1));

}else if(condPagamento === 2){
    console.log(precoProduto - (precoProduto * 0.15));

}else if(condPagamento === 3){
    console.log(precoProduto);

}else if(condPagamento === 4){
    console.log(precoProduto + (precoProduto * 0.1));
}


const nomeDoProfessor = 'Renan Johannsen de Paula';

nomeDoProfessor = 'Vitor Johansen Guerra';
console.log(nomeDoProfessor);
