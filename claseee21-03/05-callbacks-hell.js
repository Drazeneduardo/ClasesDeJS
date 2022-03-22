const dividir = (num1, num2, cb) => {
    //cb va a ser una función sin nombre, pero que la puedo llamar acá adentro y que va a tener 2 parametros
    //el primer param, es el error, el segundo es el ok (resolve, reject)
    if(num1 === 0 || num2 === 0){
      cb(console.log('no podes dividir por cero!'), null) //ahora sabe que tiene dos parametros, en uno tiene que hacer console.log si hubo error(este if es el error)

    }else {
        //el primero es nulo porque el error no existe
        cb(null, (num1/num2))//el segundo valor ahora va a ser la cuenta, en el del error obviamente la cuenta no tenía valor
    }
}
//al cb no le pongo nombre, porque total no lo necesito afuera. Solo necesito que sea el tercer parámetro y tenga dos param propios: error y result!
dividir(15, 3, (error, result) =>{
    if(error){
        throw error;
    } else {
        console.log(result)
    }
})

//ahora viene el infierno

dividir(45, 5, (error, result1) =>{
    if(error){
        throw error;
    } else {
        console.log(result1)
        dividir(result1, 2, (error, result2) => {
            if (error){
                throw error;
            } else {
                console.log(result2)
                dividir(result2, 2, (error,result3) =>{
                    if(error){
                        throw error;
                    } else{
                        console.log(result3)
                    }
                })
            }
        })
    }
})


//ESTO NO SE HACEEEEEE