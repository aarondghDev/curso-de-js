const fecha = new Date();

console.log(fecha);

const fecha2 = new Date(1987, 11);// si no completamos todas la fecha con hora y todo se autocompleta
console.log(fecha2);

const fecha3 = new Date(1999, 0, 20, 1, 5, 57);
console.log(fecha3);
//* En formato de milisegundos
const fecha4 = new Date(100000000000); // va restando desde la fecha mas antigua registrada por el programa, en milisegundos
console.log(fecha4);

const fecha5 = new Date(-100000000000); // se puede restar tambien
console.log(fecha5);

//* Definir a travez de strings
const fecha6 = new Date("october 13, 1979 12:15:15")
console.log(fecha6);


// comparar fechas - se compara si una fecha es posterior a otra

console.log(fecha > fecha2);

console.log(fecha2 === fecha5);// No se pueden comparar asi, tendria que ser en milisegundos

console.log(fecha2.getTime() === fecha5.getTime());// esta serai la forma de comparar igualdad entre fechas

// Como obtener el dia, el mes y el año de una fecha
//* Obtener el dia .getDate()
console.log(fecha2.getDate());
//*mes (los meses empiezan por el 0( enero 0, febrero 1 ...) por eso el +1 a el numero que nos da)
console.log(fecha2.getMonth() + 1);
//* año
console.log(fecha2.getFullYear());

// .toLocaleDateString - es una funcion muy util para que devuelva la fecha en formato mas visual, y en los parentesis puedes decirle en que formato lo quiere(de que pais)
console.log(fecha2);
console.log(fecha2.toLocaleDateString());







