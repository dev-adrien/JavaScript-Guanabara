let num = [1, 3, 4, 5, 6, 9, 0, 3, 1]
console.log(num)
/*
for (let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
*/

for (let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}