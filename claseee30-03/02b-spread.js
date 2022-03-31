//*spread se puede pasar a los string tambien o.O?

const palabra = "deletreame"

console.log([...palabra]) //es como un split

console.log(palabra.split(""))
console.log(palabra.split("e"))
console.log(palabra.split("", 3))//el split al tener mas parametros da mas libertad