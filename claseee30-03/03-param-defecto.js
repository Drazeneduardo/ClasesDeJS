const sumar = (a,b)=> a + b 
//ese igual le dice que si viene sin valor, use el que le damos
const sumar2 = (a,b = 1)=> a + b 

console.log(sumar(5,14))
console.log(sumar(2))//sin param, por defecto es NaN
console.log(sumar2(2))//* el por defecto lo usa solo si no trae un param en la ejecución!, sino se asigna el valor que le demos
