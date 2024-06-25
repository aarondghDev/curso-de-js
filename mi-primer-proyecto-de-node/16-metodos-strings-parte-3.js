// Metodos de cadenas de texto parte 3
// Expresiones regulares(funciones) https://regexr.com nos enseñan expresiones regulares

let texto = "el perro, el gato, el pollo";

console.log(texto.match(/,/g));

// .includes - es para verificar si esta un valor dentro de un array

console.log(texto.includes("gato"));

// Saber si un texto empieza por una palabra especifica(.startsWith),// Saber si un texto termina por una palabra especifica(.endsWith)
console.log(texto.startsWith("e"));

console.log(texto.endsWith("l"));
