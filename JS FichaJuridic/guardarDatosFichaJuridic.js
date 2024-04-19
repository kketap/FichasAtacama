// Función para guardar datos del formulario 1 en el almacenamiento local
function guardarDatosFormulario1() {
    var datosFormulario1 = {
        razon: document.getElementById('razon').value,
        rut: document.getElementById('rut').value,
        nomFantasia: document.getElementById('nomFantasia').value,
        giro: document.getElementById('giro').value,
        residencia: document.getElementById('residencia').value,
        direccion: document.getElementById('direccion').value,
        comuna: document.getElementById('comuna').value,
        correo: document.getElementById('correo').value,
        telefono1: document.getElementById('telefono1').value,
        telefono2: document.getElementById('telefono2').value,

        accionistaBenefPregunta: obtenerValorRadio('accionistaBenefPregunta'),
        accionistaBenefPregunta2: obtenerValorRadio('accionistaBenefPregunta2'),

        nomBenef: document.getElementById('nomBenef').value,
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
        document.getElementById('nomFantasia').value = datosFormulario1.nomFantasia;
        document.getElementById('giro').value = datosFormulario1.giro;
        document.getElementById('residencia').value = datosFormulario1.residencia;
        document.getElementById('direccion').value = datosFormulario1.direccion;
        document.getElementById('comuna').value = datosFormulario1.comuna;
        document.getElementById('correo').value = datosFormulario1.correo;
        document.getElementById('telefono1').value = datosFormulario1.telefono1;
        document.getElementById('telefono2').value = datosFormulario1.telefono2;

        // Establecer el radio button seleccionado
        if (datosFormulario1.accionistaBenefPregunta !== null) {
            var radioSeleccionado = document.querySelector(`input[name="accionistaBenefPregunta"][value="${datosFormulario1.accionistaBenefPregunta}"]`);
            if (radioSeleccionado) {
                radioSeleccionado.checked = true;
            }
        }

        if (datosFormulario1.accionistaBenefPregunta2 !== null) {
            var radioSeleccionado = document.querySelector(`input[name="accionistaBenefPregunta2"][value="${datosFormulario1.accionistaBenefPregunta2}"]`);
            if (radioSeleccionado) {
                radioSeleccionado.checked = true;
            }
        }

        document.getElementById('nomBenef').value = datosFormulario1.nomBenef;
    }
}

function obtenerValorRadio(accionistaBenefPregunta) {
    var radioSeleccionado = document.querySelector(`input[name="${accionistaBenefPregunta}"]:checked`);
    return radioSeleccionado ? radioSeleccionado.value : null;
}

function obtenerValorRadio(accionistaBenefPregunta2) {
    var radioSeleccionado = document.querySelector(`input[name="${accionistaBenefPregunta2}"]:checked`);
    return radioSeleccionado ? radioSeleccionado.value : null;
}

// Llamar a la función cargarDatosFormulario1 al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    cargarDatosFormulario1();
    console.log('Los datos se cargaron');
});

// Llamar a la función guardarDatosFormulario1 al enviar el formulario 1
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();
        guardarDatosFormulario1();
        console.log('Los datos se guardaron');
    });
});