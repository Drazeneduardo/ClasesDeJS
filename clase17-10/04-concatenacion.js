const nombre = "Drazen"
const edad = 25

const uniendoConMas = "Hola soy " + nombre + " y tengo " + edad + " años de edad"
console.log(uniendoConMas) 

const uniendoConBackTicks = `hola soy ${nombre} y tengo ${edad} años de edad`

console.log(uniendoConBackTicks)
//no siempre en la vida van a necesitar backticks.. no se compliquen
const simple = "programacion"
console.log("hola, yo enseño " + simple)

//concatenar con método:

const parte1= "hola soy Drazen "
const parte2= "y tengo 35 años"

const parte3 = parte1.concat(parte2)
console.log(parte3)