//* Imprimir tabla

for (let i = 0; i <=10; i++){
    for (let j = 5; j <=5; j++){
        console.log(`${j} x ${i} = ${j*i}`)
    }
}

// como function

function tablas(multiplo){
    for (let i = 0; i <=10; i++){
        for (let j = multiplo; j <=multiplo; j++){
            console.log(`${j} x ${i} = ${j*i}`)
        }
    }
}

tablas(8)