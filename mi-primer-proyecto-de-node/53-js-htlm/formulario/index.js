const f = document.getElementById("formulario") // Aqui estariamos vinculando " <form action="/" method="post" id="formulario">" mediante el id (esto esta en el archivo html)

console.log(f);

f.addEventListener("submit", evento => {
    console.log(evento);
    evento.preventDefault() //Esto hace que bloquee el evento por defecto (de los input de type submit en este caso)
})