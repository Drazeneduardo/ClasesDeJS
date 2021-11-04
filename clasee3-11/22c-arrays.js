const comidas = ["hamburguesa", "papas fritas", "pizza", "fideos"];
const animales = ['canguro', 'camello', 'perro', 'gato']

//* push agrega al final y retorna el nuevo largo

const pushArr = a => a.push('queso')
console.log(pushArr(comidas))
console.log(comidas)

//pasando todo como param:

const arrToPush = (a, b) => console.log(a.push(b));
arrToPush(comidas,'peto')
console.log(comidas)

//*shift saca el primero( un pop al revés)Ademas le baja el index al resto del array

const shiftArr = b => b.shift()
console.log(shiftArr(animales))
console.log(animales)
console.log(animales[0]) //antes en 0 estaba canguro, ahora esta camello
