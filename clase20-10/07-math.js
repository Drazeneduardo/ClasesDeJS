const num1 = 5;
const num2 = 8;
const pi = 3.141516;
const str = "145";

console.log(`suma: 5+8`);
console.log(`suma: ${5 + 8}`);
//dentro del ${} nos va a hacer la operación!
console.log(`suma: ${num1 + num2}`);
console.log(`resta: ${num1 - num2}`);
console.log(`multiplicacion: ${num1 * num2}`);
console.log(`division: ${num1 / num2}`);
console.log(`potencia: ${num1 ** num2}`);

//resto: es lo que queda restante en UNA DIVISION
console.log(`resto: ${num2 % num1}`);

//decidir la cantidad de decimales que queremos
console.log(`toFixed: ${pi.toFixed(2)}`); //2 suele ser lo que mas se usa porque son los centavos. Se pueden poner tantos como necesitemos
//a veces cuando fijamos a muchos mas de los decimales que trae.. hace cosas raras
console.log(`toFixed: ${pi.toFixed(20)}`);

//para redondear: floor es piso, ceil es techo. uno va para abajo, otro para arriba.
//Usamos math y el parametro es el numero que quiero
console.log(`toFixed: ${Math.floor(pi)}`);
console.log(`toFixed: ${Math.ceil(pi)}`);

//sacar una raíz cuadrada con Math
console.log(`sacando raíz: ${Math.sqrt(9)}`)
console.log(`sacando raíz: ${Math.sqrt(36)}`)

//sacar numero random entre 0 y 1 y hacer que solo sea de 2 decimales de largo
console.log(`numero random: ${Math.random().toFixed(2)}`);

//sacar de 1 a 10

let random = Math.random().toFixed(1)
console.log(parseFloat(random*10))

//cambiar el type:
console.log('to number: ', Number(str))
console.log('to number: ', parseInt(str))
console.log('to number: ', typeof Number(str), Number(str))
console.log(typeof str)

//numero a string:
console.log('to string: ', num1.toString())