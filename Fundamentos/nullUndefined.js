let valor // nao inicializada
console.log(valor)

valor = null // Ausência de valor
console.log(valor)
// console.log(valor.toString()) //Erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = null // Evitar atribuir o undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
