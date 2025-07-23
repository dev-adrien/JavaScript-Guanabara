var numeros = []
var slc = document.querySelector('#slc')
var res = document.querySelector('#res')
var control = false

function adicionar() {
    if (control == true) {
        slc.innerHTML = '<option value="" disabled selected> Adicione valores acima!</option>'
        numeros = []
        res.innerHTML = ('')
    }
    let num = document.getElementById('num')
    let n = Number(num.value)
    if (num.value.length == 0 || num.value > 100 || num.value < 1 || numeros.includes(n)) {
        alert("Digite um número válido!")
    } else {
        numeros.push(n)

        var opt = document.createElement('option')
        opt.text = `Valor ${n} adicionado.`
        slc.appendChild(opt)
    }
    num.value = ''
    num.focus()
    control = false
}

finalizar = () => {
    if (numeros.length == 0) {
        alert('Digite valores primeiro para analisar.')
    } else {
        control = true
        let soma = numeros.reduce((total, valor) => total + valor, 0)
        let media = soma / numeros.length
    
        res.innerHTML = `Ao todo, temos <strong>${numeros.length}</strong> números cadastrados.<br>`
        res.innerHTML += `O maior valor informado foi <strong>${Math.max(...numeros)}</strong>.<br>`
        res.innerHTML += `O menor valor informado foi <strong>${Math.min(...numeros)}</strong>.<br>`
        res.innerHTML += `Somando todos os valores, temos <strong>${soma}</strong>.<br>`
        res.innerHTML += `A média de todos os valores digitados é <strong>${media.toFixed(2)}</strong>.`
    }
}