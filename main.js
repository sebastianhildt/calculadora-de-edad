var edades = [];

function agregarEdad() {
    var edadInput = document.getElementById('age');
    var edad = parseInt(edadInput.value);


    if (!isNaN(edad) && edad > 0) {
        edades.push(edad);
        edadInput.value = ''; 

        calcularEdadPromedio();
    } else {
        alert('Por favor, ingrese una edad válida.');
    }
}

function calcularEdadPromedio() {
    var sumaEdades = 0;

    for (var i = 0; i < edades.length; i++) {
        sumaEdades += edades[i];
    }

    
    var edadPromedio = edades.length > 0 ? sumaEdades / edades.length : 0;

    
    var resultadoElement = document.getElementById('edadPromedio');
    resultadoElement.textContent = 'Edad Promedio: ' + edadPromedio.toFixed(2);
}