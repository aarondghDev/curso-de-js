// Operador .valueOf() - Obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3);// Esta es otra manera de declarar un numero(podria hacerse con otro tipo de dato tambien) si queremos que el tipo de dato sea mas especifico
console.log(a);
console.log(b);

console.log(a + b);                     // esta y estao son los mismo es para que se vea mejor
console.log(a.valueOf() + b.valueOf()); // y esta

// NaN (Not a Number) - Infinity - Es un error que nos lanza si intentamos operar algo que nos sea un numero
let n = Number("adios");
console.log(n);
console.log(isNaN(n));// Asi podriamos evitar que nos de el error

// Como convertir los strings a valores numericos de Number, parseInt y parseFloat
let numero = "5.89";
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2);// aqui los concatenaria y no es lo que se quiere

console.log(Number(numero));// convertir usando "Number()" 

console.log(parseInt(numero));// convertir usando "parseInt()" lo convierte a entero, ignora los decimales
console.log(parseFloat(numero));// convertir usando "parseFloat()" lo convierte a Float, con sus decimales

// Numeros hexadecimales (base 16) - todos empiezan por "0x.."  y tienen la base en 8 y 16
let numHex = "0x3a7b5"
console.log(parseInt(numHex, 16));


// Obtener los valores maximo y minimo en JS

let min_precision = Number.EPSILON;
let min_value_JS = Number.MIN_VALUE;
let max_value_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_value_JS);
console.log(max_value_JS);