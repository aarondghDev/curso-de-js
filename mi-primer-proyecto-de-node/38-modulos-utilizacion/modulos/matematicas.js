function suma(a, b) {
    return a + b
}

function multiplica(a, b) {
    return a * b
}

function eleva(a, b) {
    return a ** b
}

function factorial(a) {
    // Factorial de 5: 5 * 4 * 3 * 2 * 1
    let factorial = 1;
    for (let i = 2; i <= a; i++) {
        factorial *= i
    }
    return factorial
}

module.exports = {// esta seria la manera para poder exportas las funciones "module.exports = {nombre de las funciones}" las estariamos haciendo publicas
    suma,
    multiplica,
    eleva,
    factorial
}

//console.log(module);//Los archivos por defecto tienen un objeto(global) que se llama module, que al pasarlo por consola nos muestra el archivo module con sus propiedades, dentro de este module podemos pasarle una palabra clave que se llama exports -> module.exports = { y metemos las funciones aqui}; ver como se exporta en matematicas