var hora = new Date().getHours()
var msg = document.querySelector('#msg')
var foto = document.querySelector('#imagem')
var section = document.getElementsByTagName('section')[0]
var cumprimento = ''

if (hora >= 0 && hora <12) {
    cumprimento = 'Bom dia!'
    foto.src = 'img/manha.png'
    section.style.background = '#f1ede3ff'
} else if (hora >= 12 && hora <18) {
    cumprimento = 'Boa tarde!'
    foto.src = 'img/tarde.png'
    section.style.background = '#cea595ff'
} else {
    cumprimento = 'Boa noite!'
    foto.src = 'img/noite.png'
    section.style.background = '#8787a4ff'
}

msg.innerHTML = `${cumprimento} Agora são exatamente ${hora} horas.`