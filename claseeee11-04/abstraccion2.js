//* con class

class Alumno {
    constructor () {
        let nombre;
        let notas;
    }

    getNombre() {
        return this.nombre
    }
    setNombre(nombre) {
        this.nombre = nombre
    }

    getNotas() {
        return this.notas
    }

    setNotas(notas) {
        this.notas = notas
    }

}

//primero lo creamos, despues le seteamos los datos con sus propios métodos

let estudiante = new Alumno()

console.log(estudiante)
estudiante.setNombre('Drazen')
estudiante.setNotas(10)
console.log(estudiante)

let estudiante2 = new Alumno()

console.log(estudiante2)
estudiante2.setNombre('Rocio')
estudiante2.setNotas(5)
console.log(estudiante2)

console.log( estudiante.getNombre()+ ' tiene una nota de ' + estudiante.getNotas())