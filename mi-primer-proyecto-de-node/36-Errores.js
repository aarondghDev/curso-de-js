// Errores -> hay que gestionar y llevar un control de nuestro codigo
const miFuncion = val => {
    return 2 * val
};

console.log(miFuncion("ala!"));// Esta funcion da un error NaN(not a number) para evitar que nos de ese error podemos hacer lo siguiente

const miFuncion2 = val => { 
    if (typeof val === "number") { // Con un if arreglamos este problema, una manera bastante antigua pero puede solucionar
        return 2 * val
    }
    return false
};

console.log(miFuncion2("ala!"));

// Existe una palabra clave que se utiliza a la hora de lanzar errores es "throw" que es la manera estandar para lanzar errores

const miFuncion3 = val => { 
    if (typeof val === "number") {
        return 2 * val
    }
    throw new Error("El valor debe ser de tipo numero")
};

 //const elDoble = console.log(miFuncion3("ala!"));  esta comentado porque da un error y no deja ver las demas lineas


/// y la mejor manera de gestionar los errores es con el try {}(el try seria lo que tiene que intentar correr), el catch {}(el catch seria si no corre el try pasa a el catch y no salta un error como tal) y el finally{}(se correra siempre)

const numero = 8;
try {
    // Codigo que puede fallar
    console.log(("Esta ejecutandose de manera correcta hasta aqui"));
    const doble = miFuncion3("hola"); // si aqui le pasamos un valor incorrecto, es cuando nos correra el catch 
    console.log(doble);
} catch(e) {
    // En caso de fallar, quiero que ejecutes
    console.log(`El valor de e es: ${e}`); // Aqui podremos ver como agarra el error que le dijimos en la funcion miFuncion3 (throw new Error("El valor debe ser de tipo numero")) y nos da el texto
    console.log("ERROR");
} finally {
    console.log("Esto se va a ejecutar siempre");
}


/* Internal error - lo lanza el interprete cada que que hay un problema interno, como por ejemplo si hay una sobre carga por una funcion el interprete da un InternalError;
SyntaxError - salta cada vez que hay un fallo de sintaxis
 TypeError - Uno de los mas comunes, por ejemplo que le pasamos a una funcion ya creada un booleano cuando esta esperando un int
 RangeError - Al tratar de acceder a alguna posicion y se esta sobrepasando de los numero de elementos, por ejemplo un array de 10 elementos y estamos acceder a el 12
 ReferenceError - suele lanzarse cuando no existe esa referencia que estamos haciendo referencia*/