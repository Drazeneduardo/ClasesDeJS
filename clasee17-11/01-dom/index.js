//* Todo este agarrar elementos por id, lo hacemos arriba de todo


//capturar por id
const title = document.getElementById("title")

//capturar por class
const cajita = document.getElementsByClassName("cajitas")

//capturar por etiqueta
const acheTres= document.getElementsByTagName("h3")

//* cambiar el contenido:
//*https://www.w3schools.com/Jsref/prop_html_innerhtml.asp
title.innerHTML = 'Hola desde js!'

//* esto no va a andar:
cajita.innerHTML = 'somos los divs'
//* lo que tenemos es una lista de nodos(basicamente es un array). Como accederiamos podemos ir con posición 
cajita[0].innerHTML = 'soy el primer div'
cajita[1].innerHTML = Date()
cajita[2].style.color = "blue"

//* recorriendo con un for:
for (let i = 0; i < acheTres.length; i++) {
     acheTres[i].style.border= "3px dotted red";
     acheTres[i].style.width="20%"
}
//*escribimos con camelCase!
acheTres[2].style.textAlign = "center"