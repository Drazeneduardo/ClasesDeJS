const form = document.getElementById("form");
const listParent =document.getElementById("list")
const inputForm = document.getElementById("inputForm")

form.addEventListener("submit", e => {
    e.preventDefault()
    addTask()
})

const addTask = (e) => {
    if (inputForm.value === ""){
        console.log("este campo no puede estar vacio!")
        return false;
    }

    localStorage.setItem(
        "todos",//cuando termina de agregar, lo va a volver a hacer string para que quede en el storage 
    JSON.stringify([
        //al estar en un objeto, podemos trabajar con el ..., por eso parse
        //getItem necesita el parse
        ...JSON.parse(localStorage.getItem("todos") || "[]"), //estos 3 puntos nos van a explotar el array y meter los elementos nuevos al mismo nivel, nos abre el array de nombre "todos" (la key), si no hay nada, crea el array vacío [], si no hay nada, traeme el array, yo lo lleno. Sería: si tenés algo le metemos todo lo nuevo adentro, si no traemos array vació y empezamos a meter
            {
        todos: inputForm.value,
        completed: false
            }
        ])
    )
    
    const list = document.createElement("li")
    list.innerHTML = `
    <input type="checkbox">
    <input type= "text" value ="${inputForm.value}">
    <i class ="fa fa-trash"></i>
    `
    listParent.insertBefore(list, listParent.children[0])
    inputForm.value = ""
}

const loadTasks = () => {
    if(localStorage.getItem("todos") == null) return;

    //caso contrario
    //creá un obejto desde un objeto que sea "tipo array"
    let todos = Array.from(JSON.parse(localStorage.getItem("todos")))
    console.log(todos)

    todos.forEach(todo =>{
        const list = document.createElement("li")
    list.innerHTML = `
    <input type="checkbox" onclick= "todoComplete(this)" class="check ${todo.completed ? "checked" : ""}">
    <input type= "text" value ="${todo.todos}">
    <i class ="fa fa-trash"></i>
    `
    listParent.insertBefore(list, listParent.children[0])

    })
}

loadTasks()