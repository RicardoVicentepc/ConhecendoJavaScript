const notas = [5.2, 3.1, 1.2, 5.6, 7.8]

for( i in notas){
    console.log(notas[i])
}

const pessoa = {
    nome: 'Joao',
    idade: 18,
    documentos : {
        rg: "12345679-1",
        cpf: "123456789-11",
        dataNascimento: "20/01/2004" 
    }
}

for(atributos in pessoa) {
    console.log(`${atributos} = ${pessoa[atributos]}`)
}