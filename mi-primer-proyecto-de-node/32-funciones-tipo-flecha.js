// Funciones tipo flecha - funciones anonimas 

const array = [1, 5, 6, 2, 7, 12, 8, 92];

const array2 = array.map(function(valor) { // este codigo sirve para darle el doble de valor a los valores de un array (accedemos a ellos mediante el .map) y copiarlo en otro array nuevo devolviendo el valor original * 2
    return valor * 2
})
console.log(array2);
// Una funcion de tipo flecha que devuelve unicamente un valor (como la de arriba) se puede resumir a esto =
const array3 = array.map((valor) => valor *2)
console.log(array3);


// Para definir una funcion tipo flecha hay que guardarla en una variable
const dobleDelValor = valor => { // = const dobleDelValor = valor => valor *2
    return valor * 2
}

console.log(dobleDelValor(6));
console.log(doble(6));

function doble(valor) {// esta definicion de funciones se puede inicializar donde queramos, a diferencia de las funciones tipo flecha que solo se pueden llamar por debajo de donde la inicializamos
    return valor * 2
}

