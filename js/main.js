var Menu = false;
var BotonTexto = document.getElementById("BotonTexto");
var MenuContenido = document.getElementById("MenuContenido");
var MenuScroll = document.getElementsByClassName("MenuScroll");
var Pagina = document.getElementsByClassName("Pagina");
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
ToggleMenu();