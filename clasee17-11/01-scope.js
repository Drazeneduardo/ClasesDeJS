//*https://www.w3schools.com/js/js_scope.asp

const funcioncita = () => {
    let hola = "soy hola desde dentro de la función"
    return hola
}
let hola = "soy hola desde fuera de la función!"
console.log(hola)
console.log(funcioncita())
//Esto va a tirar error
const nombre = () =>{
    //esta variable jamás es leída!
    const myName = 'Yo soy Groot'
    return myName;
}

console.log(nombre())