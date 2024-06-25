// Labels

let unidades = 9;
let decenas = 0;
// Asi se definen los labels a los bucles
bucleDecenas: while (true) {
    bucleUnidades: while (true){
        console.log(`El numero actual es: ${decenas}${unidades}`);// con las comillas especiales `` podemos usar las variable con el signo $
        unidades++
        if (unidades === 10) {
            unidades = 0;
            break bucleUnidades;
        }

        if (decenas === 2) {
            break bucleDecenas
        }
    }
    decenas++
}
console.log("salio de el bucle");


