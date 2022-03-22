//*https://developer.mozilla.org/es/docs/Glossary/Callback_function
//*https://www.javascripttutorial.net/javascript-callback/

const userName = document.getElementById("nombre")

const getUserName = (cb) => {
    let user = prompt("decinos tu nombre!");
    //me traigo por parametro la otra función y lo que capture user es lo que va a recibir la otra
    cb(user);
}

const sayHello = (nombre) => {
    alert("Hola " + nombre);
    userName.innerHTML = nombre;
}

getUserName(sayHello);