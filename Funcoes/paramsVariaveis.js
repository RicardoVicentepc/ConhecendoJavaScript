// recuperando parametros em functions antes da versão ECMAScript2015


function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma(2,2,8))
