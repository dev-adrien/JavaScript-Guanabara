// arrow function
// sintaxe:
//   variável de chamada = (parâmetros) => {bloco}
// é bem parecido com uma variável normal rebebendo uma function
// sintaxe:
//   variável = function(parâmetros) {bloco}

/*
a = (b) => {return b ** 2}
console.log(`O quadrado de 5 é ${a(5)}`)
*/

n = (x) => {
    let fat = 1
    for (i = x; i > 1; i--) {
        fat *= i
    }
    
    return `O fatorial de ${x} é ${fat} e o quadrado é ${x ** 2}`
}

console.log(n(5))