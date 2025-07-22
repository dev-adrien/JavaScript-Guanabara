function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.querySelector('#fim')
    let passo = document.getElementById('passo')
    let res = document.querySelector('#res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Impossível contar! Verifique os valores e tente novamente!')
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando passo 1.')
            p = 1
        }
        if (i > f) {
            for (i; i >= f; i -= p) {
                res.innerHTML += `${i} \u{1F449} ` // Emoji de seta
            }
            res.innerHTML += `\u{1F3C1} <br>` // Emoji de bandeira de chegada
        } else {
            res.innerHTML = `Contando: <br>`
            for (i; i <= f; i += p) {
                res.innerHTML += `${i} \u{1F449} ` // Emoji de seta
            }
            res.innerHTML += `\u{1F3C1} <br>` // Emoji de bandeira de chegada
        }
    }
}