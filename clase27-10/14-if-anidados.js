const num1 = 16;
const num2 = "16";

if (typeof num1 === typeof num2) {
  if (num1 > num2) {
    console.log(`${num1} es mayor a  ${num2}`);
  } else if (num1 < num2) {
    console.log(`${num2} es mayor a ${num1}`);
  } else {
    console.log(`${num1} es igual a ${num2}`);
  }
} else {
  console.log(`${num1} es ${typeof num1}, pero ${num2} es ${typeof num2}`);
}

//!Lo mismo pero con operadores lógicos(pista no hagan esto)

if (typeof num1 === typeof num2 && num1 > num2) {
  console.log(`${num1} es mayor a  ${num2}`);
} else if (typeof num1 === typeof num2 && num1 < num2) {
  console.log(`${num2} es mayor a ${num1}`);
} else if (num1 === num2) {
  console.log(`${num1} es igual a ${num2}`);
} else {
  console.log("Son diferentes tipos de valores");
}
