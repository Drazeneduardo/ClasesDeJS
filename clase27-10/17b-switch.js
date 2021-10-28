const age = 16;
 //* no evalua age si no true porque evalua si es verdad que esta en el rango
switch (true) {
  case age < 2:
    console.log("maternal");
    break;
  case age >= 2 && age < 5:
    console.log("jardin de infantes");
    break;
  case age >= 5 && age < 13:
    console.log("primaria");
    break;
  case age >= 13 && age < 18:
    console.log("secundaria");
    break;
  case age > 18:
    console.log("universidad");
  default:
      console.log('la cagamos')
    break;
}
