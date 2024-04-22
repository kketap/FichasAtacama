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

        razonAccio: document.getElementById('razonAccio').value,
        nomCompletoAccio: document.getElementById('nomCompletoAccio').value,
        rutAccio: document.getElementById('rutAccio').value,
        accionistaBenefPregunta: obtenerValorRadio('accionistaBenefPregunta'),

        nomBenef: document.getElementById('nomBenef').value,
        rutBenef: document.getElementById('rutBenef').value,
        direccionBenef: document.getElementById('direccionBenef').value,
        porcentajeBenef: document.getElementById('porcentajeBenef').value,

        nombreGerente: document.getElementById('nombreGerente').value,
        rutGerente: document.getElementById('rutGerente').value,
        nacionalidadGerente: document.getElementById('nacionalidadGerente').value,
        correoGerente: document.getElementById('correoGerente').value,
        direccionGerente: document.getElementById('direccionGerente').value,
        comunaGerente: document.getElementById('comunaGerente').value,
        estadoCivilGerente: document.getElementById('estadoCivilGerente').value,
        telefono1Gerente: document.getElementById('telefono1Gerente').value,
        telefono2Gerente: document.getElementById('telefono2Gerente').value,

        nombreApoderado: document.getElementById('nombreApoderado').value,
        rutApoderado: document.getElementById('rutApoderado').value,
        nacionalidadApoderado: document.getElementById('nacionalidadApoderado').value,
        correoApoderado: document.getElementById('correoApoderado').value,
        direccionApoderado: document.getElementById('direccionApoderado').value,
        comunaApoderado: document.getElementById('comunaApoderado').value,
        estadoCivilApoderado: document.getElementById('estadoCivilApoderado').value,
        telefono1Apoderado: document.getElementById('telefono1Apoderado').value,
        telefono2Apoderado: document.getElementById('telefono2Apoderado').value,

        nombreAAM: document.getElementById('nombreAAM').value,
        rutAAM: document.getElementById('rutAAM').value,
        nacionalidadAAM: document.getElementById('nacionalidadAAM').value,
        correoAAM: document.getElementById('correoAAM').value,
        direccionAAM: document.getElementById('direccionAAM').value,
        comunaAAM: document.getElementById('comunaAAM').value,
        estadoCivilAAM: document.getElementById('estadoCivilAAM').value,
        telefono1AAM: document.getElementById('telefono1AAM').value,
        telefono2AAM: document.getElementById('telefono2AAM').value,

        opcionMedios: obtenerValorRadioMedios('opcionMedios'),

    };
    localStorage.setItem('datosFormulario1', JSON.stringify(datosFormulario1)); // Usar una clave única para el formulario 1
}

// Función para cargar datos del formulario 1 desde el almacenamiento local
function cargarDatosFormulario1() {
    var datosGuardados = localStorage.getItem('datosFormulario1');
    if (datosGuardados) {
        var datosFormulario1 = JSON.parse(datosGuardados);
        for (var key in datosFormulario1) {
            if (datosFormulario1.hasOwnProperty(key)) {
                var value = datosFormulario1[key];
                if (value !== undefined) {
                    if (key === 'accionistaBenefPregunta' || key === 'opcionMedios') {
                        var radioSeleccionado = document.querySelector(`input[name="${key}"][value="${value}"]`);
                        if (radioSeleccionado) {
                            radioSeleccionado.checked = true;
                        }
                    } else {
                        document.getElementById(key).value = value;
                    }
                }
            }
        }
    }
}

function obtenerValorRadio(accionistaBenefPregunta) {
    var radioSeleccionado = document.querySelector(`input[name="${accionistaBenefPregunta}"]:checked`);
    return radioSeleccionado ? radioSeleccionado.value : undefined;
}

function obtenerValorRadioMedios(opcionMedios) {
    var radioSeleccionado = document.querySelector(`input[name="${opcionMedios}"]:checked`);
    return radioSeleccionado ? radioSeleccionado.value : undefined;
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