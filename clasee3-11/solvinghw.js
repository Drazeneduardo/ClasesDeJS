//* 
console.log('loop que devuelva multiplos de 3 resuelto por Pami')

for (let i = 0; i < 40  ; i++) {
 i % 3 === 0 && console.log(i)
}

// (condicion) && (ejecuta si es true)
// ternario: (condicion) ? (ejecuta si true) : (ejecuta si false)

console.log('Pami resolviendo el de deletreo')

const aDeletrear = "nucba"

for( let i = 0 ; i < aDeletrear.length ; i++){
    const deletreado = aDeletrear[i]
    console.log(deletreado , ',')

}