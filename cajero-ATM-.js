let cliente = null;
let intentosPIN = 3;
let cajeroEncendido = true;

function iniciarSesion() {
    const documento = document.getElementById('documento').value;
    const pin = document.getElementById('pin').value;
    const validacion = validarCliente(documento, pin);

    if (validacion) {
        cliente = validacion;
        mostrarMenuOperaciones();
    } else {
        intentosPIN--;
        if (intentosPIN > 0) {
            alert(`PIN incorrecto. Te quedan ${intentosPIN} intentos.`);
        } else {
            alert('Tres intentos incorrectos. Sesión finalizada.');
            reiniciarSesion();
        }
    }
}

function validarCliente(documento, pin) {
    const clientes = [
        { documento: '12345678', pin: '1234', nombre: 'Juan', saldo: 1000000 },
        { documento: '98765432', pin: '5678', nombre: 'María', saldo: 500000 }
    ];

    return clientes.find(c => c.documento === documento && c.pin === pin);
}

function mostrarMenuOperaciones() {
    document.getElementById('interfazCliente').style.display = 'none';
    document.getElementById('menuOperaciones').style.display = 'block';
}

function realizarRetiro() {
    if (cajeroEncendido) {
        const monto = parseInt(prompt('Ingrese el monto a retirar (múltiplos de $50000):'));

        if (monto && monto % 50000 === 0 && monto <= cliente.saldo) {
            cliente.saldo -= monto;
            mostrarResultadoTransaccion(`Retiro exitoso. Puede tomar $${monto} de la bandeja principal.`);
        } else {
            mostrarResultadoTransaccion('Monto inválido o insuficiente saldo.');
        }
    } else {
        mostrarResultadoTransaccion('El cajero está apagado. No se puede realizar la operación.');
    }
}


function mostrarResultadoTransaccion(mensaje) {
    const resultadoDiv = document.getElementById('resultadoTransaccion');
    resultadoDiv.textContent = mensaje;
}

function finalizarSesion() {
    reiniciarSesion();
    mostrarResultadoTransaccion('Sesión finalizada. Gracias por usar nuestro servicio.');
}

function reiniciarSesion() {
    cliente = null;
    intentosPIN = 3;
    document.getElementById('documento').value = '';
    document.getElementById('pin').value = '';
    document.getElementById('interfazCliente').style.display = 'block';
    document.getElementById('menuOperaciones').style.display = 'none';
    mostrarResultadoTransaccion('');
}

function cambiarEstadoCajero() {
    cajeroEncendido = document.getElementById('interruptor').checked;
}

// ... (código anterior)

function realizarDeposito() {
    if (cajeroEncendido) {
        const monto = parseInt(prompt('Ingrese el monto a depositar:'));

        if (monto > 0) {
            const esEfectivo = confirm('¿Es un depósito en efectivo?');

            if (esEfectivo) {
                cliente.saldo += monto;
                mostrarResultadoTransaccion(`Depósito en efectivo exitoso. Nuevo saldo: $${cliente.saldo}`);
            } else {
                alert('Lo sentimos, solo aceptamos depósitos en efectivo en este cajero.');
            }
        } else {
            mostrarResultadoTransaccion('Monto inválido.');
        }
    } else {
        mostrarResultadoTransaccion('El cajero está apagado. No se puede realizar la operación.');
    }
}

function realizarTransferencia() {
    if (cajeroEncendido) {
        const monto = parseInt(prompt('Ingrese el monto a transferir:'));
        const destino = prompt('Ingrese el documento de identidad del destinatario:');

        const destinatario = validarDestinatario(destino);

        if (monto > 0 && destinatario && monto <= cliente.saldo) {
            cliente.saldo -= monto;
            destinatario.saldo += monto;
            mostrarResultadoTransaccion(`Transferencia exitosa. Nuevo saldo: $${cliente.saldo}`);
        } else {
            mostrarResultadoTransaccion('Transferencia no válida.');
        }
    } else {
        mostrarResultadoTransaccion('El cajero está apagado. No se puede realizar la operación.');
    }
}

function validarDestinatario(documento) {
    const clientes = [
        { documento: '23456789', nombre: 'Carlos', saldo: 800000 },
        { documento: '34567890', nombre: 'Ana', saldo: 600000 }
    ];

    return clientes.find(c => c.documento === documento);
}

function consultarSaldo() {
    if (cajeroEncendido) {
        mostrarResultadoTransaccion(`Tu saldo actual es: $${cliente.saldo}`);
    } else {
        mostrarResultadoTransaccion('El cajero está apagado. No se puede realizar la operación.');
    }
}

// ... (código posterior)
