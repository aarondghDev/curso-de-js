// Trabajar con metodos mas avanzados
// .map() .filter() .reduce()

const array = ["San Sebastian", "Madrid", "Barcelona", "Alicante", "Bilbao"];

const val = array.forEach(v => {
    console.log(v);
    return 4
});
console.log(val);

//* .map() 
const newArray = array.map(valor => { // este codigo lo que haria seria concatenar los valores con "hola"
    return valor.concat("Hola")
});
console.log(newArray);

const newArray2 = array.map((valor, indice) => {// Aqui estamos dandole el indice +1 de cada valor a cada valor
    return `${indice + 1} - ${valor}`
});
console.log(newArray2);

const newArray3 = array.map((valor, indice) => `${indice + 1} - ${valor}`);
console.log(newArray3);// esta seria lo mismo que arriba pero resumida


//* .filter - filtra de una lista u objeto
const listaObjetos = [
    { nombre: "Leira", edad: 35},
    { nombre: "Gorka", edad: 24},
    { nombre: "Miguel", edad: 44},
    { nombre: "Lucia", edad: 82},
    { nombre: "Anaia", edad: 31}
];
const personasMayores = listaObjetos.filter(obj => {
    if (obj.edad > 30) {
        return true
    } else {
        return false
    } 
});
console.log(personasMayores);

const personasMayores2 = listaObjetos.filter(obj => obj.edad > 30);//esto es lo mismo que la de arriba pero resumidsa
console.log(personasMayores);

const listaSinMiguel = listaObjetos.filter(obj => obj.nombre !== "Miguel");//podemos filtar por lo que no queremos que aparezaca
console.log(listaSinMiguel);


//* .reduce -> con el podemos sumar 
const valores = [3, 56, 23, 5, 90, 100];
                          //valor acumulado - valor actual - 
const suma = valores.reduce((     ant      ,      cur      ,    i     ,  arrayOriginal) =>{
    console.log(ant);//siempre sera el primer elemento de el array y en una suma sera el que ira acumulando ese valor sumado por el siguiente y asi
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return ant + cur// asi es como lo sumamos el ant + cur ( el valor acumlado mas el valor actual)
})
console.log(suma);