
function gerarTabuada() {
    let num = document.querySelector('#num')
    
    if(num.value.length == 0) {
        alert('Não foi possível gerar a tabuada. Digite um número!')
    } else {
        let n = Number(num.value)
        let tab = document.querySelector('#tab')
        tab.innerText = '' // Limpa o conteúdo do select
        
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
}
