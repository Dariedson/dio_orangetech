/*
Faça um programa para calcular o valor gasto de uma viagem

Você terá 3 variaveis. Sendo elas:
1- preço do combustivel
2- Gasto médio de combustivel do carro por KM;
3- Distância em KM da viagem;
*/

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const resultado = (distanciaEmKm / kmPorLitros ) * precoCombustivel;

console.log("o gasto em reais é de R$" , resultado.toFixed(2));