function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

document.getElementById('hablar').addEventListener("click", () => {
    decir(document.getElementById("texto").value)
});

