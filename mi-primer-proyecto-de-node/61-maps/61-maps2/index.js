function initMap() { // esto tambien podria hacerser - window.initMap = function() {...}  podemos intentarlo asi si nos da un error de que initMap no esta creado

    const posicion = {
        lat: -25.363,
        lng: 131.044
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })

    const marker = new google.maps.Marker({
        position: posicion,
        map, // -> = map: map,
        title: "Posicion inical"
    })

}
