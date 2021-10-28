//* https://www.w3schools.com/js/js_arrow_function.asp

const saludame = nameUser => {
    console.log(`Hola ${nameUser}`)
}

saludame('Drazen')


 //* podemos ni siquiera ponerle el const
 //* en una linea es la unica situación en que puede no tener llaves


saludito = nameUs => console.log(`Hola ${nameUs}`)

saludito('Drazencito')