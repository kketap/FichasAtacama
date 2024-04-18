//Persona normal 
document.addEventListener('DOMContentLoaded', function () { //Cambiar a modo oscuro
  let toggle = document.getElementById('toggle');
  let labelToggle = document.getElementById('labelToggle');

  toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;
    document.body.classList.toggle('dark');

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