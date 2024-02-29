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