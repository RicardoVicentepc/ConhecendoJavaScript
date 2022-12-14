const peso1 = 1.0
const peso2 = Number('2.0')
const nome = String('Ricardo')

console.log(Number.isInteger(peso2))
console.log(typeof nome) // Tipo da Variavel

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(3))
console.log(media.toString(2)) // retorna um valor binario
//toString é usado para converter um valor númerico em String.
//toFixed é usado para reduzir o número de casas decimais depois da virgula.
