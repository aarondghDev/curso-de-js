// Iterar los valores de una lista (acceder a los valores de una lista)
const array = ["hola", 2, 5, 90, false, undefined];

//* Esta seria una forma, pero es antigua y poco eficiente
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//* .forEach() -> Forma ES6 (mas eficiente)
array.forEach(valor => {
    console.log(valor);
})

///* podemos sumar los valores de una lista
let suma = 0;
const arrayNums = [3, 6, 2, 77, 4, 55, 67];

arrayNums.forEach(valor =>{// aqui se implementa una funcion callback que seria la variable valor => {...} esta seria la sintaxys
    suma += valor;
    console.log(valor);
})
console.log(suma);

// .find() -> Busqueda de un valor dentro de una lista
const variables = array.find(valor => {
    if (valor === 90) {
        return true
    }
})
console.log(variables);

//* podemos buscar valores dentro de lista de objetos
const listaObjetos = [
    { nombre: "Leira", edad: 35},
    { nombre: "Gorka", edad: 24},
    { nombre: "Miguel", edad: 44},
    { nombre: "Lucia", edad: 82},
    { nombre: "Anaia", edad: 31}
];

/* 
const objeto = listaObjetos.find(0 => { // esto se puede resumir en mesno lineas, ejemplo abajo
    if (o.nombre === "Miguel") {
        retunr true
    }
});
*/
const objeto = listaObjetos.find(o => o.nombre === "Miguel");//Esta seria una manera mas eficiente, cuando la funcion de flechas x => si tiene solo un return se puede quitar las llaves y el return
console.log(objeto.edad);

const { edad } = listaObjetos.find(o => o.nombre === "Miguel");// Esta seria una manera mas eficiente aun
console.log(edad);
