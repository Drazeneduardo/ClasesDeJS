//* https://www.w3schools.com/js/js_functions.asp


//* hay que declarar la funcion..

function hola(name){
    console.log(`hola ${name}`)//no va a saber que escribir en name hasta que ejecutemos función y le pongamos un valor
}

//* Y despues llamarla...

hola('Drazen') //entre los parentesis ponemos lo que pasamos como parámetro!

hola('Totoro')
hola('Pam')
hola() //al no pasar un valor nos mete un undefined en el name 
hola(16)
hola(true)

//* no especificamos un tipo tal como estamos ahora, no podemos especificarlo, asi que.. lo que pasan lo va a usar