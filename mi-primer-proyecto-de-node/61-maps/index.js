let map;
let marker;
let position;
function initMap() { // si nos da error de que initMap no esta creado podemos usar - window.initMap = function() {
  const posicion = {lat: 24.4161593, lng: -122.0812166}

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });
  marker = new google.maps.Marker({
    position: posicion,
    map,
    title: "Posicion inicial"
  })

// Obtener la geolocalizacion
 //marker.setPosition ({lat, lng})
    geoPosiciona()
  }

  function geoPosiciona() {

    if (navigator.geolocation){ // Esto es porque algunos navegadores no tienen geolocation y asi si no tienen se correra el else
    const geoLoc = navigator.geolocation
    const options =  { timeout: 5000 }
    const watchPos = geoLoc.watchPosition(onSuccess, onError, options);

   // esto nos ira pasando nuestra ubicacion cada cierto tiempo que le indiquemos (el centraMapa y onError las funciones de abajo para tener un codigo mas limpio y no tener todo aqui), el timeout (en la variable "optiones" seria el que indique cada cuanto se ira pasando la ubicacion, son milisegundos, si no logra recargar la localizacion, se ejecutara el error
    } else {
      alert("Tu navegador no admite geolocalizacion")
    }
  }

  function onSuccess(position) {
    centraMapa(position);
  }

  function centraMapa(position) {  
    /*function centraMapa(position) {
    if (position && position.coords) {
      window.nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(nuevaPos);
    } else {
      console.error("No se pudo obtener la posición del usuario.");
    }
  } esta podria ser otra forma de ponerlo*/
    const nuevaPos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    console.log(nuevaPos)
    if (marker)  {
      marker.setPosition(nuevaPos);
      map.setCenter(nuevaPos)
    } else {
      console.error('Marker is not defined.');
    }
  }


  
  function onError(error) {
    console.log(error);
  }