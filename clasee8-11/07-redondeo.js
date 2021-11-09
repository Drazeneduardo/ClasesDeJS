//* hacer una funcion que redondeee (toFixed)
//? En el parentesis le decimos cuantos decimales queremos
const redondear = (numero) => numero.toFixed(1);


console.log(redondear(10.94))

const redondeo = a => a.toFixed(2)

console.log(redondeo(15.48442454))


// si queremos controlar bien para que lado va ceil(techo) floor(abajo)
const paraArriba = b => Math.ceil(b)

console.log(paraArriba(16.5878))

