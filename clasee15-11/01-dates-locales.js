//* https://stackoverflow.com/questions/2388115/get-locale-short-date-format-using-javascript

const d = new Date()

//va a devolver:2021-11-15T23:21:52.268Z
console.log('tal como sale sin parametros:', d )

//mes-dia-año: devuelve  15/11/2021 20:23:53

const toLocale = date => console.log('to locale: ',date.toLocaleString())

toLocale(d)

//* Con estos parámetros va a armar la fecha: 
let options = {
    weekday : "long",
    year : "numeric",
    month : "long",
    day : "numeric" ,
    //podemos pasar cuantos parametros quisieramos
    //hour: "numeric",
    //minute: "numeric",
    //second: "numeric"
}

const toLocaleConParams = date => {
    //"es" es el idioma, options son los parametros para la conversion que va a hacer!
    console.log('to locale con params: ',date.toLocaleDateString("es", options))
}
// devuelve lunes, 15 de noviembre de 2021
toLocaleConParams(d)