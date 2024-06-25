//Definicion de variables
var variable;
let variableLet_;

console.log(variable);
console.log(variableLet_);


var a = 1;
let b = 2;
console.log(a);
console.log(b);

a = 2;// podemos cambiar su valor y que var y let son casi lo mismo
b = 4;
console.log(a);
console.log(b);


 //constante
const constante = "hola soy una constante";
console.log(constante);

//constante = "hola";// no podemos cambiar su valor

// diferencia entre var y let es que var afecta a todo el codigo mientras que let solo afecta a el bloque de codigo en el que este definido, ej=

var variable = "hola soy una variable VAR";

for (var i = 0; i < 3; i++) {
    var variable = "soy la segundo variable"//aqui no se deberia usar el var otra vez pero es para ilustrar, al ya definir una var se cambia simplemente usando el nombre de la variable = nuevo valor
}

console.log(variable);//y aqui vemos como lo cambia en todo el codigo no solo en el bucle


let variableLet = "hola soy una variable let";

for (var i = 0; i < 3; i++) {
    let variableLet = "soy la segundo variable"//esta variable let seria dentro de este bloque o bucle for
}

console.log(variableLet);//aqui vemos como sigue siendo la vatiable que definimos en primer lugar. igual no seria buena practica duplicar nombres de variable

//////////////////////////////////////////////////

//typeof - es un operador que nos develve el tipo de un valor

console.log(typeof 1);
console.log(typeof true);
console.log(typeof "hola");
console.log(typeof variableLet); //le podemos pasar variable ya definidas por su nombre
console.log(typeof a);
