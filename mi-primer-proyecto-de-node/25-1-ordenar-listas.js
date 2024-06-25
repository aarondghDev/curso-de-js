// .sort() -> MODIFICA EL ARRAY
const array = [2, 5, 9, 3, 24, 45, 12, 33];

console.log(array);

array.sort((a, b) => {    //a este metodo (.sort()) hay que pasarle una funcion(callback = (a, b) => {}) , donde a representa el elemento anterior y b el siguiente
                        // Esta funcion es obligatorio que retorne un valor numerico (positivo negativo o c), si pasa un numero negativo sig que a tendra un indice menor que b
    return -1           // Si le pasamos un -1(o cualquier numero negativo) lo que hara sera invertir el orden, porque a siempre tendra un indece menor que b 
});
console.log(array);

//* Si queremos ordenas los valores de el array de menor a mayor 
array.sort((a , b) => {
    if (a < b) {
        return -1123
    } else if (a > b) {
        return +132443
    } else { // a === b
        return 0
    }
})
console.log(array);


//*Tambien se podria hacer asi 
array.sort((a, b) => {
    if (a > b) {
        return 1
    }
})
console.log(array);

array.sort((a, b) => {
    if (a > b) {
        return -1
    }
})
console.log(array);

//*Ordenar unicamente arrays numericos
const arrayNumerico = [4, 1, 5, 66, 7, 54, 35, 52];

arrayNumerico.sort((a, b) => b - a);// otra forma de hacerlo mas corta

console.log(arrayNumerico);

////* Interesante en array de objetos
const listaObjetos = [
    { nombre: "Leira", edad: 35},
    { nombre: "Gorka", edad: 24},
    { nombre: "Miguel", edad: 44},
    { nombre: "Lucia", edad: 82},
    { nombre: "Anaia", edad: 31}
];

listaObjetos.sort((a, b) => {
    if (a.edad < b.edad) {
        return -1
    } else if (a.edad >b.edad) {
        return +1
    } else {
        return 0
    }
})
console.log(listaObjetos);

listaObjetos.sort((a, b) => a.edad -b.edad);// Seria lo mismo que lo de arriba
console.log(listaObjetos);