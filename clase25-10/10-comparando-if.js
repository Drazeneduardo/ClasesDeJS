//* acá inicializamos la variable
let a = "a";
let b = "b";

if (a < b) {
  console.log(`${a} es menor que ${b}`);
} else if (a > b) {
  console.log(`${a} es mayor que ${b}`);
} else {
  console.log(`${a} es igual que ${b}`);
}

//* acá reasignamos, no necesitamos el let
a = 1;
b = 3;

if (a < b) {
  console.log(`${a} es menor que ${b}`);
} else if (a > b) {
  console.log(`${a} es mayor que ${b}`);
} else {
  console.log(`${a} es igual que ${b}`);
}
