function boaNoticia(nota) {
    if(nota >= 7){
        console.log("Nota boa")
    }
}

// boaNoticia(8)
// boaNoticia(6)


function seForVdd(valor){
    if(valor){
        console.log("É vdd..." + valor)
    }
}
seForVdd() //false
seForVdd(null) //false
seForVdd(undefined) //false
seForVdd(NaN) //false
seForVdd('') //false
seForVdd(0) //false
seForVdd(-1) //true
seForVdd(' ') //true
seForVdd('?') //true
seForVdd([]) //true
seForVdd([1, 2]) //true
seForVdd({}) //true







