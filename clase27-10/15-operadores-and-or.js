const num1 = 16;
const num2 = "16";

//!Lo mismo pero con operadores lógicos(pista no hagan esto)

//*Este if evalua dos cosas: primero que sean del mismo tipo y luego si uno es mayor que el otro

if (typeof num1 === typeof num2 && num1 > num2) {
  console.log(`${num1} es mayor a  ${num2}`);
} else if (typeof num1 === typeof num2 && num1 < num2) {
  console.log(`${num2} es mayor a ${num1}`);
} else if (num1 === num2) {
  console.log(`${num1} es igual a ${num2}`);
} else {
  console.log("Son diferentes tipos de valores");
}

//* || es or. Debe cumplir una de las condiciones

if (num1 === 16 || num1 === 15) {
  console.log("es verdad");
} else {
  console.log("no es verdad");
}
