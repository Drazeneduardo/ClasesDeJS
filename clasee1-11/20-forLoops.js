//* for in es util cuando no sabemos cuantos elementos tiene un objeto

let capitales ={
    Francia: 'Paris',
    Italia : 'Roma',
    Uruguay: 'Montevideo'
}

//* con objetos no podemos simplemente sacar el largo:

//console.log(capitales.length)//undefined no tiene idea
//console.log(capitales)

//* creamos una variable que vamos a usar para recorrer y mostrar los valores:
//* no es una regla pero en general la variable va a ser la singular o una letra (usualmente la inicial)

for (const capital in capitales) {
    //*conseguir los keys (los de la izquierda)
    //console.log(capital)
    //conseguir el valor:
    //console.log(capitales[capital])
    console.log(`la capital de ${capital} es ${capitales[capital]}`)
}

