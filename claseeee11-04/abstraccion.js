//llamo las cosas, sin saber realmente que pasa adentro. Nos simplifica la interfaz

function radio (genre) {
    this.genre = genre;

    this.play = function() {
        console.log( `Esta sonando ${genre}`)
    }

    this.stop = function() {
        console.log(`Dejo de sonar ${genre}`)
    }
}

let nuevaRadio = new radio("reggaeton")

//no se como hizo para que suene, nomás se que hay que llamar esos métodos
nuevaRadio.play()
nuevaRadio.stop()