// Construtora

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Olá ${this.nome}`)
    }
}
const p1 = new Pessoa("PAULO")
p1.falar()


// Factory
const criarPessoa = nome =>{
    return {
        falar: () => console.log(`Olá ${nome}`)
    }
}

const p2 = criarPessoa('PEDRO')
p2.falar()