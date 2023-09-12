// Definir estructuras de datos
const colaAtencion = {
    preferencial: [],
    general: [],
    sinCuenta: [],
};

const cajas = [
    { id: 1, tipo: 'retiro' },
    { id: 2, tipo: 'retiro' },
    { id: 3, tipo: 'deposito' },
    { id: 4, tipo: 'deposito' },
    { id: 5, tipo: 'asesoria' }
];

function agregarCliente(tipoCliente) {
    const cliente = { tipo: tipoCliente };

    colaAtencion[tipoCliente].push(cliente);

    actualizarColaAtencion();
}

function atenderClientes() {
    for (let i = 0; i < cajas.length; i++) {
        const caja = cajas[i];
        if (caja.tipo === 'retiro' && cajaLibre(caja.id)) {
            atenderRetiro(caja);
        } else if (caja.tipo === 'deposito' && cajaLibre(caja.id)) {
            atenderDeposito(caja);
        } else if (caja.tipo === 'asesoria' && cajaLibre(caja.id)) {
            atenderAsesoria(caja);
        }
    }
}

function atenderRetiro(caja) {
    const cliente = obtenerClientePreferencial() || obtenerClienteGeneral() || obtenerClienteSinCuenta();
    if (cliente) {
        atender(cliente, caja);
    }
}

function atenderDeposito(caja) {
    const cliente = obtenerClientePreferencial() || obtenerClienteGeneral() || obtenerClienteSinCuenta();
    if (cliente) {
        atender(cliente, caja);
    }
}

function atenderAsesoria(caja) {
    const cliente = obtenerClientePreferencial() || obtenerClienteGeneral() || obtenerClienteSinCuenta();
    if (cliente) {
        atender(cliente, caja);
    }
}

function atender(cliente, caja) {
    const indiceCliente = colaAtencion[cliente.tipo].indexOf(cliente);
    colaAtencion[cliente.tipo].splice(indiceCliente, 1);

    const cajaIndice = cajas.findIndex(c => c.id === caja.id);
    cajas[cajaIndice].libre = true;

    actualizarColaAtencion();
    actualizarCajas();
}

function cajaLibre(id) {
    const caja = cajas.find(c => c.id === id);
    return !caja.libre;
}

function obtenerClientePreferencial() {
    return colaAtencion.preferencial.length > 0 ? colaAtencion.preferencial[0] : null;
}

function obtenerClienteGeneral() {
    return colaAtencion.general.length > 0 ? colaAtencion.general[0] : null;
}

function obtenerClienteSinCuenta() {
    return colaAtencion.sinCuenta.length > 0 ? colaAtencion.sinCuenta[0] : null;
}

function actualizarColaAtencion() {
    const listaCola = document.getElementById('colaAtencion');
    listaCola.innerHTML = '';

    for (const tipoCliente in colaAtencion) {
        colaAtencion[tipoCliente].forEach(cliente => {
            const li = document.createElement('li');
            li.textContent = `Cliente ${tipoCliente}`;
            listaCola.appendChild(li);
        });
    }
}

function actualizarCajas() {
    const listaCajas = document.getElementById('cajas');
    listaCajas.innerHTML = '';

    cajas.forEach(caja => {
        const li = document.createElement('li');
        li.textContent = `Caja ${caja.id} (${caja.tipo}) - ${caja.libre ? 'Libre' : 'Ocupada'}`;
        listaCajas.appendChild(li);
    });
}

setInterval(atenderClientes, 3000); // Atender clientes cada 3 segundos
