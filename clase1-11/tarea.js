const palabra = 'deletreo'
//*DELETREO
//* al recorrer nos va a mostrar las letras en esa posición, la i se convierte en el indice 
console.log('intento de deletreo mas no se si es correcto')
for (let i = 0; i < palabra.length; i++) {
    const element = palabra[i];
    console.log(element, ',')
}
//* VA DE DOS EN DOS HASTA EL 25 SALTANDOSE LOS PARES
console.log('Ejecución que va de dos en dos hasta el 25 saltando los pares')
for (let i = 0; i <= 25; i++){
    if( i % 2 !== 0) console.log(i)
}

//*EN TEORIA MULTIPLOS DE 3 MENORES DE 40 pero no me sale
 
for (let j = 0; j < 40; j++) {
    if ( j % 3 == 0) console.log(j)
} 

console.log('Muestra de un array con diferentes futbolistas')
//* UN ARRAY QUE ME MUESTRA CADA ELEMENTO DE LA LISTA
let futbolistas = ['Cristiano','Messi','Ibra','Di Maria','Pedri']

for (let k = 0; k < futbolistas.length; k++) {
    const element = futbolistas[k];
    console.log(element)
    
}

//* RESTAR DE 2 en 2 de 40 a 0
console.log('Esta ejecución resta de 2 en 2 de 40 a 0')

for (let l = 40; l >= 0; l-=2) {
    
    console.log(l)
    
}

console.log('Si esta ejecución es igual a 15 se')
for (let m = 0; m < 20; m+=3) {
    console.log(m)
    if (m === 15){
        break;
    }
    
}

console.log('un for in mostrando animales y de donde son')

let animales ={
    Africa: 'Leones',
    Asia : 'Osos Panda',
    America : 'Bisontes',
    Oceania : 'Koalas',
    Europa : 'Osos Pardo'
}

for (const animal in animales) {
    console.log(`En ${animal} se consiguen ${animales[animal]}`)
} 


console.log('If ternario para comer o no un caramelo de acuerdo al clima')

let clima = 'calor';
console.log( clima === 'calor' ? 'comere un caramelo hace calor' : 'como que hace frío')


console.log('Tarea con if comparando temperatura y ejecutando acciones con respecto a las mismas')

let temp = 20;

if (temp < 20){
    console.log(`Hace ${temp} saldré con bufanda`)
}else if (temp <30){
    console.log(`Hace ${temp} saldre en shorts`)
}else if (temp < 40){
    console.log(`Hace ${temp} quien necesita ropa?`)
}else{
    console.log('che no me rompas el codigo')
}