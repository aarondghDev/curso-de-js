import { suma, eleva, nombre } from './matematicas.js' // Asi seria como se importa las funciones que nos interesen, tambien se podria importar todo de una vez 
import getAutor, {libro, plato} from './literatura.js'; // Esta es otra manera de importar, si son pocos objetos es mucho mejor esta forma

console.log(libro);

console.log(plato);

let nome = getAutor()

console.log(nome);


const sum = suma(2, 5);
console.log(sum);
console.log(nombre);

// Para importar todo de una vez (parecido a sql)
//import * as moduloMatematicas from './matematicas.js' 

//