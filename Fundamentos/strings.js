const escola = "Cod3r"

console.log(escola.charAt(4)) // charAt é usado para pegar um certo caractere conforme a o numero passado
console.log(escola.charCodeAt(3)) // retorna o indicide selecionado em uma tabela unicode
console.log(escola.indexOf('3')) // Ele pega o parametro passado e compara se tem dentro da palavra, e retorna a posição como um Array

console.log(escola.substring(0, 3)) // Ele irá exibir os paremetros conforme os indices inseridos.

console.log('Escola '.concat(escola).concat("!")) // concat é usado para concatenar as Strings
console.log(escola.replace(3, 'e')) // Substitui o parametro conforme o indice

console.log('Ana,Maria,Pedro'.split(',')) // Gera um Array
