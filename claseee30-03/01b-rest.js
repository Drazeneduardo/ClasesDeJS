//*el otro uso de rest, es justamente agarrar el resto

const hotel = (habitaciones, piletas, ...rest)=> {
    console.log(`Este hotel cuenta con ${habitaciones} habitaciones, ${piletas} piletas climatizadas y ademas ${rest}.`)
}

//la cantidad de datos después de los dos primeros podria ser eterna o no existir

hotel(40, 3, "otras comodidades", "baños privados", "desayuno y merienda")

//tarea: que no muestre el "y ademas" si rest esta vacio