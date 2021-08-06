var Menu = false;
var BotonTexto = document.getElementById("BotonTexto");
var MenuContenido = document.getElementById("MenuContenido");
var MenuScroll = document.getElementsByClassName("MenuScroll");
var Pagina = document.getElementsByClassName("Pagina");
var media = window.matchMedia("(min-width: 1020px)");
var mediajs = window.matchMedia("(max-width: 648px)");
var Informacion = document.getElementsByClassName("Informacion");

function ToggleMenu(){
    if(Menu){
        BotonTexto.textContent = "Abrir";
        MenuScroll[0].style.display = "none";
        Pagina[0].style.display = "block";
        Menu = false;
    }
    else{
        BotonTexto.textContent = "Cerrar";
        MenuScroll[0].style.display = "Flex";
        Pagina[0].style.display = "Grid";
        Menu=true;
    }
}
function ToggleMenuCelu(){
    if(Menu && mediajs.matches){
        //Cerrado
        BotonTexto.textContent = "Abrir";
        MenuScroll[0].style.display = "none";
        Pagina[0].style.display = "block";
        Informacion[0].style.display = "Block";
        Menu = false;
    }
    else{
        //Abierto
        BotonTexto.textContent = "Cerrar";
        MenuScroll[0].style.display = "Flex";
        Pagina[0].style.display = "Block";
        Informacion[0].style.display = "none";
        Menu=true;
    }
}

if(media.matches){
    ToggleMenu();
}


if(mediajs.matches){
    let Botonmenu = document.getElementById("MenuBtn");
    Botonmenu.firstElementChild.onclick = function(){ToggleMenuCelu()};
    document.body.classList.add("Celular");
    MenuScroll[0].classList.add("contenedor-centrado");
    MenuScroll[0].classList.add("MenuScrollCelular");
}