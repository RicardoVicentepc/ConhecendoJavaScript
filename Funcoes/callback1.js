let nomes = ["João", "Maria", "Pedro"]

function imprimir(nome,indice) {
    console.log(`${indice + 1}. ${nome}`)
}
nomes.forEach(imprimir) // callBack

nomes.forEach( nomes => console.log(nomes))


