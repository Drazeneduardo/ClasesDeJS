const menu = document.getElementById("menu")
const span = document.getElementById("span")

//! el alerta corta la carga hasta que aceptemos
//?https://handlebarsjs.com/ 

//const bienvenido = ()=> alert("Te ganaste 1BTC")

//*https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction

//* podemos crear hijos!
const bienvenido = () =>{
    //* Los creo
    let  title = document.createElement("h1")
    let titleText = document.createTextNode("Bienvenido, te ganaste 1 BTC!")

    //los aplico al documento, si no hago no los inserta

    document.body.appendChild(title)
    title.appendChild(titleText)
}

//*https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction


const showMenu =()=>{
    //*Para ver si tiene o no la classList
    //console.log(menu.classList)
    //contains es "lo tiene?"
    if(menu.classList.contains("hide")){
        menu.classList.remove("hide")
        span.innerHTML = "cerrar"
    } else {
        menu.classList.add("hide")
        span.innerHTML = "abrir"
    }
}
