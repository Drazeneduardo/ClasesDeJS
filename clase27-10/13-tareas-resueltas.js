//*Tarea de los sonidos de animales
//ejemplo 1
const animal = "miau";

if (animal === "miau") {
  console.log(`es un gato porque hace ${animal}`);
} else if (animal === guau) {
  console.log(`es un perro porque hace ${animal}`);
} else {
  console.log("no se que animal es");
}

// ejemplo 2
const animal2 = "guau";

if (animal2 === "miau") {
  console.log("es un gato");
} else if (animal2 === "guau") {
  console.log("es un perro");
} else {
  console.log("no se que animal es");
}

// ejemplo 3
const animal3 = "oink";

if (animal3 === "miau") {
  console.log("es un gato");
} else if (animal3 === "guau") {
  console.log("es un perro");
} else {
  console.log("no se que animal es");
}

//*Tarea 6

const num1 = 15;

if (num1 >= 15) {
  console.log("El numero es 15");
} else {
  console.log("no");
}

if (num1 > 15) {
  console.log("15");
} else {
  console.log("no");
}

const animal4 = "guau";

switch (animal4) {
  case "miau":
    console.log("Es un gato");
    break;
  case "guau":
    console.log("Es un perro");
    break;
  case "cuak":
    console.log("Es un pato");
    break;
  default:
    console.log("no se que animal es ese");
}

const fruta = "mango";

switch (fruta) {
  case "mango":
    console.log("Es un mango");
    break;
  case "manzana":
    console.log("Es una manzana");
    break;
  case "pera":
    console.log("Es una pera");
    break;
  default:
    console.log("Lo mas probable es que sea una verdura");
}

const clima = 40;

switch (true) {
  case clima < 0:
    console.log(`Che te vas a congelar hace ${clima}°`);
    break;
  case clima >= 0 && clima < 10:
    console.log(`Invierno con estos ${clima}°`);
    break;
  case clima >= 10 && clima < 18:
    console.log(`Esta fresquito con estos ${clima}°`);
    break;
  case clima >= 18 && clima < 27:
    console.log(`Ideal el clima con ${clima}°`);
    break;
  case clima >= 27 && clima < 40:
    console.log(`Calurosa la cosa con estos ${clima}°`);
    break;
  default:
    console.log(`No salgas, es un horno hace ${clima}°`);
}


//*ME CUESTA PASAR LAS TAREAS A FUNCIONES
/* function clima (num){


    if (num < 0) {
    console.log(`Che te vas a congelar hace ${clima}°`)}else if (num > 0 && num <10){
      console.log(`Inviernito con ${clima}°`)
    }
  }

clima (5) */

/* function animales (string){

  if( string === typeof 'miau'){
    console.log(`es un gato y hace ${string}`)
  }else if( string === typeof 'guau'){
    console.log(`es un perro y hace ${string}`)
  }
  else{
    console.log(" no se que es")
  }
}


animales ('miau') */