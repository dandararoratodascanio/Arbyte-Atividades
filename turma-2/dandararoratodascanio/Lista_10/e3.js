// Crie uma aplicação em JS que receba um nome e uma idade do
// usuário e crie um novo usuário com o nome e a idade fornecida e o imprima na tela
// neste formato -> "Olá <nome do usuário>, você tem <idade do usuário> anos!". Este
// objeto deve ser criado usando uma classe.

let rs = require('readline-sync')


class Pessoa {
    constructor(name) {
        this.name = rs.question("Digite o seu nome: ")
        this.idade = rs.questionInt("Digite a sua idade: ")
    }
}
let pessoa = new Pessoa()
console.log(`Olá, ${pessoa.name}, você tem ${pessoa.idade} anos.`)

