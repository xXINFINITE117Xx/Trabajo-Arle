function calcularComision(){
    let costoCasa = parseFloat(document.getElementById("costo-casa").value);
    let tipoMueble = document.getElementById("tipo-mueble").value;
    let comision = 0;
    if(tipoMueble === "Usado") {
        comision = costoCasa * 0.1;
    } else if (tipoMueble === "Nuevo") {
        comision = costoCasa * 0.12;
    }
    let valorPropietario = costoCasa - comision;
    document.getElementById("valor-propietario").textContent = valorPropietario.toFixed(2);
    document.getElementById("valor-inmobiliaria").textContent = comision.toFixed(2);
    document.getElementById("resultado").style.display = "block";
}

