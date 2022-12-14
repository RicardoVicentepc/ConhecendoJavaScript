const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + "!"

const template = `\nOlá ${nome}!`

console.log(concatenacao, template)


// expressoes..
console.log(`1 + 1 = ${1 + 1}`)

//Função
const up = texto => texto.toUpperCase() // Função usada para retornar todas as letras em maiusculas
const up2 = texto => texto.toLowerCase() // Função usada para retornar todas as letras em minusculas 
console.log(`Ei... ${up('cuidado')}!`)
console.log(`Ei... ${up2('CUIDADO')}!`)
