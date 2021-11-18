//* el this de acá es el OBJETO GLOBAL, No es igual acá que en el browser
function cosas(){
    // en la consola, en node, esto se llama global
    // si paso este console.log en la consola del navegador, obtengo el objeto window
    console.log(this)
}
cosas()