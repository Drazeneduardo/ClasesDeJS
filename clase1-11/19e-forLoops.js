const palabra = 'cosa'

//* al recorrer nos va a mostrar las letras en esa posición, la i se convierte en el indice 
for (let i = 0; i < palabra.length; i++) {
    const element = palabra[i];
    console.log(element)
}

const juegos = ['Doom','Civ','worms']

for (let j = 0; j < juegos.length; j++) {
    const element = juegos[j];
    console.log(element)
    
}

for (let goles = 1; goles < 10; goles+=2) {
    if(goles ===7){
        console.log('no se puede hacer 7 goles es ilegal')
        break;
    }
    //*ni siquiera nos imprime esto, corto chau, a otra cosa
    console.log('cantidad de goles', goles)
    
}