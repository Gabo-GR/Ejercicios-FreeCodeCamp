// Define el carácter que se utilizará para construir la pirámide
const character = "#";

// Define el número de filas que tendrá la pirámide
const count = 8;

// Array que almacenará cada fila de la pirámide como una cadena de texto
const rows = [];

// Define si la pirámide será invertida o no
let inverted = true;

// Función que genera una fila de la pirámide con el número de espacios y caracteres correctos en función de la fila 
function padRow(rowNumber, rowCount) { 

// Devuelve una cadena de texto con el número de espacios y caracteres correctos en función de la fila, se utiliza el método repeat para repetir el carácter y el espacio el número de veces necesario para cada fila
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}


// Bucle para generar cada fila de la pirámide
for (let i = 1; i <= count; i++) {
  if (inverted) {
    // Si la pirámide es invertida, añade la fila al inicio del array
    rows.unshift(padRow(i, count));
  } else {
    // Si no es invertida, añade la fila al final del array
    rows.push(padRow(i, count));
  }
}

// Inicializa la variable que contendrá el resultado final
let result = "";

// Bucle para concatenar cada fila en la variable result
for (const row of rows) {
  result = result + "\n" + row;
}

// Imprime la pirámide completa en la consola
console.log(result);