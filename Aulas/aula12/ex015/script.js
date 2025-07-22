function verificar() {
    var date = new Date().getFullYear()
    var txtano = document.querySelector('#ano')
    var idade = date - Number(txtano.value)
    
    if (txtano.value.length == 0 || Number(txtano.value) > date || Number(txtano.value) < date - 120) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var msg2 = ''
        var foto = document.createElement('img')
        foto.setAttribute('id', 'foto')
        var sex = document.getElementsByName('sexo')
        var sexo = ''
        if (sex[0].checked) {
            sexo = 'Homem'
            if (idade < 10 && idade >= 0) {
                msg2 = 'uma criança'
                foto.setAttribute('src', 'img/menino.png')
            } else if (idade < 21) {
                msg2 = 'um jovem'
                foto.setAttribute('src', 'img/jovem-m.png')
            } else if (idade < 50) {
                msg2 = 'um adulto'
                foto.setAttribute('src', 'img/homem.png')
            } else {
                msg2 = 'um idoso'
                foto.setAttribute('src', 'img/idoso.png')
            }
        } else if (sex[1].checked) {
            sexo = 'Mulher'
            if (idade < 10 && idade >= 0) {
                msg2 = 'uma criança'
                foto.setAttribute('src', 'img/menina.png')
            } else if (idade < 21) {
                msg2 = 'uma jovem'
                foto.setAttribute('src', 'img/jovem-f.png')
            } else if (idade < 50) {
                msg2 = 'uma adulta'
                foto.setAttribute('src', 'img/mulher.png')
            } else {
                msg2 = 'uma idosa'
                foto.setAttribute('src', 'img/idosa.png')
            }
        } else {
            alert('Selecione um sexo!')
            return
        }
        var res = document.querySelector('#res')
        res.innerHTML = `Indentificamos ${msg2} com ${idade} anos.`
        res.appendChild(foto)
    }
}