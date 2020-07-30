// Crie uma aplicação em JS que receba um nome e uma idade do
// usuário e crie um novo usuário com o nome e a idade fornecida e o imprima na tela(ex.:
// "{nome: 'Italo', idade: 22}"). Este objeto deve ser criado usando uma classe

let rs = require('readline-sync')


class Pessoa {
    constructor(name) {
        this.name = rs.question("Digite o seu nome: ")
        this.idade = rs.questionInt("Digite a sua idade: ")
    }
}
let pessoa = new Pessoa()
console.log(pessoa.name)
console.log(pessoa.idade)