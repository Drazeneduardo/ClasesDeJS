//* Palabra New, con esta podemos crear un monton de cosas como el objeto date
//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
// *https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/constructor
//* https://www.w3schools.com/jsref/jsref_obj_date.asp


//con new
const newDate = new Date()

console.log('con newDate',newDate)



//fecha en formato Unix:

const now = Date.now()
console.log('con now:', now)

console.log('Con Parse: ',Date.parse("Dec 25, 1995")) //* devuelve en milisegundos(podemos comprobarlo con el epochconverter)

console.log('Con UTC: ',Date.UTC(2011, 0, 16, 15, 12, 10, 130))//puede ser una fecha que ya paso
console.log('Con UTC: ',Date.UTC(2041, 0, 16, 15, 12, 10, 130))// o una fecha que todavia no
console.log('Con UTC: ',Date.UTC(1541, 0, 16, 15, 12, 10, 130))// y si no ponemos delante los dos numeros, asume que el año es entre 1900 y 1999. si es menor a 1970 da negativos

//*conseguir la fecha en epoch:

console.log('La fecha en Epoch:', Math.floor(new Date().getTime())/1000.0)