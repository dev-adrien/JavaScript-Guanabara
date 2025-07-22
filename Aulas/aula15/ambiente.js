let num = [5, 8, 4]
console.log(num)
num[3] = 6
console.log(num)
num.push(7) // adiciona o valor ao final do vetor
console.log(num)
num[2] = 1 // substitui o valor da posição 2 por 1
console.log(num)
console.log(num.length) // mostra a quantidade de valores contidos em num
console.log(num.sort()) // ordena o vetor em ordem crescente
let pos = num.indexOf(8) // procura o valor 8 dentro do vetor e retorna a posição
console.log(pos)