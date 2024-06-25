// .some() -> es igual que el .every() solo que en lugar de que todos los elementos cumplan cierta condicion, te devolvera un true si al menos uno de los elementos cumple la condicicon

const array = [3, 7, 44, 55, 42, 1, 67, 95, 5554, -5];

const res = array.some(valor => valor < -3);
console.log(res);

const resultado = array.some(valor => {// Esta seria lo mismo que arriba pero la forma larga
    if (valor < -6) {
        return true
    }else{
        return false
    }
})
console.log(resultado);

///* Podemos tambien con el .some() verificar si un valor esta en el array
const especifico = array.some(valor => valor === 55);
console.log(especifico);


///* Tambien podemos ver si un valor esta en un array de unobjeto
const listaObjetos = [
    { nombre: "Leira", edad: 35},
    { nombre: "Gorka", edad: 24},
    { nombre: "Miguel", edad: 44},
    { nombre: "Lucia", edad: 82},
    { nombre: "Anaia", edad: 31}
];

const existeMiguel = listaObjetos.some(persona => persona.nombre === "Miguel");
console.log(existeMiguel);

///* Como obtener una lista a partir de un objeto iterable
const str = "Hola soy Gorka";
console.log(str[5], str[6], str[7]);

const ar_str = Array.from(str);// asi obtenemmos una lista a partir de una objeto iterable
console.log(ar_str);

const set = new Set([2, 3, "hola", 4]);
const ar_set = Array.from(set);
console.log(ar_set);

// .keys(O - btener un iterable de todos los indices de nuestro array
const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys);
