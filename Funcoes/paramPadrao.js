// Estrategias usadas para gerar valores padrões em function antes da versão do ECMAScript2015

// estrategia 1 para gerar valor padrão 
function teste(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c

}
console.log(teste(0,0,0)) // ao invés de retorna 0 retorna 3, podendo ocasionar um erro de lógica.

// 2 estrategia 
function teste2(a){
    a = a !== undefined ? a : 1 // se 'a' for diferente de undefined, ele pegara o valor de 'a', caso não for, o numero padrão é 1.
    return a
}
console.log(teste2(0))

function teste3(a){
    a = 0 in arguments ? a : 1 // se na posição 0 do arguments tiver algum dado, retorna a. Caso contrário, retorna 1 como padrão.
    return a 
}
console.log(teste3(0))

function teste4(a){
    a = isNaN(a) ? 1 : a //caso 'a' não for um número, retorna 1. Caso for, retorna 'a'.
}

// valor padrão do es2015

function soma(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma(0,0,0))

