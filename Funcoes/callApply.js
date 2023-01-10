function getPreco(imposto = 0, moeda = 'R$' ) { 
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Not',
    preco: 4550,
    desc:0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = { nome: 'civic', preco: 2000, desc: .20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, .20, 'eua'))
console.log(getPreco.apply(carro,[0.50, '$']))