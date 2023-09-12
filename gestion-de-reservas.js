const habitaciones = {
    individual: { capacidadMaxima: 2, disponible: 3 },
    doble: { capacidadMaxima: 4, disponible: 3 },
    familiar: { capacidadMaxima: 6, disponible: 3 },
};

const estadisticas = {
    reservas: [],
    personasOcupandoHotel: 0,
};

function realizarReserva() {
    const nombre = document.getElementById("nombre").value;
    const pais = document.getElementById("pais").value;
    const tipoHabitacion = document.getElementById("tipoHabitacion").value;
    const fumador = document.getElementById("fumador").checked;
    const numeroPersonas = parseInt(document.getElementById("numeroPersonas").value);
    const periodoEstadia = document.getElementById("periodoEstadia").value;
    const traeMascota = document.getElementById("traeMascota").checked;

    if (habitaciones[tipoHabitacion] && habitaciones[tipoHabitacion].disponible > 0) {
        if (tipoHabitacion === 'familiar' && !traeMascota) {
            alert("Las habitaciones familiares requieren traer mascota.");
            return;
        }

        if (numeroPersonas > habitaciones[tipoHabitacion].capacidadMaxima) {
            alert("Número de personas excede la capacidad máxima de la habitación.");
            return;
        }

        const reserva = {
            nombre,
            pais,
            tipoHabitacion,
            fumador,
            numeroPersonas,
            periodoEstadia,
            traeMascota,
        };

        habitaciones[tipoHabitacion].disponible--;
        estadisticas.reservas.push(reserva);
        estadisticas.personasOcupandoHotel += numeroPersonas;

        actualizarEstadisticas();
        alert("Reserva realizada con éxito.");
    } else {
        alert("Lo siento, no hay habitaciones disponibles de ese tipo.");
    }
}

function actualizarEstadisticas() {
    const estadisticasDiv = document.getElementById("estadisticas");
    estadisticasDiv.textContent = "Estadísticas de Reservas:\n";
    estadisticasDiv.textContent += "Número de personas ocupando el hotel: " + estadisticas.personasOcupandoHotel + "\n";
    estadisticasDiv.textContent += "Reservas realizadas:\n";

    for (const reserva of estadisticas.reservas) {
        estadisticasDiv.textContent += "\n";
        estadisticasDiv.textContent += "Nombre: " + reserva.nombre + "\n";
        estadisticasDiv.textContent += "País: " + reserva.pais + "\n";
        estadisticasDiv.textContent += "Tipo de Habitación: " + reserva.tipoHabitacion + "\n";
        estadisticasDiv.textContent += "Fumador: " + (reserva.fumador ? "Sí" : "No") + "\n";
        estadisticasDiv.textContent += "Número de Personas: " + reserva.numeroPersonas + "\n";
        estadisticasDiv.textContent += "Período de Estadía: " + reserva.periodoEstadia + "\n";
        estadisticasDiv.textContent += "Trae Mascota: " + (reserva.traeMascota ? "Sí" : "No") + "\n";
    }
}
