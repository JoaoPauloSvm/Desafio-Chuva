let btn = document.getElementsByClassName('ver_mais')[0]
let texto = document.getElementsByClassName('js')[0]

btn.addEventListener('click', apareceTexto)

function apareceTexto(){
    texto.classList.toggle('js')
    texto.classList.toggle('visibilty')
    btn.innerHTML == 'Ver mais' ? btn.innerHTML = 'Ver menos' : btn.innerHTML = 'Ver mais'
}


/*aparecer menu fixo javascript*/

let menu = document.getElementById('menu')
let sideBar = document.getElementsByClassName('fixo')[0]
let pagina = document.getElementById('pagina')
let btnFechar = document.getElementById('menu_fechar')

menu.addEventListener('click', apareceSide)

function apareceSide(){
    sideBar.classList.toggle('fixo')
    sideBar.classList.toggle('aparece_sidebar')
    pagina.classList.toggle('sumir_pagina')
    btnFechar.style.visibility = 'visible'
}

btnFechar.addEventListener('click', retornar)

function retornar(){
    sideBar.classList.toggle('fixo')
    sideBar.classList.toggle('aparece_sidebar')
    pagina.classList.toggle('sumir_pagina')
    btnFechar.style.visibility = 'hidden'
}

/*manipulando formulario*/

let btnForm = document.getElementById('formulario')
let discussoes = document.getElementById('discussoes_share')
let form = document.getElementById('form')
let enviar = document.getElementById('enviar')

btnForm.addEventListener('click', manipulaForm)
enviar.addEventListener('click', envioSucesso)

function manipulaForm(){
    btnForm.style.visibility = 'hidden'
    discussoes.style.display = 'none'
    form.style.display = 'flex'
}
