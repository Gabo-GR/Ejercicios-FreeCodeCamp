// Se crea un array con los colores que van a rotar
const colorsArray = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
]

// Se seleccionan los elementos del DOM
const button = document.querySelector("button")
const body = document.querySelector("body")
const span = document.querySelector("span")

// Se crea una variable para guardar el color actual
let currentColor = "";

// Se crea una función que cambia el color del fondo
function changeColor() {
    // Se crea una variable para guardar el color aleatorio
    let randomColor;
    // Se crea un bucle que se repite hasta que el color aleatorio sea diferente al color actual
    do {
        // Se selecciona un color aleatorio del array de colores y se guarda en la variable randomColor
        randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
        // Se repite el bucle si el color aleatorio es igual al color actual
    } while (randomColor === currentColor);
    // Se guarda el color aleatorio en la variable currentColor
    currentColor = randomColor;
    // Se cambia el color de fondo del body al color aleatorio
    body.style.backgroundColor = randomColor;
    // Se cambia el texto del span al color aleatorio
    span.textContent = randomColor;
}

// Se añade un evento al botón que llama a la función changeColor
button.addEventListener("click", changeColor)



