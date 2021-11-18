//*01. crear un constructor y hacer 5 comidas diferentes con él.

function Comidas(milanesas, empanadas, asado, choripan, tequeños){
this.milanesas = milanesas;
this.empanadas = empanadas
this.asado = asado
this.choripan = choripan
this.tequeños = tequeños

//Acá si me funciona, porque estoy dentro de la function tengo entendido
console.log(`Puedo pedir unas ${Object.keys(this)[1]} `)
}

const resto = new Comidas(2, 3, 5, 'no', 'no')
console.log('Quiero ordenar las siguiente',resto)

const resto2 = new Comidas(true, true, true, true, true)
resto2.pizza = true
console.log('Este restaurant tiene el siguiente menu', resto2)

//Acá estoy fuera de la primera función así que segun la clase scope no estoy tomando nada. Este console log tendría que estar en el molde de mi constructor más arriba 
console.log(`Puedo pedir unas ${Object.keys(this)[1]} `)
