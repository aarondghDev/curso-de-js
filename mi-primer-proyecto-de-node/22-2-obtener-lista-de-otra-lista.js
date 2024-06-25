// Como obtener una lista a partir de otra con -> .slice()
const array = ["hola", 1, 2, 3, true, null, "adios"];

// NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
console.log(array.slice(1, 4)); //empieza en la posicion 1 (el 1) y termina en el cuatro (la posicion 4 ya no entra que sria el true)
const array2 = array.slice(2, 5)// asi obtenemos una list a partir de otra
console.log(array2);

const array3 = array.slice(2, -2);// tambien le podemos pasar un numero negativo que seria para señalar la ultima posicion desde el lado derecho, en este caso seria el null (recordar que el ultimo elemento no se muestra)
console.log(array3);

