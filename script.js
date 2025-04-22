// Selección por ID
const titulo = document.getElementById('miTitulo');

// Selección por clase
const elementos = document.getElementsByClassName('miClase');
let boton = document.getElementById("miBoton");
let boton2 = document.getElementById("miBoton2");
let boton3 = document.getElementById("miBoton3");
let caja = document.getElementById("miCaja");

let boton4 = document.getElementById("nuevodiv")
let boton5 = document.getElementById("borrardiv")

boton4.addEventListener("click", function() {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.textContent = 'Soy un nuevo DIV';
    nuevoDiv.classList.add("nuevodiv2")
    document.body.appendChild(nuevoDiv)
});

boton5.addEventListener("click", function() {
    const elementoParaEliminar = document.querySelector('.nuevodiv2');
    elementoParaEliminar.remove();
});

boton2.addEventListener("click", function() {
    caja.style.backgroundColor = "pink"
});

boton3.addEventListener("click", function() {
    caja.style.backgroundColor = "grey"
});

console.log(titulo);

console.log(elementos);

// Seleccionar un elemento


// Agregar un evento de clic
boton.addEventListener("click", function() {
    alert("¡Botón clickeado :D!");
});


document.addEventListener("keydown", function(evento) {
    console.log("Tecla presionada: " + evento.key);
});

//eventos de raton



//caja.addEventListener("mouseover", function() {
   //// caja.style.backgroundColor = "pink";
//});

//caja.addEventListener("mouseout", function() {
    ///caja.style.backgroundColor = "white";
//});//

//formularios

const formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();  // Evita que el formulario se envíe
    alert("Formulario enviado");
});
   
//modificar contenido
boton.addEventListener("click", function() {
    alert("¡Botón clickeado :D!");
});

// Cambiar el texto de un elemento
titulo.textContent = 'Nuevo Título Modificado'

// Cambiar el contenido HTML
parrafo.innerHTML = 'Párrafo Modificado';

