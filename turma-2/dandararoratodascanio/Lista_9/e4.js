// Faça um algoritmo que receba um número e diga se ele é primo ou
// não
// Utilize o pacote : https://www.npmjs.com/package/prime-number

let rs = require("readline-sync")
const ehPrimo = require('prime-number')

let numero = rs.questionInt("Por favor, informe um número:\n")

if (ehPrimo(numero)) {
    console.log('O número inofrmado é primo')
} else {
    console.log('O número informado não é primo')
}