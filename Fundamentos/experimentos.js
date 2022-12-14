let a = 3 
console.log(this.a)
console.log(global.a) // Global dentro do node equivale a o objeto window


global.b = 123
this.c = "Hello" 
this.d = false 
this.e = 123 

console.log(global.b)
console.log(this.c)
console.log(module.exports.c) // Igual ao this
console.log(module.exports == this) // Igual ao this
console.log(module.exports)

// Variavel maluca, sem var e let
abc = 3 // Não fz isso pq pode dar cagada akakakak
console.log(global.abc)


//ENTENDER RUNTIME
//FUGIR  DO ESCOPO GLOBALLLLLLLLLLLLL