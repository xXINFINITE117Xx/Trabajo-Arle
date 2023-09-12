/* hacer en JavaScript el sistema de administración de pago para una pesa electrónica.
a. El usuario solo puede ingresar monedas o billetes
• Si es moneda, aceptar monedas de 500, 1000 solamente.
• Si es billete, de 2000 y 5000.
b. El servicio vale 500 pesos, el sistema debe indicar si falta dinero, si no tiene que devolver o el valor de la 
devolución.
c. ¡Mostrar un mensaje “vuelve pronto!”
*/


let precioServicio = 500;
let monedasValidas = [500, 1000];
let billetesValidos = [2000, 5000];

function realizarPago() {
    let montoIngresado = parseFloat(document.getElementById("monto").value);
    if (isNaN(montoIngresado)) {
        mostrarMensaje("Por favor, ingrese un valor numérico válido.");
        return;
    }

    if (montoIngresado < precioServicio) {
        mostrarMensaje("El monto ingresado es insuficiente. Falta dinero.");
    } else {
        let cambio = montoIngresado - precioServicio;
        if (cambio > 0) {
            mostrarMensaje(`Pago realizado con éxito. Su cambio es de ${cambio} pesos.`);
        } else {
            mostrarMensaje("Pago realizado con éxito. No requiere cambio.");
        }
    }
}

function mostrarMensaje(mensaje) {
    let mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.textContent = mensaje;
}
