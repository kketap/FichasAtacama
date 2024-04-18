// Función para guardar datos del formulario 1 en el almacenamiento local
function guardarDatosFormulario1() {
    var datosFormulario1 = {
        razon: document.getElementById('razon').value,
        rut: document.getElementById('rut').value
    };
    localStorage.setItem('datosFormulario1', JSON.stringify(datosFormulario1)); // Usar una clave única para el formulario 1
}

// Función para cargar datos del formulario 1 desde el almacenamiento local
function cargarDatosFormulario1() {
    var datosGuardados = localStorage.getItem('datosFormulario1');
    if (datosGuardados) {
        var datosFormulario1 = JSON.parse(datosGuardados);
        document.getElementById('razon').value = datosFormulario1.razon;
        document.getElementById('rut').value = datosFormulario1.rut;
    }
}

// Llamar a la función cargarDatosFormulario1 al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    cargarDatosFormulario1();
});

// Llamar a la función guardarDatosFormulario1 al enviar el formulario 1
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();
        guardarDatosFormulario1();
    });
});

