import './style.css';

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentosRestantes = 7;
let juegoTerminado = false;

const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');

// Guardamos el texto original del botón para usarlo al reiniciar
const textoOriginalBoton = botonAdivinar.textContent;

botonAdivinar.addEventListener('click', () => {
    // Si el juego ya terminó, este mismo botón sirve para reiniciar
    if (juegoTerminado) {
        reiniciarJuego();
        return;
    }

    const numeroJugador = parseInt(inputNumero.value);

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = '¡Eso ni siquiera es un número válido entre 1 y 100!';
        return;
    }

    intentosRestantes--;

    if (numeroJugador === numeroSecreto) {
        mensaje.textContent = `¡Genial! ¡Adivinaste! Era el ${numeroSecreto}.`;
        finalizarJuego();
    } else if (intentosRestantes === 0) {
        mensaje.textContent = `¡GAME OVER! El número era el ${numeroSecreto}.`;
        finalizarJuego();
    } else {
        const pista = numeroJugador < numeroSecreto ? 'MÁS ALTO' : 'MÁS BAJO';
        mensaje.textContent = `¡No! El número es ${pista}. (Te quedan ${intentosRestantes} vidas)`;
    }

    inputNumero.value = '';
    inputNumero.focus();
});

function finalizarJuego() {
    juegoTerminado = true;
    inputNumero.disabled = true;
    botonAdivinar.textContent = '¿OTRA VEZ?';
    document.body.style.backgroundColor = numeroIntentosExitoso() ? '#4ecdc4' : '#ff3366'; 
}

function reiniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentosRestantes = 7;
    juegoTerminado = false;
    inputNumero.disabled = false;
    inputNumero.value = '';
    botonAdivinar.textContent = textoOriginalBoton;
    mensaje.textContent = '¡Nuevo número generado! Dale.';
    document.body.style.backgroundColor = ''; 
}