const alumnos = ["Yves", "Exequiel", "Matias", "Danila", "Drazen"];

const cambiandoAlumnos = (a) => {
  a.shift();//saca del principio
  a.unshift("Leonardo");//agg al principio
  a.push('Yves')//agrega al final
  console.log(a)//no necesita return porque pusimos console.log
};

cambiandoAlumnos(alumnos)
