// Faça um algoritmo que receba a data nascimento de uma pessoa e
// calcule sua idade.
// Utilize o pacote : https://www.npmjs.com/package/age-calculator

let rs = require('readline-sync')
var ageCalculator = require('age-calculator');
function dataNasc() {
    let usuario = {
        dia: rs.questionInt('Digite o dia que voce nasceu: '),
        mes: rs.questionInt('Digite o mês que voce nasceu: '),
        ano: rs.questionInt('Digite o ano que voce nasceu: ')
    }
    let idade = new ageCalculator.AgeFromDate(new Date(usuario.ano, usuario.mes, usuario.dia)).age
    return idade
}
console.log("Você tem " + dataNasc() + " anos de idade")