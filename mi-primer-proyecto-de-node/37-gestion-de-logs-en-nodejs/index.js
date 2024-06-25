/* Existen diferentes tipos de console, estos son los mas usados, poniendo conconsole. ya no dara todos y podremos escoger
console.log("Hola");
console.info("Mensaje informativo")
console.debug("Mensaje de debug")
console.warn("Mensaje de advertencia");
console.error("Mensaje de error");
*/

// Trabajando con winston

const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' }, //esto es un mensaje predeterminado, se puede quitar sin problema
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });

  logger.info("mensaje informativo logger");
  logger.debug("Mensaje de debug");
  logger.warn("Mensaje de advertencia");
  logger.error("Mensaje de error");
  

/*//* cada tipo de log tiene un nivel =
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};

si usamos info en el campo level tomara solo los logs de info y los que esten en niveles inferiores
como warn y error, si usamos debug en el campo level tomara los debug y todos lo que esten por debajo de este y asi
*/

///// !!!!!!! Lo mejor seria crear una carpeta logger dentro de la carpeta de el proyecto y abrir un archivo .js (puedes llamarlo index.js) en el que haremos este codigo/logger y para poder usarlo desde cualquier otro archivo de el proyecto debemos importarlo con = "module.exports = logger;" sin las comillas

// y para usarlo en otro archivo (vincularlo) usamos = const logger = require('./logger'

