// Sets - Son una especie de lista que se importa de manera diferente (arrays son conjuntos ordenados de valores y objetos los sets son conjuntos no ordenados de elementos unicos) Los sets nunca nos van a permitir almacenar valores que ya existen
const array = [1, 2, 3, "hola", 4, 5, 1, 2, { id : 5}, {id: 5}];

const miSet = new Set(array);

console.log(miSet);// Ver diferencia de un set y un array en estos dos console.log. Los sets no repiten elementos que sean de la misma referencia/iguales (mismo valor, no aplica a los objetos, todos los objetos son diferentes)
console.log(array);

//* .add() - añadir valores
miSet.add(9);
console.log(miSet);
miSet.add(2);// aqui no lo añadiria porque ya tiene un valor 2 en el set
console.log(miSet);

//* .delete() - elimina valores de el set
miSet.delete("hola");
console.log(miSet);

//* .has() - ver si nuestro set tiene cierto valor, parecido a el metodo .includes() para ver lo mismo en el array
console.log(miSet.has(4));

//* .size - Con esta propiedad(no es una funcion) podemos conocer el tamaño de un set
console.log(miSet.size);

//* .forEach - Para iterar sobre los valores de un set, igual que en los array
miSet.forEach(valor => {
    console.log(valor);

})
///* para iterar sobre un valor especifico podemos usar un objeto iterador (it_miSet en este caso)
const it_miSet = miSet.values();
console.log(it_miSet);
const arrayFromIterator = Array.from(it_miSet);
console.log(arrayFromIterator);
///* o podemos hacerlo conviertiendo el set en array con el factor de propagacion (...xset)
const ar_miSet = [ ...miSet ];
console.log(ar_miSet[2]);



//* .clear() - elimina todos los valores de el set

miSet.clear();
console.log(miSet);