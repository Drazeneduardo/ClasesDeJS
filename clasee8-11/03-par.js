//* Si es par diga par si es impar diga impar


function par(num){
for( let i = 0; i < num; i++){
    if (i % 2 === 0){
        console.log(`par ${i}`)
    }else{
        console.log(`impar ${i}`)
    }
}
}

par(20)