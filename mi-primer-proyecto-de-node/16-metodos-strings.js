// Metodos mas utilizados con strings
// Como obtener la longitud de un string con ".length"
let str = "Hola soy un string";

console.log(str.length);

// Obtener partes de cadenas de caracteres, se puede obtener de tres maneras
//slice() ; substring() ; substr()

let slice_str = str.slice(0, 10)//le debemos indicar en qeu parte de el string empezar (la posicion 0 en este caso que seria el principio) y de segundo es la posicion en la que termine (1o en este caso)
console.log(slice_str);

let substring_str = str.substring(5, 10)// Funciona igual que el slice
console.log(substring_str);

let substr_str = str.substr(5, 10)// En este el pimer valor (5) indica donde empezar y el segundo (10)el numero de valores que tomara para sustraer 10 caracteres en este caso
console.log(substr_str);

// Reemplazar parte del contenido de un string con ".replace"
let cadena = "Hola mi nombre es Gorka";

console.log(cadena.replace('Gorka', 'Miguel'));// El pimer valor es el que queremos cambiar y el segundo seria por el que lo cambiariamos

cadena2 = cadena.replace("Gorka", "juan");
console.log(cadena2);

// Si queremos reemplazar todos los elementos que especifiquemos de un texto tenemos que meterlo dentro de /../g para que asi busque de manera global en todo el texto el valor que le digamos

let texto = "Los perros, los gatos, los pollos, los piojos, los videos";
console.log(texto.replace(/los/g, "cinco"));// fijarse que si la L esta mayuscula no lo cambia y si esta en un texto (pollos - polcinco) igual lo cambia