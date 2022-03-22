//la promesa va a cumplir el papel del callback
const dividir = (num1, num2) => {
    return new Promise((resolve, reject)=>{
        //casos tristes
        //&& en este caso es cortocircuito. Significa que si se cumple hacemos algo.
        num1 === 0 && reject(new Error("error"))//si es cero, rechazalo
        num2 === 0 && reject(new Error("error"))

        //caso feliz
        resolve (num1 / num2)
    })
   
}

dividir(30,2)
    .then(res1 => {
        console.log(res1)
        return dividir(res1, 2)
    })
    .then(res2=>{
        console.log(res2)
        return dividir (res2, 2)
    })
    .then (res3=>{
        console.log(res3)
    })
    .catch(error => error)
    .finally(()=> console.log("chau"))
