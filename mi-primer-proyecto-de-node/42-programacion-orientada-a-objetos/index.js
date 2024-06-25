const persona = {
    nombre: "Gorka",
    edad: 34,
    isDeveloper: true,
    saludo: function() {
        console.log("Hola");
    }
}
const saludar = persona.saluda

persona.saludo()
console.log(saludar);
console.log(persona.saludo());
console.log(persona);

const otra_persona = {
    nombre: "Miguel",
    edad: 15,
    isDeveloper: false,
    saludo: function() {
        console.log("hola otra persona");
    }
}

// Imaginemos que queremos crear multiples personas, tendriamos que escribir muchas veces lo mismo y gastariamos mas recursos de los necesarios, en vez de estar creando cada persona, podemos crear una funcion que cree personas

const creaPersona = (nombre, edad, isDeveloper) => {// Es una funcion tipo flecha
    return {             // Aqui le diremos que devuelva el objeto
        nombre: nombre, // podriamos abreviar estas lineas, cuando los nombres son iguales basta con poner = nombre
        edad: edad, // puede abreviarse a edad
        isDevelpoer: isDeveloper, //puede abreviarse a isDeveloper
        saludo: function() {
            console.log("Hello");
        }

    }
}

const nueva_persona = creaPersona("Juan", 23, true);
console.log(nueva_persona);

const nueva_persona2 = creaPersona("Maria",34, false );
console.log(nueva_persona2);

// Hay una mejor manera de afrontar este problema lo vemos en la siguiente sesion
