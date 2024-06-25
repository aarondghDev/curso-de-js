// Comparacion de dos listas 
// .every() -> nos dira si todos los componentes de una lista cumple cierta condicion, tambien hay que pasarle una funcion de callback ( .every (a => {})

const array = [4, 6, 7, 8, 45, 77, -85, 41, -4, -1, 9];

const resultado = array.every(valor => {
    if (typeof valor === "number") {
        return true
    }else{
        return false
    }
})
console.log(resultado);

//* lo que seria lo mismo que arriba pero resumido, esta es la mejor manera de trabajar con estos metodos (siempre que se pueda), la de arriba es mas para ilustrar y cosas mas complejas
const resultado2 = array.every(valor => valor > 0);
console.log(resultado2);


// Comparacion de listas
const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

console.log(ar1 === ar2); // No se pueden comparar directamente, hay que implementar una funcion como podria ser la siguiente

const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}
console.log(compararArrays(ar1, ar2)); // !!!!!!!!!

const ar3 = [1, 2, 3, 5];
 console.log(compararArrays(ar1, ar3));