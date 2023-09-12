let productos = [];
let ofertas = [];

function registrarProducto() {
    const productoId = document.getElementById('productoId').value;
    const productoNombre = document.getElementById('productoNombre').value;
    const productoFecha = document.getElementById('productoFecha').value;
    const productoPrecio = parseFloat(document.getElementById('productoPrecio').value);

    const producto = { id: productoId, nombre: productoNombre, fecha: productoFecha, precio: productoPrecio };
    productos.push(producto);

    actualizarListaProductos();
    actualizarListaPujas();
}

function realizarPuja() {
    const pujaProducto = document.getElementById('pujaProducto').value;
    const pujaFecha = document.getElementById('pujaFecha').value;
    const pujaMonto = parseFloat(document.getElementById('pujaMonto').value);

    const puja = { producto: pujaProducto, fecha: pujaFecha, monto: pujaMonto };
    ofertas.push(puja);

    actualizarListaPujas();
    mostrarOfertas();
}

function actualizarListaProductos() {
    const listaProductos = document.getElementById('listaProductos');
    listaProductos.innerHTML = '';

    productos.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `ID: ${producto.id}, Nombre: ${producto.nombre}, Fecha: ${producto.fecha}, Precio: ${producto.precio}`;
        listaProductos.appendChild(li);
    });

    const pujaProductoSelect = document.getElementById('pujaProducto');
    pujaProductoSelect.innerHTML = '';
    productos.forEach(producto => {
        const option = document.createElement('option');
        option.value = producto.id;
        option.textContent = producto.nombre;
        pujaProductoSelect.appendChild(option);
    });

    const ofertaProductoSelect = document.getElementById('ofertaProducto');
    ofertaProductoSelect.innerHTML = '';
    productos.forEach(producto => {
        const option = document.createElement('option');
        option.value = producto.id;
        option.textContent = producto.nombre;
        ofertaProductoSelect.appendChild(option);
    });
}

function actualizarListaPujas() {
    const ofertaProductoSelect = document.getElementById('ofertaProducto');
    const productoSeleccionado = ofertaProductoSelect.value;

    const listaOfertas = document.getElementById('listaOfertas');
    listaOfertas.innerHTML = '';

    const ofertasProducto = ofertas.filter(oferta => oferta.producto === productoSeleccionado);

    ofertasProducto.forEach(oferta => {
        const li = document.createElement('li');
        li.textContent = `Fecha: ${oferta.fecha}, Monto: ${oferta.monto}`;
        listaOfertas.appendChild(li);
    });
}

function mostrarOfertaGanadora() {
    const ofertaProductoSelect = document.getElementById('ofertaProducto');
    const productoSeleccionado = ofertaProductoSelect.value;

    const ofertasProducto = ofertas.filter(oferta => oferta.producto === productoSeleccionado);

    if (ofertasProducto.length > 0) {
        const ofertaGanadora = ofertasProducto.reduce((max, oferta) => max.monto > oferta.monto ? max : oferta);
        const divOfertaGanadora = document.getElementById('ofertaGanadora');
        divOfertaGanadora.textContent = `Fecha: ${ofertaGanadora.fecha}, Monto: ${ofertaGanadora.monto}`;
    } else {
        const divOfertaGanadora = document.getElementById('ofertaGanadora');
        divOfertaGanadora.textContent = 'No hay ofertas para este producto.';
    }
}
