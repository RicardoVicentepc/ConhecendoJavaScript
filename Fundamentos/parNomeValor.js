// par nome/valor

const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Fala Amigo' // contexto léxico 2
    return saudacao
}

//Objeto são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32, 
    peso: 90,
    endereco: {
        logradouto: 'Rua Muito Boa',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
