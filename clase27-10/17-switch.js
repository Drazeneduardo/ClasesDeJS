//* https://www.w3schools.com/js/js_switch.asp

const alien = {
    ojos: 2,
    idioma: "ingles", 
    planeta: "Mandalore"
};

switch(alien.ojos) {
    case 0:
        console.log('miraluka');
        break;
    case 1:
        console.log('abyssing');
        break;
    case 2:
        console.log('wookie');
        break;
    case 3:
        console.log('gran');
        break;
    case 4:
        console.log('dyplotids');
        break;
    default:
    console.log('no se que es pero seguro vive en tatooine')                   
}

//* el switch pasa en los parentesis el key, y en el case el valor

switch(alien.planeta){
    case "Tattoine":
        console.log("es un desierto")
    case "Mandalore":
        console.log("This is the way")    
}