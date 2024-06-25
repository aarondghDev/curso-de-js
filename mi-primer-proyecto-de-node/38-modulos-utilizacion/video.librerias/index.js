// Instalar axios para hacer llamadas a servicios externos


import axios from "axios" // aqui estariamos importando los metodos de axios a este archivo

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')// Aqui va la url que queramos chequear (para el curso la sacamos de pokeApi)
  .then(function (response) {
    // handle success
    console.log(response);
    console.log(response.data);// Esto nos mostraria los datos como tal
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
// Esto lo corremos usando el comando "npm start" en la terminal dentro de la carpeta padre de este archivo, esto nos devolvera la respuesta que ha obtenido axios de el url, si queremos acceder a la informacion debemos decirle (en el .then{}) console.log(response.data);
