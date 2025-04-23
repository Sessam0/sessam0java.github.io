let boton1 = document.getElementById("Agregar");
let boton2 = document.getElementById("Eliminar");
let boton3 = document.getElementById("Cambiar");
let boton4 = document.getElementById("Ocultar");
let caja = document.getElementById("miCaja");
let caja2 = document.getElementById("miCaja2")


function agregar(){
    // Agregar una clase
    caja.classList.add("highlight");
}

function agregar(){
    // Agregar una clase
    caja2.classList.add("highlight");
}

function eliminar(){
    // Eliminar una clase
    caja.classList.remove("highlight");
}

function eliminar(){
    // Eliminar una clase
    caja2.classList.remove("highlight");
}
function cambiar2 (){
    caja.style.display= "block"
    caja2.style.display= "none"
}
function cambiar(){
    caja.style.display= "none"
    caja2.style.display= "block"

}



