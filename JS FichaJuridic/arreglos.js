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

function increaseWidth(x) {  //incrementar el tamaño de input a medida que se escribe, campo : Razon Social
  var numberOfCharacters = x.value.length;
  if (numberOfCharacters >= 10) {
    var length = numberOfCharacters + "ch";
    x.style.with = length;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const pregunta1Si = document.getElementById('pregunta1Si');
  const pregunta2Si = document.getElementById('pregunta2Si');
  const pregunta3Si = document.getElementById('pregunta3Si');

  pregunta1Si.addEventListener('change', verificarRespuesta);
  pregunta2Si.addEventListener('change', verificarRespuesta);
  pregunta3Si.addEventListener('change', verificarRespuesta);

  function verificarRespuesta() {
    if (pregunta1Si.checked || pregunta2Si.checked || pregunta3Si.checked) {
      declaroInversionSer.checked = true;
      declaroInversionSer.disabled = false;
    } else {
      declaroInversionSer.checked = false;
      declaroInversionSer.disabled = true;
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const pregunta1No = document.getElementById('pregunta1No');
  const pregunta2No = document.getElementById('pregunta2No');
  const pregunta3No = document.getElementById('pregunta3No');

  pregunta1No.addEventListener('change', verificarRespuesta);
  pregunta2No.addEventListener('change', verificarRespuesta);
  pregunta3No.addEventListener('change', verificarRespuesta);

  function verificarRespuesta() {
    if (pregunta1No.checked && pregunta2No.checked && pregunta3No.checked) {
      declaroInversionNoSer.checked = true;
      declaroInversionNoSer.disabled = false;
    } else {
      declaroInversionNoSer.checked = false;
      declaroInversionNoSer.disabled = true;
    }
  }
});


document.addEventListener("DOMContentLoaded", function () { //mostrar contenido si se responde "si" y ocultarlo si se elige "no"
  document.getElementById("residenciaFiscalSi").addEventListener("click", function () {
    document.getElementById("respuestaSi").style.display = this.checked ? "block" : "none";
  });

  document.getElementById("residenciaFiscalNo").addEventListener("click", function () {
    document.getElementById("respuestaSi").style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () { //mostrar contenido si se responde "si" y ocultarlo si se elige "no"
  document.getElementById("preguntaBSi").addEventListener("click", function () {
    document.getElementById("DivpqPreguntaB").style.display = this.checked ? "block" : "none";
  });

  document.getElementById("preguntaBNo").addEventListener("click", function () {
    document.getElementById("DivpqPreguntaB").style.display = "none";
  });
});


document.addEventListener("DOMContentLoaded", function () { //mostrar contenido si se responde "si" y ocultarlo si se elige "no"
  document.getElementById("preguntaSeccion1Si").addEventListener("click", function () {
    document.getElementById("respuestaFATCASi").style.display = this.checked ? "block" : "none";
  });

  document.getElementById("preguntaSeccion1No").addEventListener("click", function () {
    document.getElementById("respuestaFATCASi").style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () { //mostrar contenido si se responde "si" y ocultarlo si se elige "no"
  document.getElementById("sociedadClienteUSSi").addEventListener("click", function () {
    document.getElementById("respuestaSociedadClienteUSSi").style.display = this.checked ? "block" : "none";
  });

  document.getElementById("sociedadClienteUSNo").addEventListener("click", function () {
    document.getElementById("respuestaSociedadClienteUSSi").style.display = "none";
  });
});

/* arreglos.js:150 Uncaught TypeError: Cannot read properties of null (reading 'value')
    at HTMLButtonElement.<anonymous> (arreglos.js:150:66)
    resultadoPerfilRiesgoN*/