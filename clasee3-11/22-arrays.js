//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
//* https://www.w3schools.com/js/js_array_methods.asp

//* DOCU DE RETURN https://www.w3schools.com/jsref/jsref_return.asp


const animales = ['canguro', 'camello', 'perro', 'gato']
const comidas = ['hamburguesa', 'papas fritas', 'pizza', 'fideos']

//console.log(comidas) //acá imprime el array
//* metodo
//convertirlo a string

//* la a es como un placeholder. Es el "alias" del array que vayan a pasar y pueden pasar cualquier array que tengan ganas
const arrToString = (a) => console.log(a.toString())
/*arrToString(animales)
arrToString(comidas)*/

//si fuera con funcion "tradicional" la escribiriamos así

function arrToString2 (a){
    console.log(a.toString())
}
//arrToString(animales)
//arrToString(comidas)
// a string pero con un caracter de separacion custom - en la opinión de Pami es mejor
//* flecha en una sola linea tiene return implícito
const arrJoin = a => a.join(", ")
//console.log(arrJoin(comidas))

//* Esto sin return da undefined
function arrJoin2(a){
   return a.join(', ')
}
console.log(arrJoin2(animales)) //sin return da undefined!

//* con flecha puede fallar tambien, si es multilínea. Ahí requiere el return

const arrJoin4 = a => {
     a.join(", ")}
console.log(arrJoin4(comidas))

//* asi se arregla

const arrJoin5 = a => {
    return a.join(", ")}
console.log(arrJoin5(comidas))