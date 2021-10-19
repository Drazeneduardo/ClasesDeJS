let comillasSimples = 'hola! `estoy dentro de comillas" \'Usando simples dentro de simples\' '
let comillasDobles = "hola! 'yo tambien'"
let comillasInvertidas = `soy un hola desde backtick \n "y yo tambien"`

console.log(comillasSimples, comillasDobles, comillasInvertidas)

//vamos a acceder a un caracter en particular!

let conMetodos = "hola mundo"

//empezamos a contar desde 0. Acá pedimos el caracter en la posición 3
console.log('usando métodos:', conMetodos.charAt(3))
//Podemos hacerlo sin el método y pasamos entre corchetes a cual acceder
console.log('accediendo directamente al caracter con corchetes:', conMetodos[6])

//podríamos crear una variable nueva para guardar ese caracter que queremos:

let unaLetra = conMetodos.charAt(7);
console.log('una letra:', unaLetra)
