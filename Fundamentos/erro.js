function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')

    }catch(e){
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {name: 'Ricardo'}
imprimirNome(obj)