// Função em JS é First-Class Object (Citizens).
// Higher-order function = Função de alta ordem.

//Criar de forma literal
function fun1() { }
console.log(fun1())

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um array
const array = [function (a,b) { return a + b}, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.mediaDoisNumeros = function (valor1, valor2 ) { return "Media : " +  (valor1 + valor2) / 2 }
console.log(obj.mediaDoisNumeros(10, 15))

// Passar função como parametro
function run(fun) {
    fun() //function
}

run(function () { console.log('Executando ...')})

//Uma função pode retornar/conter uma função

const media = function (valor1, valor2) {
    return function(media){
        console.log("Media do valor: "+(valor1 + valor2) / media)
    }
}
media(2,4)(2)

