class Persona {
    // Privado -> # - las variable, atributos clases y demas que queremos que sean privadas se definen con #
    // Private -> solo se puede acceder desde dentro de la clase
    #nombre
    #edad

    // Protegidas/protected -> se definen con "_" a el principio
    // protected -> solo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true   
    constructor(nom, edad) {
        this.#nombre = nom
        this.#edad = edad
    }
        saludo() {
            console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad}`)
        }

        obtenNombre() { // Esto seria una funcion GETTER. Creando un metodo que nos devuelva el valor privado es como podemos acceder a cosas privada. nos permite acceder de manera controlada a algun atributo protegido
            return this.#nombre
        }

        #obtenEdad() { // Esto no seria una funcion GETTER ya que es privada, las funciones getter tienen que ser accesibles desde fuera de la clase 
            return this.#edad
        }

        getEdad() {
            return this.#edad
        }

        setEdad(nuevaEdad) { // Setter - Esta seria la funcion setter que nos permite cambiaar el valor de un atributo privado(edad en este caso es el que modificaremos)
            this.#edad = nuevaEdad
        }
    }

    const persona = new Persona("Gorka", 70);


    console.log(persona); // Como las propiedades son privadas no nos aparecen

    //* Para accder a las funciones, propiedades y demas usamos el .

    console.log(persona.nombre);
    persona.saludo();

    console.log(persona.obtenNombre());
    //console.log(persona.obtenEdad()); // No puede acceder a ella ya que la definimos como privada 

    //* Getter -> metodos que nos permiten obtener atributos/metodos privados o protegidos

    const edad = persona.getEdad()

    console.log(edad);

    //* Setter -> metodos que nos permiten cambiar el valor de algun atributo privado o protegido
    // si queremos saber la edad de la persona (abria que crear el metodo setEdad en el objeto con antelacion)
    persona.setEdad(34);
    console.log(persona.getEdad());

