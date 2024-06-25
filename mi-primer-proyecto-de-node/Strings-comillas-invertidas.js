// String 
let str_dbl = "hola soy un textocon comillas dobles";
let str_sng = 'hola soy un texto con comillas simples';

console.log(str_dbl);
console.log(str_sng);

let str_comillas = "eso era \"lea\""; // Si queremos usar comillas dentro de las comillas lo definimos con  \\
let str_comillas_simples = 'Y me dijo "hola"'; // con las comillas simples si queremos algo entre comillas podemos usar las comillas dobles
let str_comillas_dobles = "Y me dijo 'hola'";// y viceversa (creo)

console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);

/////////////// Comillas invertidas (backticks) `..` : sirven para intoducir variables dentro de un string

let str_backticks = `Hola esto es un string con backticks` 

console.log(str_backticks);

let nombre = `Gorka`;
let saludo = `Hola, ${nombre} bienvenido`; // se usan las `..` y para usar la variable usamos ${..} y el nombre de la variables que queramos usar dentro de las llaves

console.log(saludo);

//Tambien podemos hacer plantillas html dentro de las comillas invertidas

let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Este es un parrafo</p>
    </html>
`;

console.log(plantilla);





