// $("selector").accion()


//$(document).ready(() => { })// = $(() => {  })    son lo mismo pero resumido

// Para hacer ref a un elemento en especifico hay que identificarlo mediante el id en el .html

/*$(() => { 
    // Selectores:
    // id="1" => "#1"
    // class="1" => ".1"
    $("#1").hide()
    $(".1").hide()
})*/
$(() => { // hay que encerrar todo aqui ya que esto es lo que ghace ref a el documento(.html)/pagina
$(".hide-btn").click(() => { // aqui le estamos diciendo que cuando hagamos click en el buton hide desaparesca el h1 
    //$("h1").hide()
    $("h1").fadeOut()
})
$(".show-btn").click(() => {
    //$("h1").show()
    $("h1").fadeIn()
})

$("li").dblclick(() => {
    $("h1").css({ color: "red"}) // Esto le cambia el color a el h1
})

$(".new-element").click(() => {
    //$("ul").append("<li>New Element</li>") //añade elementos a el final
    $("ul").prepend("<li>New Element</li>") //añade elementos al principio
})

$("li").mouseenter((elem) => {
    console.log("Ha entrado en el raton (hover)");
    elem.target.style.color = "blue"
})
})

$("li").mouseleave((elem) => {
    console.log("Ha salido de el raton(nohomo)");
    elem.target.style.color = "black"
})