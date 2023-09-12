function calcularCosto() {
    let product = document.getElementById("product").value;
    let quantity = parseInt(document.getElementById("quantity").value);
    let salsaCheckbox = document.getElementById("salsa");

    if (isNaN(quantity) || quantity < 1) {
        alert("Por favor, ingresa una cantidad válida (mínimo 1 porción).");
        return;
    }

    let costoPorcion = 0;
    switch (product) {
        case  "pizza":
            costoPorcion = 7000;
            break;
        case "sandwich":
            costoPorcion = 5000;
            break;
        case "ensalada":
            costoPorcion = 15000;
            break;
        default:
            alert("Selecciona un producto válido.");
            return;
    }

    let costoTotal = costoPorcion * quantity;

    if (salsaCheckbox.checked) {
        costoTotal += 3000;
    }

    document.getElementById("result").innerText = `El costo total a pagar es: $${costoTotal}`;
}
