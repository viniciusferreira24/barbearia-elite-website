// =======================================
// ABRIR IMAGEM GRANDE DA GALERIA
// =======================================

function abrirImagem(src){

const lightbox = document.getElementById("lightbox")
const img = document.getElementById("lightbox-img")

// coloca a imagem clicada dentro do lightbox
img.src = src

// mostra o lightbox
lightbox.style.display = "flex"

}


// =======================================
// FECHAR IMAGEM GRANDE
// =======================================

function fecharImagem(){

document.getElementById("lightbox").style.display = "none"

}


// =======================================
// MENU MOBILE (CELULAR)
// =======================================

function toggleMenu(){

const menu = document.getElementById("menu")

// adiciona ou remove a classe "active"
menu.classList.toggle("active")

}


// =======================================
// INICIAR ANIMAÇÕES DO SITE
// =======================================

AOS.init();