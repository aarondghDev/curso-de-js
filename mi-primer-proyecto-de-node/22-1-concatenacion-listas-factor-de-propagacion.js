// .concat(xlista)  -> Como unir dos listas 

const lista1 = ["hola", 2, false, null];
const lista2 = ["adios", 8, true, undefined];

console.log(lista1.concat(lista2));
console.log(lista1);// Esto no cambia el valor de la lista 1

const lista3 = lista1.concat(lista2)
console.log(lista3);// Si queremos guardar el resultado de las dos listas concatenadas lo hacemos asi

//...xlista -> Como unir dos listas con el metodo de propagacion(este metodo consiste en agarrar una lista y propagar sus valores)
console.log(...lista3);//-> este es el metodo de propagacion
console.log(lista3);// diferencia, en esta nos da la lista, en la de arriba los valores
console.log(lista1, lista2);// !! se unen en formato de lista, estan separadas

const lista4 = [...lista1, ...lista2]
console.log(lista4);// !! toma los valores propagados de las dos listas y los une a una lista