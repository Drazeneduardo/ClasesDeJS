const arr1= [4,16,2]

//const [num1,num2,num3] = arr1

//console.log(num2)

const suma = ([num1, num2, num3]) => {
return num1 + num2 + num3
}

console.log(suma(arr1))

const obj = {
    nombre : "juan",
    edad : 40,

}

const empleado =({nombre, edad}) =>{
    console.log(`El empleado se llama ${nombre} y tiene ${edad} años.`)
}

empleado(obj)

const obj2 = ["Juan",40,"arquitecto"]


const empleado2 = ([, , puesto]) => console.log (`Es un ${puesto}`) 

empleado2(obj2)

