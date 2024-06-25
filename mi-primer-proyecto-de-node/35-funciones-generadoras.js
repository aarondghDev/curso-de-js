// Funcion generadora de id´s

function* generarId() {
    let id = 0;
    while(true) {
        id++      
        if (id === 10) {
            return id
        }
        yield id 
    }
};


function* generarId() {
    let id = 0;
    while(true) {
        id++      
        if (id === 10) {
            return id
        }
        yield id     // el "yield" es una especie de return que no sale de la funcion (el return si sale de la funcion) si no que guarda el valor de id (en este caso) para que cuando se vuelva a llamar a la funcion generarId esta siga desde el valor de id en el que se quedo, asi cuando se vaya llamando a la funcion la primera vez sera una la segunda 2 la tercera 3 y asi, asi conseguimos que el id se incremente a medida que se va llamando a la funcion (pueden ser usuarios nuevos que van creando su perfil por ejemplo)
    }
};

const gen = generarId();// Creamos un objeto que llame a la funcion

console.log(gen); // y gen seria el generador

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());       // se puede ver con el .value o sin el 
console.log(gen.next().value);

// .next() -> funcion comun al trabajar con generadores, sirve para obtener el proximo valor producido por el generador



