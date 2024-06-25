const hTexto = document.getElementById("h-texto")

console.log(hTexto);

hTexto.addEventListener("cambioTexto", evento => {
    console.log(evento.detail);
    hTexto.innerText = evento.detail.texto
    hTexto.style.color = evento.detail.color
})

function cambiarTexto(nuevoTexto, color) {// Si corremos "cambiarTexto("nuevo texto", "red") en la HDD de chorme veremos como cambia el h1 en este caso
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color
        }
    })
    hTexto.dispatchEvent(evento) // .dispatchEvent -descencadena/dispara un evento en un elemento especifico
}