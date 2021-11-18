//*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/constructor

//*El método constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase.

//Basicamente es un molde de un perro vacio que tenemos que llenar, siempre que sea constructor iniciar con mayúscula
function Perro(orejas, patas, cola, color, darPata, correr) {
  this.orejas = orejas; //ese this es del objeto que vamos a crear. El orejas solo es el valor que le vamos a pasar.
  this.patas = patas;
  this.cola = cola;
  this.color = color;
  this.darPata = darPata;
  this.correr = correr;
}

//* new creo una instancia nueva, UN OBJETO del tipo que le esté pasando
const pochi = new Perro(2, 4, 1, "negra y naranja", true, false)
console.log(pochi, typeof pochi) //creó un nuevo objeto llamado pochi, construido con el molde

const toby = new Perro (2 , 4, 1, "blanco, negro, naranja", false, true)
//console.log('Toby es un', toby)
//* puedo agregarle algo como haría con un objeto
toby.cagarMucho = true
console.log('Toby es un', toby)