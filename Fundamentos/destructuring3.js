function rand({min = 0, max = 1000 } = {}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {max:50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
// console.log(rand())


const array = [n1, n2, n3, n4, ...rest] = [1,2,3,4, 10, 29,12, 10, 29,12, 10, 29,12, 10, 29,12, 10, 29,12, 10, 29,12, 10, 29,12]
console.log(rest)//rest pega o resto do array caso tenha mais dados do que variaveis.