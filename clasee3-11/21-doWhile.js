let num = 0

while (num <= 10){
    console.log('con while:',num)
    num++
}

let num2= 0
do {
    console.log('con do while:', num2)
    num2 ++
}while(num2 <= 10)

///PERO
//* acá chequea primero y ejecuta si es true
let num3 = 15
while (num3 <= 10){
    console.log('con whilev2:',num3)
    num3++
}

let num4 = 15 
//* acá primero ejecuta y luego pregunta...:
do{
    console.log('con do while v2:' , num4)
    num4++
}while (num4 <= 10)