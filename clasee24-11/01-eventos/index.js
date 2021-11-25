    const divHora = document.getElementById("horario")


    const divHora2 = document.getElementById("horario2")

    const divOver= document.getElementById("over")

    //La forma más fácil:
    const hora = () => divHora.innerHTML = Date()

    // ahora a darle formato a la fecha! https://stackoverflow.com/questions/2388115/get-locale-short-date-format-using-javascript

    const dOptions = {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric"

    }

    const hora2 = () =>{
        const d = new Date()
        console.log(d)
        divHora2.innerHTML = d.toLocaleDateString("es", dOptions)
    }

    const over = () => {
        divOver.innerHTML = "eh, que pasas por aca"
        divOver.style.color = "blue"
    }

    const chau = () =>{
        divOver.innerHTML = "Eso, andate cagon"
        divOver.style.color = "red"
        setTimeout(() => {
            divOver.innerHTML = "no pases arriba mio"
            divOver.style.color = "black"
        }, 3000);

//! Ejemplo        
//!https://codepen.io/rinatoptimus/details/JYVgKX

    }

    //* TIMEOUT = Después de determinado tiempo, haces una cosa,función
    //*https://www.w3schools.com/jsref/met_win_settimeout.asp

