// Inheritance/Herencia - "extends" palabra clave para que una clase herede atributos y metodos de otra
class Persona {
    constructor(nom, edad, isDeveloper) {
        this.nombre = nom
        this.edad = edad
    }
        saludo() {
            console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad}`)
        }
}

class Desarrollador extends Persona { // eje de como se hereda una clase
    constructor(nombre, edad, lenguaje) {
    
        super(nombre,edad) // si queremos añadir mas elementos a esta clase hija debemos pasarle un constructor con los mismos parametros de el contructor padre mas los parametros nuevos, luego con la palabra reservada "super" le pasamos los parametros de el contructor padre para que asi nos deje usarlos
        this.lenguaje = lenguaje 
    }
//Asi podriamos instanciar personas que tambien son desarrolladores

        saludo() { // Override al saludo padre
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`);
        }// Aqui estariamos aplicando el plomorfismo dandole multiples posibilidades a la clase padre Personas a traves de la herencia
    

}

const nuevodev = new Desarrollador("Gorka", 34, "Java Script")

console.log(nuevodev); 
console.log(nuevodev.saludo()); 
nuevodev.saludo()


// Polimorfismo - poli -> muchos mosfismo -> formas. Estas clases sirven para dar muchas formas a una clases para que pueda servir a diferentes tipos de necesidades