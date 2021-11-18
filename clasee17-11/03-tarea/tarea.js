//* Acá arribas declaramos todos los elementos que vamos a tomar del html

alert('Bienvenido a mi tarea, si esta viendolá mas vale que la apruebe')
alert('Guelcom to yurasic par')
alert('Mira el HTML porque cuando cliquees "Aceptar" va a cambiar')
alert('Te engañe, ahora si..     o no?')

const title = document.getElementById("title")

const title2 = document.getElementById("title2")

const parrafo = document.getElementsByClassName("parrafo")

const link = document.getElementsByTagName("a")

title.innerHTML = "Drazen Hernández"
title.style.fontFamily = "sans-serif"

title2.innerHTML = "Nací el 13/10/96"

parrafo[0].style.color = "red"
parrafo[1].style.backgroundColor = "coral";
parrafo[1].style.textTransform = "uppercase"
parrafo[2].style.textDecorationLine = "underline"
parrafo[2].style.textDecorationStyle = "solid"
parrafo[2].style.fontFamily = "sans-serif"

for (let i = 0; i < link.length; i++) {
    link[i].style.border= "1px solid orange";
    link[i].style.width="20%"
    link[i].style.fontFamily = "sans-serif"
    link[i].style.textDecoration = "none"
}