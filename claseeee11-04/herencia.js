//hereda del padre y le agrega cosas 

class Animal {
    constructor(legs, claseAnimal){
    this.legs = legs
    this.claseAnimal = claseAnimal
    }

    movimiento() {
        console.log('este animal se mueve en ' + 
        this.legs + 
        'patas, y pertenece al grupo de los ' + this.claseAnimal)
    }
}

//con extends va a heredar lo que tiene animal

class Pajaro extends Animal {
    constructor(legs, claseAnimal){
        super(legs, claseAnimal)
    }

    volar(){
        console.log('y además vuela')
    }
}

class OsoHormiguero extends Animal {
    constructor(legs, claseAnimal){
        super(legs, claseAnimal)
    }

    comerHormigas(){
        console.log('y come hormigas')
    }
}

let canario = new Pajaro(2, 'ave')
console.log(canario.movimiento(), canario.volar())

let juancito = new OsoHormiguero(4, 'mamifero')
console.log(juancito.movimiento(), juancito.comerHormigas() )