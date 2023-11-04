/* Boolean 

const numero = 0;

const numeroDivisivelPor5 = (numero % 5) === 0;

if(numero === 0){
    console.log('O número é inválido');
}else if(numeroDivisivelPor5){
    console.log('sim');
}else {
    console.log('não')
}
*/



/*=========== DESAFIO ==========

Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo ela:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.  */

console.log('Olá');

const precoEtanol = 3.31;
const precoGasolina = 5.35;
const tipoCombustivel = 'gasolina';
const consumo = 10;
const distanciaEmKM = 1000;

const litrosConsumidos = distanciaEmKM / consumo;

if(tipoCombustivel == 'Etanol'){
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log('O valor que será gasto para realizar a viagem: R$',valorGasto.toFixed(2))
}else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log('O valor que será gasto para realizar a viagem: R$',valorGasto.toFixed(2))
}








/*==================== DESAFIO ===========================================
1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;/

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

const mediaNota = (nota1 + nota2 + nota3) / 3;

if(mediaNota < 5){
    console.log('Reprovado',mediaNota);
}else if(mediaNota >= 5 && mediaNota <= 7){
    console.log('Recuperação',mediaNota);
}else if(mediaNota > 7){
    console.log('Passou de semestre',mediaNota);
}
