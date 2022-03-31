//* spread: nos sirve para casos opuestos. necesitamos acceder a cada uno de los valores de un array. un ejemplo son las funciones Math, que necesita que los argumentos sean numbers, no un array

console.log(Math.max(5,6,7,8,9))

const numArr = [1,16,2,88]
console.log(Math.max(numArr))//not a number!! no puede entrar directo al array

//solución

console.log(Math.max(...numArr))//spread basicamente nos abre el array 

const arr1 = [16,true,"tabla"]
const arr2 = ["de planchar", 42, false]

//clonar
const arr3 = [...arr1]
console.log(arr3)

//unir
const arr4 = [...arr1, ...arr2]
console.log(arr4)

//podemos hacer somo si fuera un splice para agregar cosas
const arr5 = [0,1,...arr1,false,...arr2]
console.log(arr5)