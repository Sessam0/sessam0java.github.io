
// Ejemplo de bucle for
let total = 0

for (let i = 0; i < 50; i++) {
    console.log('Iteración número: ' + i);
    total += i 
}

console.log("la suma de los 100 numeros es: " , total)

// Ejemplo de bucle while
let contador = 0;
while (contador < 5) {
    console.log('Contador: ' + contador);
    contador++;
}

// Ejemplo de bucle do...while
let contador2 = 0;
do {
    console.log('Contador: ' + contador);
    contador++;
} while (contador < 5);

// Ejemplo de bucle for...of
let numeros = [100, 200, 300];
for (let numero of numeros) {
    console.log('Número: ' + numero);
}

// Ejemplo de JavaScript Asincrónico con setTimeout
console.log("Inicio");
setTimeout(() => {
    console.log("Tarea Asincrónica");
}, 2000);
console.log("Fin");

// Ejemplo de async/await
const tabla = document.getElementById("tabla")

async function fetchData() {
    let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await respuesta.json();
    for(let valor of data){
        console.log(valor["title"])
        const tablerow = document.createElement("tr")
        const tabletitle = document.createElement("td")
        const tablebody = document.createElement("td")
        tabletitle.textContent = valor.title
        tablebody.textContent = valor.body
        tablerow.appendChild(tabletitle)
        tablerow.appendChild(tablebody)
        tabla.appendChild(tablerow)


    }
}

fetchData();