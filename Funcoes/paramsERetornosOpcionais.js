function area(largura, altura) {
    const area = largura * altura
    if(area >= 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    }else {
        return area
    }
}

console.log(area(2,4)) // valor normal
console.log(area(2)) // NaN
console.log(area()) // NaN
console.log(area(2,3,4,5,4)) // 6 porque ele ignora o restante dos dados, pois só tem duas variaveis.
console.log(area(5,5)) // retorna o parametro e da Undefined, ele entra no if dps no else pra dar o return

