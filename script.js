// Este es un ejemplo de JavaScript
//alert("¡Hola, Mundo!");

// Un ejemplo de variable
let nombre = "Ana";
let nota_mision1 = 100
let nota_mision2 = 70
let nota_mision3 = 90
alert(nombre);

// Un ejemplo de función
function saludar() {
    alert("¡Hola a todos!");
}
saludar();

function saludar(nombre, apellido) {
    console.log("¡Hola, " + nombre + " " + apellido + "!");
}

saludar("Ana", "Parra");  // Imprime "¡Hola, Ana!"

function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);
console.log(resultado);  // Imprime 8