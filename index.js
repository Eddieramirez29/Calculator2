// JavaScript para gestionar el cambio de estado
var currentState = 1;

function toggleState() 
{
    let button = document.getElementById('toggleButton');

    // Cambiar el estado y el texto del botón
    currentState = (currentState % 3) + 1;
    button.innerHTML = currentState;


    // Cambiar el color de fondo del body
    cambiarColorFondo(currentState);
}

// Función para cambiar el color de fondo del body
function cambiarColorFondo(estado) {
    switch (estado) {
        case 1:
            document.body.style.backgroundColor = 'hsl(222, 26%, 31%)'; // Rojo
            break;
        case 2:
            document.body.style.backgroundColor = 'hsl(0, 0%, 90%)'; // Gris claro
            break;
        case 3:
            document.body.style.backgroundColor = 'hsl(268, 75%, 9%)'; // Negro
            break;
        default:
            break;
    }
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
       
        // Realizar acciones basadas en el texto del botón
        switch (buttonText) {
            case 'RESET':
                screen.value = "";
                break;
            case 'DEL':
                screen.value = screen.value.slice(0, -1); // Eliminar el último caracter
                break;
            case '=':
                // Reemplazar todos los caracteres "X" con "*"
      let expresion = screen.value.replace(/X/g, '*');
      // Evaluar la expresión y mostrar el resultado
      screen.value = math.evaluate(expresion);
                break;
            case '+':
            case '-':
            case '+':
            case 'X':
            case '/':
            case '.':
                const lastChar = screen.value.slice(-1); // Obtener el último caracter en pantalla
                if (!'+-X/'.includes(lastChar) && lastChar !== '.' && screen.value !== '') 
                {
                    screen.value += buttonText; // Añadir el texto del botón al valor actual del input
                }
                
                break;
            default:
                screen.value += buttonText; // Añadir el texto del botón al valor actual del input
                break;
        }
    });
});