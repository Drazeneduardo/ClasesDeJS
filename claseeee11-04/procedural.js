//Esto sería un ejemplo mal hecho, codigo tipo spaguethi

let precio = 2000
let descuento = 15
let cantidad  = 10

const precioTotal = (precio, descuento, cantidad) => {
    console.log(((precio * descuento) / 100)* cantidad)
}

precioTotal()