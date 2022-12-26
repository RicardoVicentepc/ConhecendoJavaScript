const pessoa = {
    saudacao: 'Boa Tarde!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO


const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // Amarração com o objeto pessoa.