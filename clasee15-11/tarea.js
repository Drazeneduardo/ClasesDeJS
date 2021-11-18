//*Fecha de cumpleaños 
let fechaCumple = new Date(1996, 09, 13);
let options = {
  weekday: "short",
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
};

const toLocale = (fechaCumple) => {
  console.log("Yo naci el: ", fechaCumple.toLocaleDateString("es", options));
};

toLocale(fechaCumple);
//* Fecha de cumpleaños y la hora con minutos
let fechaCumpleHora = new Date(1996, 09, 13, 3, 50);
let options2 = {
  weekday: "short",
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "numeric",
  minute: "numeric",
};

const toLocale2 = (fechaCumpleHora) => {
  console.log(
    "Yo naci el: ",
    fechaCumpleHora.toLocaleDateString("es", options2)
  );
};

toLocale2(fechaCumpleHora);


//* Fecha de cumpleaños semana Long y todo lo demás numeric
let fechaCumpleLong = new Date(1996, 09, 13, 3, 50);
let options3 = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

const toLocale3 = (fechaCumpleLong) => {
  console.log(
    "Yo naci el: ",
    fechaCumpleLong.toLocaleDateString("es", options3));
};

toLocale3(fechaCumpleLong);

//* pasar de unix/epoch a formato legible

let fechaUnix = 845232600000
let fechaLegible = new Date(fechaUnix)

//console.log(fechaLegible)
console.log('Ejercicio hecho con .get')
console.log('Yo naci el',fechaLegible.getDate(),'/',(fechaLegible.getMonth()+1),'/',fechaLegible.getFullYear())


let fechaLegible2 = new Date(fechaUnix)

//console.log(fechaLegible2)
console.log('Ejercicio hecho con el toLocaleDateString')
console.log('Yo naci el',fechaLegible2.toLocaleDateString())

//* Ejercicio de objects

