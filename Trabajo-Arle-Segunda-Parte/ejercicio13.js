let referenciasChevrolet = {
    captiva: {
        marca: "Chevrolet",
        referencia: "Captiva",
        modelo: 2023,
        precio: "$30,000"
    },
    tracker: {
        marca: "Chevrolet",
        referencia: "Tracker",
        modelo: 2023,
        precio: "$25,000"
    }
};

let referenciasMazda = {
    cx5: {
        marca: "Mazda",
        referencia: "CX-5",
        modelo: 2023,
        precio: "$35,000"
    },
    mazda3: {
        marca: "Mazda",
        referencia: "Mazda 3",
        modelo: 2023,
        precio: "$28,000"
    }
};

let referenciasRenault = {
    koleos: {
        marca: "Renault",
        referencia: "Koleos",
        modelo: 2023,
        precio: "$29,000"
    },
    duster: {
        marca: "Renault",
        referencia: "Duster",
        modelo: 2023,
        precio: "$24,000"
    }
};

function mostrarReferencias() {
    let marcaSeleccionada = document.getElementById("marca").value;
    let referencias = obtenerReferenciasPorMarca(marcaSeleccionada);

    if (referencias.length === 0) {
        alert("No hay referencias disponibles para la marca seleccionada.");
        return;
    }

    let infoReferenciasDiv = document.getElementById("infoReferencias");
    infoReferenciasDiv.innerHTML = "<h2>Información de referencias:</h2>";

    referencias.forEach(referencia => {
        let referenciaInfo = `
            <p><strong>Marca:</strong> ${referencia.marca}</p>
            <p><strong>Referencia:</strong> ${referencia.referencia}</p>
            <p><strong>Modelo:</strong> ${referencia.modelo}</p>
            <p><strong>Precio:</strong> ${referencia.precio}</p>
            <hr>
        `;
        infoReferenciasDiv.innerHTML += referenciaInfo;
    });
}

function obtenerReferenciasPorMarca(marca) {
    switch (marca) {
        case "chevrolet":
            return Object.values(referenciasChevrolet);
        case "mazda":
            return Object.values(referenciasMazda);
        case "renault":
            return Object.values(referenciasRenault);
        default:
            return [];
    }
}
