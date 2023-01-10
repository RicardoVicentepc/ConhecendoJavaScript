function Pessoa(nome) {
    this.nome = nome
    this.falar = () => console.log(this.nome)
}

const p1 = new Pessoa("Ricardo")
p1.falar()