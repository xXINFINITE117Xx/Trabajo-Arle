function generarSalida() {
    let output = document.getElementById("output");
    let estrellas = "* * * * *";
    let linea = "= = = = = = = = = = = = = = = = = =";
    let salida = "";
  
    for (let i = 1; i <= 5; i++) {
      if (i % 2 === 0) {
        salida += estrellas + " " + linea + "\n";
      } else {
        salida += estrellas + " " + linea.substr(0, estrellas.length) + "\n";
      }
    }
  
    salida += linea;
    output.textContent = salida;
  }
  
  generarSalida();
  