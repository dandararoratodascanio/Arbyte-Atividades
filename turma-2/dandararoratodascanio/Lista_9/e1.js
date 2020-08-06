// Faça uma programa que receba 4 notas e calcule a mediana e
// apresente ao usuário o resultado.
// Utilize o pacote : https://www.npmjs.com/package/median

let rs = require('readline-sync')
var media = require('median')

let nota1 = rs.questionInt("Digite a primeira nota: ")
let nota2 = rs.questionInt("Digite a segunda nota: ")
let nota3 = rs.questionInt("Digite a terceira nota: ")
let nota4 = rs.questionInt("Digite a quarta nota: ")

var notas = [nota1, nota2, nota3, nota4]
var valor = media(notas)

console.log(`A média do aluno é de ${valor}`)