// rest y spread se escriben igual

//a veces no sabemos el largo del array
const suma =(a, b, c)=> {
let total = 0;
return total = a+b+c;
};

//todod bien mientras sepamos que van a venir esa cantidad de parametros, El problema es si vienen de más o de menos
//console.log(suma(1,2,3))
//console.log(suma(1,2))//NaN
//console.log(suma(1,2,3,4))//no nos toma el ultima

//podemos usar un rest para que sume lo que venga
//en suma pasabamos "anys", acá pasamos un array de "anys"
const suma2 = ( ...nums)=>{
    let total = 0;
    for(let n of nums){
        total += n;
    }
    console.log(total);
}

suma2(1,2,3,5,6)
suma2(1,2,13,43)
suma2(1,2)