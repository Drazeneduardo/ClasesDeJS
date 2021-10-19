// 3 formas de declarar variables:

//var es global y es vieja NO USAR

var primera = "hola mundo";

// las dos formas que vienen de ES6: let y const: No son globales, existen donde hayan sido creadas

//const es constante no se puede cambiar

const segunda = "hola 2";

//let si puede ser cambiada
let tercera = "hola 3";

//para imprimir usamos console.log()
console.log("primera:", primera);
console.log("segunda:", segunda);
console.log("tercera:", tercera);

//podemos reasignar el valor en los let y var!

tercera = "cambiando el valor!";
console.log("tercera:", tercera);

segunda = "cambiando la constante";
console.log("segunda:", segunda);

// los var se pueden cambiar:

primera = "cambiando la var";
console.log("primera:", primera);
