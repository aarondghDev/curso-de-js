//LocalStorage
//* ocalStorage.setItem("nombre", "Gorka") // Esto nos creara una valor en el local storage, en las HDD en la pestaña application

///////////console.log(localStorage.getItem("nombre"));

//////////localStorage.setItem("persona3", JSON.stringify( {nombre:"Gorka", edad: 30})) // podemos crear objetos tambien
//* JSON.stringify - Convierte un objeto/array en string
///////////console.log(localStorage.getItem("persona")); // Asi lo vemos en modo string
///////////console.log(JSON.parse(localStorage.getItem("persona"))); // JSON.parse - Convierte un objeto/array convertido a string atraves de stringify en un objeto de js. Asi lo vemos en modo objeto

//* Como eliminar un item de el localStorage

//////////////localStorage.removeItem("nombre")



/// Session storage - Trabaja mas o menos igual que local storage

///////////sessionStorage.setItem("nombre-session", "Gorka")

///////////sessionStorage.setItem("persona3", JSON.stringify( {nombre:"Gorka", edad: 30})) // podemos crear objetos tambien


/// Cookies - no son tan sencillas de trabajar
document.cookie = "nombreCookie=GorkaCookie" // Asi podemos crear una nuev cookie

document.cookie = "nombreCaducidad=Nombre; expires=" + new Date(2024, 5, 1).toUTCString()

console.log(document.cookie);



