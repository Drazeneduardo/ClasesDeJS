const menu = [{
    id: 1,
    type: "desayuno",
    nombre: "café y dos medialunas",
},
{
    id: 2,
    type: "almuerzo",
    nombre: "bife a caballo",
},
{
    id: 3,
    type: "merienda",
    nombre: "tostado",
},
];

const getInfo = () => {
//el primer paso es crear la promesa nueva
//resolve es el "caso feliz". Reject es "falló por algún motivo"
return new Promise((resolve, reject) => {
    //con resolve, le decimos que eventualmente van a llegar los datos para resolverlo
    setTimeout(() => {
        resolve(menu);
        reject((err) => console.log(err));
    }, 2000);
});
};

const result = async() =>{
    //try es intentá hacerlo, Si sale, hacés lo de adentro
    try{
       console.log(await getInfo()) //esperá que llegue getInfo
    } catch(error){
        //catch es agarra el error no lo dejes ahí suelto
        console.log(error)
    }
    //acá iría el finally
}

result()

//ojo la sintaxis cuando no es flecha es levemente distinta