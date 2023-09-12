function imprimirTablaMultiplicar(numeroTabla) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h2>Tabla de multiplicar del ${numeroTabla}:</h2>`;
    for (let i = 1; i <= 10; i++) {
      let resultado = numeroTabla * i;
      resultadoDiv.innerHTML += `${numeroTabla} x ${i} = ${resultado}<br>`;
    }
  }
  
  function imprimirTabla() {
    let numeroTabla = parseInt(document.getElementById("numeroTabla").value);
    if (isNaN(numeroTabla)) {
      alert("Por favor, ingrese un número válido.");
      return;
    }
    imprimirTablaMultiplicar(numeroTabla);
  }
  