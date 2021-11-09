//*cada multiplo de 3, se reemplaza por fizz. Cada múltiplo de 5, por buzz. Si es multiplo de los dos, por fizzbuzz!!


function ejerc(num){
for ( let i = 0; i <= num; i++){
    if ( i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz')
    }else if ( i % 5 === 0){
        console.log('buzz')
    }else if (i % 3 === 0 ){
        console.log('fizz')
    }else{
        console.log(i)

    }

}
}

ejerc(20)