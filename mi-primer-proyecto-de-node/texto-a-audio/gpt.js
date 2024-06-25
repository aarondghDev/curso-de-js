document.getElementById('miParrafo').addEventListener('click', function() {
    var texto = this.innerText;

    var textoSeleccionado = window.getSelection().toString();
    decir(texto);
});

function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
