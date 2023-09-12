let preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        opciones: ["Roma", "Londres", "París"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Es la Tierra plana?",
        opciones: ["Verdadero", "Falso"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es el resultado de 2 + 2?",
        opciones: ["3", "4", "5"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es el océano más grande?",
        opciones: ["Océano Atlántico", "Océano Índico", "Océano Pacífico"],
        respuestaCorrecta: 3
    },
    {
        pregunta: "¿El Sol es una estrella?",
        opciones: ["Verdadero", "Falso"],
        respuestaCorrecta: 0
    }
];

let puntos = 0;

function mostrarPreguntas() {
    let preguntasDiv = document.getElementById("preguntas");
    preguntas.forEach((pregunta, index) => {
        let preguntaDiv = document.createElement("div");
        preguntaDiv.innerHTML = `
            <p><strong>Pregunta ${index + 1}:</strong> ${pregunta.pregunta}</p>
            <ul>
                ${pregunta.opciones.map((opcion, i) => `<li><input type="radio" name="pregunta${index}" value="${i}">${opcion}</li>`).join("")}
            </ul>
        `;
        preguntasDiv.appendChild(preguntaDiv);
    });
}

function calcularResultado() {
    let respuestas = document.querySelectorAll('input[type="radio"]:checked');
    if (respuestas.length !== preguntas.length) {
        alert("Debe responder todas las preguntas antes de finalizar el examen.");
        return;
    }

    puntos = 0;
    respuestas.forEach((respuesta, index) => {
        let pregunta = preguntas[index];
        let opcionSeleccionada = parseInt(respuesta.value);
        if (opcionSeleccionada === pregunta.respuestaCorrecta) {
            puntos += 10;
        }
    });

    mostrarResultado();
}

function mostrarResultado() {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p>Tu puntaje es: ${puntos} puntos</p>`;
}

mostrarPreguntas();
