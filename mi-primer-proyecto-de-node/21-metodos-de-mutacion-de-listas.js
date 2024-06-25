// Como trabajar con listas (arrays, arreglos etc)
let var1 = 45;
let array = [1, "hola", false, 4, 5, null, undefined, var1];

console.log(array);

// Acceder a los valores de un array a traves de su posicion
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);//etc

//Metodos para introducir nuevos valores en nuestro array
//* .push() . unshift() => Mutan el valor de nuestro array
//* .push() -> Añadir valores a el final
array.push("extra", 2);
console.log(array);

//* .unshift() -> añade valores a el inicio de el array
array.unshift("inicio", 5);
console.log(array);

// Metodos para eliminar valores de nuestro array (tambine mutan el valor de el array)
//* .pop() -> Elimina valores a el final
const array2= [1, 3, "hola", false]

array2.pop()
console.log(array2);

//* .shift -> Elimina valores a el principio
array2.shift();
console.log(array2);

// Metodo para eliminar, modificar, o añadir valores en nuestro array
//* .splice(x, y, z)
//* Eliminar valores -> .splice(indice, numValoresAEliminar)
const array3 = [1, 2, 3, 4, 5, 6, 7]

array3.splice(5, 2); //Aqui el primer numero (5) hace referencia a el espacio en memoria(que la posicion 5 seria el 6 en este caso), el segundo numero indica cuantos elementos (2 en este caso, osea que se eliminaran 2 elementos a partir de la posicion 5 de el array, se eliminaria el 6 y el 7 de el array)
console.log(array3);

//* Añandir valores -> .splice(indice, 0, valores) 
array3.splice(2, 0, "hola", 4)
console.log(array3);

//* Modificar valores -> .splice(indice, 1, valores)
array3.splice(2, 1, 3);
console.log(array3);