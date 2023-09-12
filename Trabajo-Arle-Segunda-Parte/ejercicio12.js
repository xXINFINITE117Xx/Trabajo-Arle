let partidos = [];

function simularPartido() {
    let equipo1 = document.getElementById("equipo1").value;
    let marcador1 = parseInt(document.getElementById("marcador1").value);
    let equipo2 = document.getElementById("equipo2").value;
    let marcador2 = parseInt(document.getElementById("marcador2").value);

    if (equipo1.trim() === "" || isNaN(marcador1) || equipo2.trim() === "" || isNaN(marcador2)) {
        alert("Por favor, ingrese nombres válidos y marcadores numéricos.");
        return;
    }

    let resultado = {
        equipo1,
        marcador1,
        equipo2,
        marcador2
    };

    partidos.push(resultado);
    alert("Partido simulado exitosamente.");
}

function mostrarRanking() {
    let rankingDiv = document.getElementById("ranking");
    if (partidos.length === 0) {
        rankingDiv.textContent = "Aún no se han simulado partidos.";
        return;
    }

    let equipos = {};
    partidos.forEach(partido => {
        if (!equipos[partido.equipo1]) {
            equipos[partido.equipo1] = 0;
        }
        if (!equipos[partido.equipo2]) {
            equipos[partido.equipo2] = 0;
        }

        if (partido.marcador1 > partido.marcador2) {
            equipos[partido.equipo1] += 3;
        } else if (partido.marcador2 > partido.marcador1) {
            equipos[partido.equipo2] += 3;
        } else {
            equipos[partido.equipo1] += 1;
            equipos[partido.equipo2] += 1;
        }
    });

    let ranking = Object.entries(equipos)
        .sort((a, b) => b[1] - a[1])
        .map((equipo, index) => `${index + 1}. ${equipo[0]} - ${equipo[1]} puntos`)
        .join("<br>");

    rankingDiv.innerHTML = `<h2>Ranking de equipos:</h2>${ranking}`;
}
