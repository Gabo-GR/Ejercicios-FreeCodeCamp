document.getElementById('check-btn').addEventListener('click', function() {
    event.preventDefault();
    var inputValue = document.getElementById('text-input').value;
    if (!inputValue) {
        alert('Please input a value');
    } else if (itsPalindrome(inputValue)) {
        document.getElementById('result-text').textContent = inputValue + ' is a palindrome';
    } else {
        document.getElementById('result-text').textContent = inputValue + ' is not a palindrome';
    }
});

document.getElementById('check-btn').click();
console.log(document.getElementById('result-text').textContent); // "_eye is a palindrome"

// Función que verifica si una cadena es un palíndromo
function itsPalindrome(str) {
    // Elimina los caracteres no alfanuméricos y los convierte a minúsculas
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Invierte la cadena y la compara con la cadena original
    let reversedStr = cleanedStr.split('').reverse().join('');
    // Retorna true si son iguales, false si no
    return cleanedStr === reversedStr;
}