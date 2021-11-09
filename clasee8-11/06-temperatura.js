//?2.Si hace 20 grados, chequear si hace mas de 30 grados. si hace menos, llevar paraguas, si hace mas llevar sombrero, si hace menos de 20 llevar bufanda

let temp = 40;

if (temp < 20){
    console.log(`Hace ${temp} saldré con bufanda`)
} if (temp >=20){
    if(temp >30){
        console.log('llevar sombrero')
    }else{
        console.log('llevar paraguas')
    }
}