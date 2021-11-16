//*https://www.w3schools.com/js/js_objects.asp


//* un objeto es una representación de algo real:
const gato = {
    raza: "comun europeo",
    nombre: "Golosina",
    color: "naranja a rayas",
    edad: 12,
    patas: 3,
    castrado: true
}

//* accedemos a los datos de dos formas:

console.log(gato.raza)
console.log(gato["edad"])

//* no podemos entrar por índice numerico, no podemos:
console.log(gato[2])