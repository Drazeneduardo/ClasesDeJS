


//* que pasa si queremos acceder a la key y mostrarla como una funcion? bueno, acá vuelve nuestro amigo this

const clima ={
    temperatura: 16,
    nubosidad: "baja",
    precipitaciones: false,
    climate: function(){
        console.log(
            `Hoy hace ${this.temperatura}º, la ${Object.keys(this)[1]} es ${this.nubosidad} y el riesgo de ${Object.keys(this)[2]} es ${this.precipitaciones === false ? "nulo" : "alto"}
            ` 
        )
    }
}

clima.climate()