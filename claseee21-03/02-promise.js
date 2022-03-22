const menu = [ 
    {
        id : 1,
        type :"desayuno",
        nombre: "cafe y dos medialunas",
    },
    {
        id : 2,
        type: "almuerzo",
        nombre: "bife a caballo",
    },
    {
        id : 3,
        type :"cena",
        nombre : "pancitos",
    }
]

const getInfo = ()=>{
    //el primer paso es crear la promesa nueva
    //resolve es el "caso feliz". Reject es "falló por algún motivo"
    return new Promise((resolve, reject) =>{
        //con resolve, le decimos que eventualmente van a lelgar los datos para resolverlo
    setTimeout(() =>{
        console.log('uf, uf, ahí llegue')
        resolve (menu);
        reject(()=> console.log("hubo un error!"))
    }, 3000)
})
};

//getInfo ahora espera a que lleguen los datos
getInfo()
// y entonces..
.then((menu)=> console.log(menu))//Podemos tener muchos then
.then(()=> console.log("que alegria"))//este segundo then depende de que funcione el primero
.catch((err)=> console.log(err))//catch es para todos
.finally(()=> console.log("eso es todo amigos"))//finally se ejecuta con then y con catch, Es optativo.