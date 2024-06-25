// Que son las funciones, como se declaran y como se utilizan
const nom = "Gorka";

//* saludar("Miguel");
saludar(nom)

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

////// Tener en cuenta el ejemplo de abajo que al llamar a la funcion no cambia el valor de nombre_2, cosa que pasa con las variabes, pero los objetos si que cambian, ver mas abajo

let nombre_2 = "Juan";
console.log(nombre_2);

despedir(nombre_2);
console.log(nombre_2);

function despedir(nombre) {
    nombre = "Diego"
    console.log(`Adios ${nombre}`);
}

////////// aqui al llamar a la funcion nos cambia el valor de el apellido original, ya que dentro e la funcion una linea es cambiar el apellido y esto cambia el original en los objetos, mucho cuidado

let persona = {nombre: "Juan", apellido: "Gonzalez"};
console.log(persona);

saludarPersona(persona);

console.log(persona);

function saludarPersona(objeto) {
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

///// Podemos usar el factor de propagacion (...x) para definir una funcion con parametro indeterminados

function imprimir (...parametros) {
    console.log(parametros);
};
imprimir(1, 2, 3, 8, "hola", { id: 9});

////// Podemos crear una funcion con un con un valor por defecto por si no le pasamos nada

function imprimeNumero(numero = 7) {
    console.log(numero);
}

//// Suma

function suma(...nums) {
    return nums.reduce((a, b) => a + b);
}

const s = suma(1, 2, 3, 4, 5, 8, 9);
console.log(s);


//// Ambito de una funcion - lo que esta dentro de las llaves (variable por ejemplo) no puede ser accedido desde fuera pero lo que esta fuera de la funcion si puede ser accedido desde dentro de esta

let variable = "hola";

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variable_interna = "adios"
    console.log(variable_interna)
    return a * b
};

console.log(variable_interna);

console.log(multiplicar(4, 9));