// recurso do ES2015

const pessoa = {
    nome : 'Ricardo',
    idade : 5,
    endereco: {
        logradouro : 'Rua aklsjd',
        numero:23
    }
}

const {nome, idade} = pessoa // Tire de dentro do obj o atributo nome e idade!
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobre, bemHumor = true} = pessoa
console.log(sobre, bemHumor)

const {endereco : {logradouro, numero, cep}} = pessoa // Acessando o Objeto e verificar se está setado.
console.log(logradouro, numero, cep)

// const {dados: {numCartao, nomeCompleto} } = pessoa
// console.log(numCartao, nomeCompleto)
// Deu erro pelo seguinte fato que o parametro passado não existe,  e não está setado dentro do Objeto.