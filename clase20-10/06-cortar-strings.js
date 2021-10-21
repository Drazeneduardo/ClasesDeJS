const texto = "Este es un texto de prueba, sarasa sarasa";

//vamos a cortar strings:

console.log("usando slice para cortar: ", texto.slice(0, 26));

console.log("usando slice para cortar: ", texto.slice(27, 41));

console.log("usando slice para cortar: ", texto.slice(27));

console.log("usando slice para cortar al revés: ", texto.slice(-6));

//reemplazar palabras:

console.log(
  "reemplazar la primera ocurrencia: ",
  texto.replace("sarasa", "gatitos")
);
//g es global, i de insensitive(mayusc/minusc)
console.log(
  "reemplazar todas las ocurrencias: ",
  texto.replace(/sarasa/gi, "gatitos")
);

console.log("reemplazar todas las ocurrencias: ", texto.replace(/a/gi, "o"));

//mayusc,minusc

console.log("a minusculas= " + texto.toLowerCase());
console.log(`a mayusculas: ${texto.toUpperCase()}`);
//no es lo más usado, pero el Locale tiene en cuenta el idioma del usuario (si les hace cosas raras con los acentos pueden usar esto)
console.log(`a mayusculas: ${texto.toLocaleUpperCase()}`);

//convertir a array: con esto separas todos
console.log("a array: ", texto.split(""));
//con esto separas usando los espacios
console.log("a array: ", texto.split(" "));
//con esto separas usando la coma
console.log("a array: ", texto.split(","));
//ahora quiero separar y que me traiga el segundo elemento del array(OJO con no ponerle punto al elegir que elemento agarrar!):
console.log("a array: ", texto.split(",")[1]);

//undefined no es un error! es el estado en que están las cosas
console.log("a array: ", texto.split(",")[5]);
