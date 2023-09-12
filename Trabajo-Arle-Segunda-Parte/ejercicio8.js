function verificarTriangulo() {
    
    let lado1 = parseFloat(document.getElementById("side1").value);
    let lado2 = parseFloat(document.getElementById("side2").value);
    let lado3 = parseFloat(document.getElementById("side3").value);

    
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert("Por favor, ingresa valores numéricos y positivos para los lados del triángulo.");
        return;
    }

    
    if (lado1 === lado2 && lado2 === lado3) {
        document.getElementById("result").innerText = "El triángulo es equilátero.";
    } else {
        document.getElementById("result").innerText = "El triángulo no es equilátero.";
    }
}
