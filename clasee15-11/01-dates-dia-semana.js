//const day = new Date()

//* constructor días de semana:

const weekdays = new Array(7)
//Acá todavía hay 7 elementos vacíos:
console.log(weekdays)

weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";

console.log(weekdays)

//con esto sabe que día es hoy

const day = new Date()
//* nos toma la posición en el array del día que es 
let d = weekdays[day.getDay()]

console.log(d)

let daySinWeek = day.getDay()
console.log(daySinWeek)
//Nos devuelve la posicion