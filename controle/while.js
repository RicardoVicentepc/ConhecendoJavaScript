function getInteiroAleatorio(min, max ){
     const valor = Math.random() * (max - min) + min
     return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){
    opcao = getInteiroAleatorio(-1, 1)
    console.log(`Opcão escolhida ${opcao}`)
}
console.log("Até a proxima")