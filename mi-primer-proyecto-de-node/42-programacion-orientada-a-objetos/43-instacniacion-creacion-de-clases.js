// Creacion y uso de clases - pueden tener propiedades (nombre, edad, isDeveloper), y funciones(saludo)
class Persona {
    nombre; // nombre; edad; isDeveloper;  lo pudieramos quitar ya que son publicas
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo() {
        console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años`);
    }
}

const nueva_persona = new Persona("Gorka", 34, true);
console.log(nueva_persona);
nueva_persona.saludo();

let numero = 60 // Inicializar
console.log(typeof numero);
let persona_2 = new Persona("Maria", 34, false) // Instanciar
console.log(typeof persona_2);
console.log(persona_2 instanceof Persona); // instanceof -> similar a typeof pero para clases
