// Metodos de cadenas de texto parte 2
// toLowerCase() - toUpperCase() - convierten un texto a mayusculas y el otro a minusculas
let input = "escorpio";
let db = "escorPio";

console.log(input === db);
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

console.log(input.toLowerCase());
console.log(db.toUpperCase());

// Concatenacion - Existen varias formas ".concat", "+"" (con esta hay que tener cuidado porque si usamos el mas con numero no los concatena, los suma), o con las comillas invertidas "``"  ${str_1} ${str_2}
let str_1 = "texto 1"
let str_2 = "texto 2"

console.log(str_1.concat(str_2));// .concat
console.log(str_1.concat(" ", str_2));//podemos meter otras cosas en el concat

console.log(str_1 + " " + str_2);// +

console.log(`${str_1} ${str_2}`);// ``

// Eliminar espacios al inicio(trimStart), al final(.trimEnd) y ambas(.trim)
let str_3 = "     String con espacios al final    ";
console.log(str_3.length);
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// .charAt - Obtener el caracter que hay en X posicion .charAt
let str_4 = "Posicion 9"

console.log(str_4.charAt(9));
console.log(str_4[4]);//Se obtiene lo mismo asi 

// .indexOf - Obtener la posicion de una palabra dentro de un string 
let str_5 = "hola soy Gorka"
console.log(str_5.indexOf("Gorka"));
console.log(str_5.charAt(9));

let str_6 = "hola soy Gorka, hola soy Gorka, hola soy Gorka"//.lastIndexOf - si hay dos o mas elementos iguales el .lastIndexOf tomaria el ultimo (.indexOf tomaria el primero)
console.log(str_6.indexOf("Gorka"));
console.log(str_6.charAt(9));
console.log(str_6.lastIndexOf("Gorka"));


