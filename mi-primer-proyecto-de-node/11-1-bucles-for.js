//Bucles For: son los mas utilizados
//inicializacion; comparacion; actualizacion  
for (let i = 0 ;    i < 10;      i++) {//i++ es lo mismo que i = i + 1
    //esto de arriba seria el bulce
    console.log(i);
}

let lista = [1, 2, 3, 4, 5, 6, 7, 10, 12];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}


for (let i = 0; i < lista.length; i++) {
    console.log(lista[i] *2); // Podriamos multiplicar ese resultado de la lista
}

// For of: En el caso de las listas podriamos usar un for of
for (valor of lista) {
    console.log(valor); //seria lo mismo que un for normal pero resumido
}

// ForEach: Tambien lo podemos usar para listas
lista.forEach(valor => {
    console.log(valor);// Lo mismo pero mas facil
})

lista.forEach(valor => {
    console.log(valor * 2);
})

//for...in: sirve para ver los datos de un objeto
let persona ={
    nombre: "Gorka",
    apellido: "Villar",
    edad: 34,
    isDeveloper: true
}

for (let propiedad in persona) {
    console.log(propiedad); // Nos mostrara los nombre de las propiedades
    console.log(persona);//Nos muestra todo
    console.log(persona[propiedad]);// nos muestra solo los valores
}





