let btn = document.getElementsByClassName('ver_mais')[0]
let texto = document.getElementsByClassName('js')[0]

btn.addEventListener('click', apareceTexto)

function apareceTexto(){
    texto.classList.toggle('js')
    texto.classList.toggle('visibilty')
}


/*aparecer menu fixo javascript*/

let menu = document.getElementById('menu')
let sideBar = document.getElementsByClassName('fixo')[0]
let pagina = document.getElementById('pagina')

menu.addEventListener('click', apareceSide)

function apareceSide(){
    sideBar.classList.toggle('fixo')
    sideBar.classList.toggle('aparece_sidebar')
    pagina.classList.toggle('sumir_pagina')
}