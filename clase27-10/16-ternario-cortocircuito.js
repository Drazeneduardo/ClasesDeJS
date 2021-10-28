const temperatura = 40;
//*solo podemos tener una respuesta true o false
console.log(temperatura > 30 ? "que horno " : "zafa");

//* podemos no querer un false, solo que haga algo si es true: Si no cumple la condición devuelve un false, no tiene una segunda condición

console.log(temperatura > 30 && "toma un helado");
