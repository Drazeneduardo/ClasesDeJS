let i = 0
//* puede no declararse uno de los valores, pero debe dividir con ; el lugar donde cada uno iria
//* la i ya existe, entonces puedo dejar vacio y completar solo los otros, y el incremento puedo hacerlo con +=, -=, *=, etc
for (; i <20; i+=3){
    console.log(i)
}
//*´primero imprima luego se pregunta si es mayor el numero
for (let j = 0; ; j+=2) {
    console.log('j:', j)
    if  ( j > 10){
        break;
    }
}


//* podemos hacer el incremento adentro:

const num = 25

for (let k = 0; k < num; ) {
    k += 2; //con esta se va a pasar uno, porque incrementa, imprime, y recién ahi chequea
    console.log('k', k)
    
}
//*modo pesadilla:
let l = 1; //primer termino

for (;;) {
  if (l > 10) break; //segundo termino
  console.log("l: ", l); //accion
  l += 2; //incremento (3er termino)
}

//*sería igual a:
for (let m = 1; m < 10; m += 2) {
  console.log("m:", m);
}