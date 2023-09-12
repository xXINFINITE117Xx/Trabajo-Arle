let votosAnaMariaSuarez = 0;
let votosDiegoAcero = 0;


function votar(opcion) {
    if (opcion === 1) {
        votosAnaMariaSuarez++;
    } else if (opcion === 2) {
        votosDiegoAcero++;
    }
    mostrarResultado();
}


function mostrarResultado() {
    let resultadoDiv = document.getElementById('resultado');
    let resultado = '';

    if (votosAnaMariaSuarez > votosDiegoAcero) {
        resultado = 'Ganador: Ana Maria Suarez<br>Perdedor: Diego Acero';
    } else if (votosDiegoAcero > votosAnaMariaSuarez) {
        resultado = 'Ganador: Diego Acero<br>Perdedor: Ana Maria Suarez';
    } else {
        resultado = 'Empate entre Ana Maria Suarez y Diego Acero';
    }

    resultadoDiv.innerHTML = resultado;
}
