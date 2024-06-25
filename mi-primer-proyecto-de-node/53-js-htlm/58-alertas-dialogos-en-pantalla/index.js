const boton = document.querySelector("#btn")

console.log(boton);

boton.addEventListener("dblclick", () => { // o click para contar un solo click
    //alert("Se ha hecho click"); // Mensaje de alerta
    //confirm("¿Estas de acuerdo?") && console.log("OK"); // Pop up para confirmar o rechazar && que pase por pantalla ok si aceptaron

    //confirm("¿Estas de acuerdo?") //esot sirve para pasar por pantalla si acepto o rechazo
    //? console.log("ok")
    //: console.log("no")

    const respuesta = confirm ("¿Seguro?")
    if (respuesta) {
        console.log("Estas de acuerdo");
    } else {
        console.log("No estas de acuerdo");
    }
}) 


const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cual es tu nombre?") // Prompt - hace una pregunta y te da un input para llenar
    if (nombre) {
        console.log("Tu nombre es " + nombre);
    } else {
        console.log("No has introducido nada");
    }
   // console.log("Tu nombre es " + nombre);
})


const lista = [{
    nombre: "Gorka",
    edad: 34
}, {
    nombre: "Julen",
    edad: 21
}, {
    nombre: "Amaia",
    edad: 30
}]

console.table(lista) // console.log(lista); - tambien se puede con esto pero con el .table es mucho mejor y si lo hacemos desde las HDD de chrome podemos pasar console.table(la lista que qeuramos ver) y lo veremos muchos mejor