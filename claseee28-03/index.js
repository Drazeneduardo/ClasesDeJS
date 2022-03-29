//con un string no nos da mayor problema
const saveStringStorage = () => {
    localStorage.setItem("perro", "pocho")
}
saveStringStorage();

const saveObjectStorage = () =>{
    const productos = [
        {
            id: 1,
            tipo: "bebida",
            nombre: "pepsi"
        },
        {
            id: 2,
            tipo: "comida",
            nombre: "ñoquis"
        }
    ]
    //localStorage.setItem("cosas_guardadas", productos)

localStorage.setItem("cosas_guardadas", JSON.stringify(productos))
}


saveObjectStorage();

const loadLocalStorage =()=>{
    //console.log(localStorage.getItem("cosas_guardadas"))//esto nos va a devolver un string
    //*entonces, lo reconvertimos a objeto

    console.log(JSON.parse(localStorage.getItem("cosas_guardadas")))
}

loadLocalStorage()