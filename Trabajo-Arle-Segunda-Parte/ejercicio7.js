function calcularMulta() {
    let tipoMulta = document.getElementById("tipo-multa").value;
    let diasRetraso = parseInt(document.getElementById("dias-retraso").value);
    let cantidadLibros = parseInt(document.getElementById("cantidad-libros").value);
    let cantidadRevistas = parseInt(document.getElementById("cantidad-revistas").value);

    if (isNaN(diasRetraso) || diasRetraso < 0 || isNaN(cantidadLibros) || cantidadLibros < 0 || isNaN(cantidadRevistas) || cantidadRevistas < 0) {
        alert("Por favor, ingresa valores válidos (no negativos).");
        return;
    }

    let multaLibros = 600 * diasRetraso * cantidadLibros;
    let multaRevistas = 500 * diasRetraso * cantidadRevistas;
    let multaTotal = multaLibros + multaRevistas;

    if (tipoMulta === "perdida") {
        let cantidadPerdida = cantidadLibros + cantidadRevistas;
        multaTotal += 10000 * cantidadPerdida;
    }

    document.getElementById("result").innerText = `El monto total de la multa es: $${multaTotal}`;
}
