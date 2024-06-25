// Este es el archivo que vamos a utilizar

const nombre = "Gorka" // Ver que nos da error por no usar ; esto es asi por la configuracion en el archivo .eslint.json

// En esta parte quiero tener comillas simples (quiero que me desactive la regla de comillas dobles)

/* eslint-disable */ // A partir de aqui se desactivan las reglas

const nombre2 = 'Maria' // Nos daria error por las '' pero como desactivamos las reglas no nos da el error

/* eslint-enable */ // Y apartir de aqui siguen las reglas


/// Si queremos deshabilitar una sola linea seria

const nuevoString = 'Maria2' // eslint-disable-line


const p = 'Maria2'

