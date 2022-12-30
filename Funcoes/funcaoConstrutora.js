function Carro(velocidadeMax = 200, delta = 5) { // Parametro Padrão
    // Atributo Privado.
    let velocidadeAtual = 0

    // Metodo Publico
    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMax
        }
    }

    // Metodo Publico
    this.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()  
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
