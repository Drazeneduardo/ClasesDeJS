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
    k += 2;
    console.log('k', k)
    
}