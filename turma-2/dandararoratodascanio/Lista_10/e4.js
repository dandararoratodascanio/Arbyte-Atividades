// Criar um algoritmo que receba 2 carros e verifique se os carros são
// iguais
// Para isso :
// Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
// inicialize as propriedades com estes valores.
// Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
// cor.
// Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
// e cor.
// Ao final o algoritmo deve comparar se os carro são iguais.
// Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.

let rs = require('readline-sync')


class Carro {
    constructor(name) {
        this.name = rs.question("Digite o nome de um carro: ")
        this.modelo = rs.question("Digite o modelo do carro: ")
        this.cor = rs.question("Digite a cor do carro: ")
    }
}

let carroUm = new Carro()
let carroDois = new Carro()

if (carroUm.name == carroDois.name && carroUm.modelo == carroDois.modelo) {
    console.log("Os carros são iguais!")
} else {
    console.log("Os carros são diferentes")
}

