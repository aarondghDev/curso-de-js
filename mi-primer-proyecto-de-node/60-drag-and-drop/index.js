const parrafos = document.querySelectorAll(".parrafo") // Esto nos obtendra todos los elementos de el .html que tengan la clase "parrafo"
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        //console.log("Inicio de arrastre");
        console.log(`Estoy arrastrando el parrafo ${parrafo.innerText}`);
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        console.log(`He terminado de arrastrar ${parrafo.innerText}`);
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault() // Esto lo ponemos para prevenir el comportamiento por defecto, que no nos deja usar la funcionalidad para poder usarla, por el dragover
        //console.log("Drag Over");
        event.dataTransfer.dropEffect = "move" // aparte de "move" podemos usa "link" "copy" y "none"
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id")
        //console.log("Parrafo id: ", id_parrafo);
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo) // Esto es lo que hace que se cambie de seccion al solatr el drag
    })
})
