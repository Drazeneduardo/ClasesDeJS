//? TRUE VALE 1, FALSE VALE 0

const numeros= [5 , 1 ,8 , 2, true, 'cosa']
const sum = arr => {
    let total = 0

    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'string'){
            console.log('acá hay texto')
        }else{
        total  += arr[i];
        }
    }
    console.log('la suma de los array es: ', total)
}

sum(numeros)