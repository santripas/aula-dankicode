
/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

console.log('Olá');

const precoCombustivel = 5.79;
const consumoMedioDeLitro = 10;
const distanciaKm = 1000;

const litrosConsumidos = distanciaKm / consumoMedioDeLitro;

const valorViagem = litrosConsumidos * precoCombustivel;


console.log('Valor da viagem: R$',valorViagem.toFixed(2));
