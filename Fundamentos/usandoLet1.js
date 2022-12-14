let numero = 1
{
    let numero = 2
    console.log("Dentro ->",numero)
}
console.log("Fora ->",numero)

//Os valores são diferentes porque estão em diferentes escopos

//As variaveis definidas com a palavra let tem escopo global, de função e o de bloco Como o exemplo acima
