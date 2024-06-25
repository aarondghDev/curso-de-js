// Trabajando con objetos
const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Gonzalez",
    isDeveloper: true,
    libros_favoritos: ["El metodo", "El codigo de la manifestacion"],
    "4-juegos": [1, 2, 3, 4],// sin las comiilas no pudieramos poner numero ni -
};

console.log(obj.id);         // aqui vemos dos maneras distintas de llamar a una propiedad de un objeto(Esta es la manera mas comun)
console.log(obj["4-juegos"]);// esta siempres tendra que llamarse asi ya que al tener 4 y - tiene que estar entre ""



// Podemos definir una propiedad con variables y podemos llamar a propiedad a partir de variables creadas con anterioridad (Es decir podemos acceder a propiedades de un objeto o no a traves de variables)
const prop = "isDeveloper";
console.log(obj[prop]);

// Al crear un objeto a partir de otro, estos comprartiran el espacio de memoria (no se crea un duplicado en otra parte de la memoria, usa esos mismos espacios de memoria con los valores asignados) y si hacemos algun cambio en uno de los objetos afectara a el otro por igual. Esto solo sucede con los objetos
obj2 = obj
console.log(obj2);

obj2.nombre = "Iñigo";

console.log(obj2.nombre);

let val1 = 4;
let val2 = val1;

val2 = 6;
console.log(val1);
console.log(val2);

//* Si queremos hacer un duplicado de un objeto que este en otra parte de la memoria debemos usar el factor de propagacion (...xobjeto)
const obj3 = { ...obj }
console.log(obj3.nombre);

obj3.nombre = "Gorka";
console.log(obj3.nombre);
console.log(obj.nombre);// aqui ya vemos como el objeto3 no afecta el objeto ya que no comparten espacio de memoria

// Como ordenar listas de obetos en funciones de una propiedad con .sort() (!Recordar que este metodo muta los valores de los arrays de la lista)

const listaPeliculas = [
   { titulo: "lo que el viento se llevo", anyo: 1939 },
   { titulo: "Titanic", anyo: 1997 },
   { titulo: "Moana", anyo: 2016 },
   { titulo: "El efecto mariposa", anyo: 2004 },
   { titulo: "Ted", anyo: 2012 }
];

console.log(listaPeliculas);

listaPeliculas.sort((a, b) => a.anyo - b.anyo); // Aqui la estariamos ordenando por año
console.log(listaPeliculas);
