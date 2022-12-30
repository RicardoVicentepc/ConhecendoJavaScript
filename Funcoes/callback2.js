const idade = [20,30,12,34,62,10]

// Sem callback

let idadeBaixas = []
for(let i in idade){
    if (idade[i] >= 20) { // idade maior de 20
        idadeBaixas.push(idade[i])
    }
}
console.log(idadeBaixas)

// Com callback

const idadeBaixas2 = idade.filter( (idade) => idade < 34)
console.log(idadeBaixas2)

