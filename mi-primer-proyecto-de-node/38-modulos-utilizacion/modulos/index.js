// Formas de importar/exportar modulos (los estamos exportando de el archivo matematicas.js que esta en la carpeta modulos dentro de esta misma carpeta) existen dos manera
//1. CommonJS - es el por defecto que tenemos en este archivo, seria con la palabra clave: requiere para solicitar y desde el archivo que vayamos a exportar -> module.exports = {aqui irian los nombre de las funciones}

const moduloMatematicas = require("./matematicas.js")// esta seria la manera de exportar con requires el . dentro de los parentesis hace ref a la carpeta padre, ya que el archivo matematicas.js esta en otra carpeta dentro de esta misma carpeta
console.log(moduloMatematicas.suma);
//* esto se pudiera importar de mejor manera asi = const { factorial, suma } = require(".modulos/matematicas.js")

const fact = moduloMatematicas.factorial(5);
console.log(fact);

const suma = moduloMatematicas.suma(2, 5);// y asi se hace uso de las funciones exportadas
console.log(suma);
//*console.log(moduloMatematicas.eleva); //asi vemos las funciones que hemos importado
//*console.log(moduloMatematicas.multiplica);
//*console.log(moduloMatematicas.suma);
//*console.log(moduloMatematicas.factorial);

//2. Import ES6(ecma script 6) - seria con la palabra clave "importa". Es la manera mas moderna de importar


//console.log(module);//Los archivos por defecto tienen un objeto(global) que se llama module, que al pasarlo por consola nos muestra el archivo module con sus propiedades, dentro de este module podemos pasarle una palabra clave que se llama exports -> module.exports = { y metemos los nombres de las funciones aqui}; ver como se exporta en matematicas