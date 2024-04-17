// Función para guardar los datos del formulario en el almacenamiento local
function guardarDatosFormulario() {
  // Obtener los valores del formulario y guardarlos en un objeto
  var datosFormulario = {
    razonSocial: document.getElementById('razon').value,
    rut: document.getElementById('rut').value,
    // Agrega aquí los demás campos del formulario que desees guardar
  };

  // Convertir el objeto a formato JSON y guardarlo en el almacenamiento local
  localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario));
}

// Función para cargar los datos del formulario desde el almacenamiento local
function cargarDatosFormulario() {
  // Verificar si hay datos almacenados localmente
  var datosGuardados = localStorage.getItem('datosFormulario');

  // Verificar si hay datos almacenados localmente
  if (datosGuardados) {
    // Convertir los datos de formato JSON a un objeto JavaScript
    var datosFormulario = JSON.parse(datosGuardados);

    // Asignar los valores del objeto a los campos del formulario
    document.getElementById('razon').value = datosFormulario.razonSocial;
    document.getElementById('rut').value = datosFormulario.rut;
    // Agrega aquí la asignación de los demás campos del formulario
  }
}

// Llamar a la función cargarDatosFormulario al cargar la página
document.addEventListener('DOMContentLoaded', function () {
  cargarDatosFormulario();
});

// Llamar a la función guardarDatosFormulario al enviar el formulario
document.addEventListener('DOMContentLoaded', function () {
  // Agregar el event listener cuando el DOM esté completamente cargado
  document.getElementById('form').addEventListener('submit', function () {
    // Guardar los datos del formulario antes de enviarlo
    guardarDatosFormulario();
  });
});