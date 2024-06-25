// Funciones asincronas -son aquellas que si hacemos una llamada a una base de datos externa puede tardar algo de tiempo ya que no depende de nuestra infraestructura

function miAsinc(){
    // Hace una llamada a una base de datos externa
    // Puede darnos algun error
};

// Promesas - son funciones que pueden o pueden no ejecutarse de manera exitosa
const miPromesa = new Promise((resolve, reject) => { // Promise, resolve y reject son palabras reservada que se usan en las funciones promesa
    // Si esta todo correcto
    if (true) {
        resolve()
    }else {
        reject()
    }
});
///* Para consumir las promesas hay que tener en cuenta que puede fallar, para ello usamos el .catch() para que no de error, y puede salir correctamente y para ello usamos el .then(), el .finally() no se si hay que usarlo siempre pero bueno este se ejecuta siempre
miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))