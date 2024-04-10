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

function increaseWidth(x) {  //incrementar el tamaño de input a medida que se escribe, campo : Razon Social
  var numberOfCharacters = x.value.length;
  if (numberOfCharacters >= 10) {
    var length = numberOfCharacters + "ch";
    x.style.with = length;
  }
}


document.addEventListener("DOMContentLoaded", function () { //en actividades si selecciona "si" en una de estas, se selecciona automatic el "declaro ser"
  document.getElementById("pregunta1Si").addEventListener("change", function () {
    if (this.checked) {
      document.getElementById("declaroInversionSer").checked = true;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("pregunta2Si").addEventListener("change", function () {
    if (this.checked) {
      document.getElementById("declaroInversionSer").checked = true;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("pregunta3Si").addEventListener("change", function () {
    if (this.checked) {
      document.getElementById("declaroInversionSer").checked = true;
    }
  });
});


document.addEventListener("DOMContentLoaded", function () { //lo mismo pero con la opción "no"
  document.getElementById("pregunta1No").addEventListener("change", function () {
    if (this.checked) {
      document.getElementById("declaroInversionSer").checked = false;
      document.getElementById("declaroInversionNoSer").checked = true;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("pregunta2No").addEventListener("change", function () {
    if (this.checked) {
      document.getElementById("declaroInversionSer").checked = false;
      document.getElementById("declaroInversionNoSer").checked = true;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("pregunta3No").addEventListener("change", function () {
    if (this.checked) {
      document.getElementById("declaroInversionSer").checked = false;
      document.getElementById("declaroInversionNoSer").checked = true;
    }
  });
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
    at HTMLButtonElement.<anonymous> (arreglos.js:150:66)*/