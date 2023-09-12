let serviceElement = document.getElementById('service');
let lavadoOptionsElement = document.getElementById('lavado-options');
let lavadoTypeElement = document.getElementById('lavadoType');
let cantidadPrendasElement = document.getElementById('cantidadPrendas');
let resultadoElement = document.getElementById('resultado');

function calcularCosto() {
  let precioLavadoSeco = 2000;
  let precioLavadoNormal = 1500;
  let precioPlanchado = 1800;

  let servicioSeleccionado = serviceElement.value;
  let lavadoType = lavadoTypeElement.value;
  let cantidadPrendas = parseInt(cantidadPrendasElement.value);

  let costoTotal = 0;

  if (servicioSeleccionado === 'lavado') {
    if (lavadoType === 'seco') {
      costoTotal = precioLavadoSeco * cantidadPrendas;
    } else if (lavadoType === 'normal') {
      costoTotal = precioLavadoNormal * cantidadPrendas;
    }
  } else if (servicioSeleccionado === 'planchado') {
    costoTotal = precioPlanchado * cantidadPrendas;
  }

  resultadoElement.textContent = `Costo total: $${costoTotal}`;
}

serviceElement.addEventListener('change', function () {
  if (serviceElement.value === 'lavado') {
    lavadoOptionsElement.style.display = 'block';
  } else {
    lavadoOptionsElement.style.display = 'none';
  }
});
