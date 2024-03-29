// JavaScript para gestionar el cambio de estado
var currentState = 1;

function toggleState() 
{
    var button = document.getElementById('toggleButton');

    // Cambiar el estado y el texto del botón
    currentState = (currentState % 3) + 1;
    button.innerHTML = currentState;

    // Actualizar la clase para cambiar el estilo
    button.className = 'toggle-button state-' + currentState;
}

// Obtener todos los botones
const buttons = document.querySelectorAll('.button');
// Obtener el elemento de pantalla
const screen = document.getElementById('screen');

// Iterar sobre cada botón
buttons.forEach(button => {
    // Agregar un evento click a cada botón
    button.addEventListener('click', () => {
        // Obtener el texto del botón presionado
        const buttonText = button.textContent;
        // Mostrar el texto en la pantalla
        screen.value += buttonText;
    });
});