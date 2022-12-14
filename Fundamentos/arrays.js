const valores = [7.7, 7.9, 6.3, 9.2, true]

console.log(valores[0], valores[3])
valores[0] = 800
console.log(valores.length) // indica quantos elementos tem na sua Array

valores.push({id: 3}, false, null, 'teste') // Dá pra fz mas não é legal para a legibilidade do código.
console.log(valores)

console.log(valores.pop()) // Funcão pop retira o ultimo valor do Array e o retorna.
delete valores[0] // Deleta o valor da indice selecionado no Array
console.log(valores)

console.log(typeof valores) // Array é um objeto