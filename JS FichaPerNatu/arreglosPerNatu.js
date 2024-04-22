//Persona normal 
document.addEventListener('DOMContentLoaded', function () { //Cambiar a modo oscuro
  let toggle = document.getElementById('toggle');
  let labelToggle = document.getElementById('labelToggle');

  let darkModeEnabled = localStorage.getItem('darkModeEnabled');

  if (darkModeEnabled == 'true') {
    document.body.classList.add('dark');
    toggle.checked = true;
    labelToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;
    document.body.classList.toggle('dark');

    localStorage.setItem('darkModeEnabled', checked);

    if (checked == true) {
      labelToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      labelToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("opcionEstCivilPerNatu").addEventListener("change", function () {
    var estadoCivil = this.value; // Obtener el valor seleccionado del select
    var conyugeDiv = document.getElementById("conyuge");

    if (estadoCivil === "1") { // Si la opción seleccionada es "Casado(a)"
      conyugeDiv.style.display = "block"; // Mostrar el div "conyuge"
    } else {
      conyugeDiv.style.display = "none"; // Ocultar el div "conyuge" para cualquier otra opción
    }
  });
});