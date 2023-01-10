function criarProduto(nomeProd, precoProd) {
    let precoComDesconto = (precoProd * 50) / 100 
    return {
        nomeProduto: nomeProd,
        precoProd: precoProd,
        desconto: '50%',
        precoComDesconto : precoComDesconto
    }
}
const Roupa = new criarProduto("Camisa Preta GG", 2000 )
console.log(Roupa)