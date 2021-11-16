//* crear un objeto con new

let clima = new Object({
    temperature : 16,
    nubosidad: "baja",
    precipitaciones: false
})

console.log(typeof clima, clima)

//* en los objetos no podemos usar push. Push es para arrays.

//varias formas de agregar: la larga es con una function:

const add = ()=>{
    clima.maxima = 18;
    console.log(clima)
}
add()

//una forma mas chiquita es esta:

clima ["minima"] = 12
console.log(clima)

//*https://www.educative.io/edpresso/how-to-add-property-to-an-object-in-javascript

// la otra forma corta sin función seria esta:

clima.humedad= "96%"
console.log(clima)