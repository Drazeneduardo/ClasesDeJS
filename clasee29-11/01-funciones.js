
//* https://caniuse.com/?cats=JS&statuses=all

//* Tipos de funciones
//*https://dev.to/victordeandres/funciones-en-javascript-7-formas-de-declarar-una-funcion-523a
//*https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
//*https://www.jasoft.org/Blog/post/Escribiendo-codigo-JavaScript-limpio-funciones-anonimas-auto-ejecutables


//* funcion "clasica": declarativa

function saludar(name){
    console.log("hola " + name)
}

saludar("Drazen")

// funcion expresión: a mitad de camino entre declarativa y flecha

const clima = function temp(grados){
    console.log('hoy hace ' + grados + '°')
}

// la llamamos usando el nombre de la variable no de la función
clima(16)

//! la podemos hacer anonima
const juguetes = function(cantidad){
    console.log('tengo ' + cantidad + ' osos de peluche')
}

juguetes(5)

//! flecha, nuestra vieja amiga:

const hervir = litros => {
    console.log('hay que hervir ' + litros + ' litros para los fideos')
}

hervir(2);

//! IFFE: inmediately invoqued funtion expression
//* Ojo! si no le ponen el punto y coma a la anterior... la iife se le pega y hace lio
//* Es descartable. Se declara sin nombre y se ejecuta en el momento, y después chau

(function(){
    console.log('Hola nucba')
})();

//!Las podemos hacer y pasarle un parametro:
(function(user){
    console.log('hola ' + user)
})("Drazen")