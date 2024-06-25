// Casos muy especificos - Break(se salta todo), continue( vuelve a el inicio)
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {

    if (lista[i] === 3) {// el bucle se saltaria el 3
        continue;
    }

    console.log(lista[i]);

    if (lista[i] > 5) { // el bucle se frenaria con el valor 5
        break; 
    }
}








// Cual es el ambito de un bucle