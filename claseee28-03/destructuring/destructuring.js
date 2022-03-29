const objetito = {
    nombre : "Pocho",
    patas: 3,
    trucos: ["mover la cola", "traer la pelota", "dormir la siesta"]
}

//forma tradicional
//console.log(objetito.trucos[0])

const {nombre, patas, trucos} = objetito;

console.log(trucos[1])
console.log(patas)