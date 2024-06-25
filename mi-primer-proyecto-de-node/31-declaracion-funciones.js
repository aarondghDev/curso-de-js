// Que son las funciones, como se declaran y como se utilizan
saludar(1);
saludar(false);

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
const array = ["hola", 2, 5, 90, false, undefined];
array.forEach(valor => {
    console.log(valor);
})