const entrada = document.getElementById("entrada")
const entrada2 = document.getElementById("entrada2")
const resultados = document.getElementById("resultados_edad")


function ejecutar(){
    let edad = entrada.value 
    console.log("la edad es: ", edad)
    if (edad >= 18) {
       resultados.textContent = "Puedes obtener una licencia de conducir"
    }
    else if (edad >= 16 ) {
        resultados.textContent = "Puedes obtener un permiso de conducir con restricciones" 
    }
    else{
         resultados.textContent = "No puedes conducir"
    }

}

function ejecutar(){
    let valor1 = parseFloat(entrada.value)
    let valor2 = parseFloat(entrada.value)
    let suma = valor1 + valor2
        resultados.textContent = suma;
}


//El operador ternario es una forma compacta de escribir un condicional if - else.

/*let edad = 18;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);*/

let dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Día no válido");
}