const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 2000
prod1['DescontoBaum'] = 0.40 // Chave = Valor //Evitar atributos com espaço.

console.log(prod1)


const prod2 =
{

    nome: 'Moletom',
    preco: 59.29,

    tamanhos: 
    {
        GG: 90,
        G: 35,
        M: 24,
        P: 21, 
        PP: 25
    },

    cores: 
    {
        Azul : 20,
        Verde : 100,
        Preto : 10,
        Branco : 12,
        Beggie : 9
    }

}
'{"nome": "Moletom", "preco"=58.12}' // JSON isso é um formato textual e nao um objeto
//Objeto é um conjunto de Chave e Valor.
console.log(prod2)