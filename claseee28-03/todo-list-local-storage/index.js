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
    }

    localStorage.setItem("todos", JSON.stringify({
        todos: inputForm.value,
        completed: false
    }))

    
}

