const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a,b, operacao = soma){
    console.log(operacao(a,b))
}
imprimirResultado(3,4)
imprimirResultado(3,5, soma) // explicitamente
imprimirResultado(3,5, function (x,y){
    return x - y
}) // função anonima dentro de outra função
imprimirResultado(3,4, (x,y) => x * y) // com arrow function

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}
pessoa.falar()