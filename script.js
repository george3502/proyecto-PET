// 1. SISTEMA DEL BUSCADOR INTERACTIVO EN TIEMPO REAL
function filtrarContenido() {
    let termino = document.getElementById("inputBuscador").value.toLowerCase();
    let secciones = document.getElementsByClassName("seccion-card");

    for (let i = 0; i < secciones.length; i++) {
        let texto = secciones[i].innerText.toLowerCase();
        if (texto.includes(termino)) {
            secciones[i].style.display = "block";
        } else {
            secciones[i].style.display = "none";
        }
    }
}

// 2. BANCO DE PREGUNTAS DEL JUEGO INTERACTIVO
const preguntas = [
    {
        q: "¿Cuánto tiempo promedio tarda una botella de PET en degradarse en un basurero?",
        options: ["De 5 a 10 años", "Hasta 500 años", "Nunca se degrada", "50 años"],
        correct: 1
    },
    {
        q: "¿Qué megaplanta procesadora de grado alimenticio recibe botellas recolectadas en Veracruz?",
        options: ["Planta PLANETA", "PetStar Central", "MacroEco México", "Industrias Veracruz"],
        correct: 0
    },
    {
        q: "¿Qué material biológico se investiga en Veracruz como alternativa al plástico tradicional?",
        options: ["Fibras de Vidrio", "Ácido poliláctico (PLA) de Caña", "Polímeros Sintéticos", "Resinas de Madera"],
        correct: 1
    }
];

let indicePregunta = 0;
let score = 0;

function cargarPregunta() {
    let contenedorPregunta = document.getElementById("pregunta-juego");
    let contenedorOpciones = document.getElementById("contenedor-opciones");

    // Verificar si ya terminamos el banco de preguntas
    if (indicePregunta >= preguntas.length) {
        contenedorPregunta.innerText = "¡Felicidades! Has terminado el entrenamiento ambiental.";
        contenedorOpciones.innerHTML = `<button class='btn-juego' onclick='reiniciarJuego()' style='grid-column: 1/-1;'>Jugar de nuevo</button>`;
        return;
    }

    let pActual = preguntas[indicePregunta];
    contenedorPregunta.innerText = pActual.q;
    
    let opcionesHTML = "";
    pActual.options.forEach((opt, idx) => {
        opcionesHTML += `<button class="btn-juego" onclick="verificarRespuesta(${idx})">${opt}</button>`;
    });
    contenedorOpciones.innerHTML = opcionesHTML;
}

function verificarRespuesta(seleccionado) {
    if (seleccionado === preguntas[indicePregunta].correct) {
        score++;
        alert("¡Excelente! Respuesta correcta. 🌿");
    } else {
        alert("Incorrecto. ¡Sigue estudiando el contenido de la página! 📋");
    }
    document.getElementById("puntos").innerText = score;
    indicePregunta++;
    cargarPregunta();
}

function reiniciarJuego() {
    score = 0;
    indicePregunta = 0;
    document.getElementById("puntos").innerText = score;
    cargarPregunta();
}

// Iniciar el juego automáticamente al cargar la pantalla
document.addEventListener("DOMContentLoaded", function() {
    cargarPregunta();
});
