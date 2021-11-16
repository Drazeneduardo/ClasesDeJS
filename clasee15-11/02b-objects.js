//*https://www.w3schools.com/js/js_this.asp
//*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this
//*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//*https://www.youtube.com/watch?v=gvicrj31JOM => mosh es lo MAS, es el más claro explicando.


//* un objeto es una representación de algo real:
const gato = {
    raza: "comun europeo",
    nombre: "Golosina",
    color: "naranja a rayas",
    edad: 12,
    patas: 3,
    castrado: true
    //nuestro primer this!

    ,descripcion: function(){
        console.log(`este gato se llama ${nombre}`)//nombre no esta definido
    }
    ,descripcion2: function(){
        console.log(`este gato se llama ${this.nombre}`)//this en este caso, se refiere al objeto en que estamos, En contaxto
    },

    //con flechas bueno, no
    caracteristicas: () =>console.log(`Este gato tiene ${this.edad}`), // la flecha no encontró el contexto

    caracteristicas2: () =>console.log(`Este gato tiene ${edad}`), // la flecha no encontró el contexto, va a romper

    edades: function () {
        //la flecha anda solo estando dentro de una funcion tradicional, Y REQUIERE EL THIS Y SER EJECUTADA
      const edadDelGato = () => {
        console.log(this.edad);
      };
      edadDelGato();
    },
  

}
//gato.descripcion() Esto da error
gato.descripcion2()// la unica que va a andar
gato.caracteristicas()

gato.edades()