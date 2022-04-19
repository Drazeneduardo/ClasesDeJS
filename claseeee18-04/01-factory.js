//* funcion fabrica o funcion constructora 
//tenemos un molde, y sacamos muchos, similares

const autos =(ruedas, cambios, inteligente, combustible)=> {
    return {
        ruedas,
        cambios,
        inteligente,
        combustible,
        arrancar: function(){
            console.log('rum rum')
        }
    }
}

const audi = autos(3, 'manual', true, 'nafta')
console.log(audi)
console.log(audi.arrancar())

const tesla = autos(4, 'automatico', true, 'electricidad')
console.log(tesla)
console.log(tesla.arrancar())

//si falta un campo va a tirar undefined. Si sobra lo va a ignorar
const ferrari = autos(4,'automatico', true,)
console.log(ferrari)
console.log(ferrari.arrancar())