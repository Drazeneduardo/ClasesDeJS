const comidas = ["hamburguesa", "papas fritas", "pizza", "fideos"];
const animales = ['canguro', 'camello', 'perro', 'gato']

//*unshift agrega al principio, sube el index de los demas, retorna el largo:

const unShiftArr = a => a.unshift("tortuga")
console.log(unShiftArr(animales))
console.log(animales)
console.log(animales[4])

//* splice es un poco distinto: tiene dos parametros, posicion y cantidad. Tercer parametro sería con que reemplaza

const spliceArr = b => b.splice(0, 2)
console.log( 'saco' ,spliceArr(comidas))
console.log('quedaron', comidas)

console.log('saco', spliceArr(animales))
console.log('quedaron', animales)