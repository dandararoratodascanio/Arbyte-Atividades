// Faça um algoritmo que receba peso e altura do usuário e calcule o
// IMC.
// Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc


let rs = require('readline-sync')

let FasamImc = require('fasam-imc-calc');
let peso = rs.questionFloat('Peso: ')
let altura = rs.questionFloat('Altura: ')
 
let imc = new FasamImc(peso, altura); // peso, altura
 
imc.calc();
console.log(imc.calc())