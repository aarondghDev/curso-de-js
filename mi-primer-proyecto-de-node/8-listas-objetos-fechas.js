//Listas (tambien llamados arrays o arreglo)
const list = [1, "hola", true, undefined, null]; // puede ser de cualquier tipo
const list2 = new Array (2, "hola", true, undefined, null)
const list3 = new Array (3); //asi le decimos el numero de elementos
list3[0] = "soy el pimer elemento, index 0";//podemos modificar los elementos despues de crear la lista asi
const list4 = [list, list2, list3]; //lista de listas

console.log(list);
console.log(list2);
console.log(list3);
console.log(list4);

//objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "xiaomi",
    white: false,
    contactos: ["gorka", "martin", "raul"],
    tarjeta: {
        marca: "sandisk",
        almacenamiento: 32
    }
}

console.log(movil.contactos);
console.log(movil.tarjeta);
console.log(movil.tarjeta.marca);

movil.anyo = 2019 // luego de crear el objeto podemos definir nuevos atributos
console.log(movil.anyo)

movil.marca = "samsung"; // podemos modificar atributos ya definidos en un objeto ya creado( y de diferentes tipos)
movil.tarjeta.almacenamiento = "ssd";

console.log(movil.marca);
console.log(movil.tarjeta.almacenamiento);

//Fechas - es complejo pero existen librerias que facilitan el trabajo una es "moment.js"
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);//aqui toma el numero que le damos en milisengundos y lo va a restar desde la fecha mas antigua registrada por el programa a la actual
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2020, 10, 15);
console.log(fecha_valores);

//podemos obtener el dis el mes o el año de una variable con fecha

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;// el mes empieza a contar por el 0 (enero seria 0 y asi)
const anyo = ahora.getFullYear();

console.log(dia, mes, anyo);// podemos imprimir 3 fechas en un solo comando