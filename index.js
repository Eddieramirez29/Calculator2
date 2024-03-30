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
// Obtener el elemento div por su clase
let  title1Element = document.querySelector('.title1');
let  title2Element = document.querySelector('.title2');
let  screenElement = document.querySelector('#screen');
let  keyboardElement = document.querySelector('#keyboard');
let  buttonElements = document.querySelector('.button');
let buttonDelElement = document.querySelector('.button-del');
let buttonResetElement = document.querySelector('#reset');
let buttonIgualElement = document.querySelector('#igual');
// Función para cambiar el color de fondo del body
function cambiarColorFondo(estado) {
    switch (estado) {
        case 1:
            document.body.style.backgroundColor = 'hsl(222, 26%, 31%)';
            title1Element.style.color = 'white';
            title2Element.style.color = 'white';
            screenElement.style.color = 'white';
            screenElement.style.backgroundColor = 'hsl(224, 36%, 15%)';
            keyboardElement.style.backgroundColor = "hsl(223, 31%, 20%)";

            buttonElements.style.backgroundColor = "hsl(0, 22%, 90%)";

            buttonDelElement.style.backgroundColor = "hsl(222, 26%, 31%)";
            buttonDelElement.style.borderBottom  = "3px solid hsl(223, 57%, 21%)";
            buttonDelElement.style.color = "hsl(0, 0%, 100%)";

            buttonResetElement.style.backgroundColor = "hsl(222, 26%, 31%)";
            buttonResetElement.style.borderBottom  = "3px solid hsl(223, 57%, 21%)";
            buttonResetElement.style.color = "hsl(0, 0%, 100%)";

            buttonIgualElement.style.backgroundColor = "hsl(6, 63%, 50%)";
            buttonIgualElement.style.borderBottom  = "3px solid hsl(6, 70%, 34%)";
            buttonIgualElement.style.color = "hsl(0, 0%, 100%)";
            break;
        case 2:
            document.body.style.backgroundColor = 'hsl(0, 0%, 90%)';
            // Cambiar el color del texto
            title1Element.style.color = 'hsl(60, 10%, 19%)'; 
            title2Element.style.color = 'hsl(60, 10%, 19%)';
            screenElement.style.color = 'hsl(60, 10%, 19%)';
            screenElement.style.backgroundColor = 'hsl(0, 0%, 93%)';
            keyboardElement.style.backgroundColor = "hsl(0, 5%, 81%)";

            buttonElements.style.backgroundColor = "hsl(0, 22%, 90%)";

            buttonDelElement.style.backgroundColor = "hsl(222, 26%, 31%)";
            buttonDelElement.style.borderBottom  = "3px solid hsl(223, 57%, 21%)";
            buttonDelElement.style.color = "hsl(0, 0%, 100%)";

            buttonResetElement.style.backgroundColor = "hsl(222, 26%, 31%)";
            buttonResetElement.style.borderBottom  = "3px solid hsl(223, 57%, 21%)";
            buttonResetElement.style.color = "hsl(0, 0%, 100%)";

            buttonIgualElement.style.backgroundColor = "hsl(6, 63%, 50%)";
            buttonIgualElement.style.borderBottom  = "3px solid hsl(6, 70%, 34%)";
            buttonIgualElement.style.color = "hsl(0, 0%, 100%)";
            break;
        case 3: 
            document.body.style.backgroundColor = 'hsl(268, 75%, 9%)'; 
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