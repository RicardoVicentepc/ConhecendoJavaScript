let compararThis = function(param) {
    console.log(this === param)
}

compararThis(global) // tomar cuidado com escopo global ao atribuir this com function normal


const obj = {}
compararThis = compararThis.bind(obj)
compararThis(global)
compararThis(obj)

let compararThisArrow = param => console.log(this === param)

compararThisArrow(global )
compararThisArrow(module.exports) // module.exports é o this

compararThisArrow = compararThisArrow.bind(obj)
compararThisArrow(obj) 
compararThisArrow(module.exports)


//This em Arrow está relacionado há um contexto que a função foi escrita.


