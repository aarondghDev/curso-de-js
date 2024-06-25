// Carga y sobrecarga de funciones

function saludar(params) {
    hola()
}

function hola(params) {
    console.log("hola soy la funcion hola");
}

saludar()

// Pasos que toma el interprete sobre el codigo
// 1. Cargar la funcion global() (esto es lo que hace antes de leer nada)
// 2. saludar() global() (luego carga la funcion como tal que es saludar())
// 3. hola() saludar() global() (va iterando con las funciones en funcion de lo que diga el codigo)
// 4. saludar() global() (cuando termina la funcion "hola" ya la quita de la carga )
// 5. global() (al ejecutar la funcion saludar tambien la quita de la carga)

/// Esto se hace asi para optimizar la utilizacion de memoria por parte de JS


// sobrecarga - se genera al sobresaturar las llamadas a esta funcion que seria infinita si la inicializamos(recursiva()), esto haria que llegue al maximo de call stack y de error
function recursiva() {
    recursiva()
}