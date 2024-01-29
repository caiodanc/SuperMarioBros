const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const toad = document.querySelector(".toad-running")


function showform() {

    mascara.style.visibility = "visible"
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    toad.style.visibility = "hidden"
    toad.style.right = "-400px"
}

function hideform() {

    toad.style.visibility = "visible"
    toad.style.right = "100%"
    toad.style.transform = "translateX(-50%)"
    form.style.transitionDelay = "1.1s";
    form.style.top = "30%"
    form.style.left = "-300px"
    mascara.style.transitionDelay = "2s";
    mascara.style.visibility = "hidden"
}











