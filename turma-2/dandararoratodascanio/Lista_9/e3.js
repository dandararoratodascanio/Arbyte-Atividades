// Faça um algoritmo que receba um número e diga se ele é par ou
// ímpar
// Utilize o pacote : https://www.npmjs.com/package/is-odd


const isOdd = require('is-odd');
const rs = require('readline-sync')

let numero = rs.questionInt("Por favor, digite um número: \n")
 
if (isOdd(numero)) {
    console.log("O número que você digitou é impar!")
} else {
    console.log("O número que você digitou é par!")
}


