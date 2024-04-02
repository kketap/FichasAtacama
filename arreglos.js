function increaseWidth(x) {  //incrementar el tamaño de input a medida que se escribe, campo : Razon Social
  var numberOfCharacters = x.value.length;
  if (numberOfCharacters >= 10) {
    var length = numberOfCharacters + "ch";
    x.style.with = length;
  }
}

document.addEventListener('DOMContentLoaded', function () { //funcion Mostrar más texto
  const botonAlternar = document.getElementById('alternarTexto');
  const texto = document.getElementById('texto');
  const textoAdicional = texto.querySelector('.texto-adicional');

  botonAlternar.addEventListener('click', function () {
    if (texto.classList.contains('texto-completo')) {
      texto.classList.remove('texto-completo');
      textoAdicional.style.display = 'inline'; // Mostrar texto adicional
      botonAlternar.textContent = 'Mostrar Menos'; // Cambiar texto del botón
    } else {
      texto.classList.add('texto-completo');
      textoAdicional.style.display = 'none'; // Ocultar texto adicional
      botonAlternar.textContent = 'Mostrar Más'; // Cambiar texto del botón
    }
  });
});

document.addEventListener('DOMContentLoaded', function () { //funcion Mostrar más texto2
  const botonAlternar = document.getElementById('alternarTexto2');
  const texto = document.getElementById('texto2');
  const textoAdicional = texto.querySelector('.texto-adicional2');

  botonAlternar.addEventListener('click', function () {
    if (texto.classList.contains('texto-completo2')) {
      texto.classList.remove('texto-completo2');
      textoAdicional.style.display = 'inline'; // Mostrar texto adicional
      botonAlternar.textContent = 'Mostrar Menos'; // Cambiar texto del botón
    } else {
      texto.classList.add('texto-completo2');
      textoAdicional.style.display = 'none'; // Ocultar texto adicional
      botonAlternar.textContent = 'Mostrar Más'; // Cambiar texto del botón
    }
  });
});

document.addEventListener('DOMContentLoaded', function () { //funcion Mostrar más texto2
  const botonAlternar = document.getElementById('alternarTexto3');
  const texto = document.getElementById('texto3');
  const textoAdicional = texto.querySelector('.texto-adicional3');

  botonAlternar.addEventListener('click', function () {
    if (texto.classList.contains('texto-completo3')) {
      texto.classList.remove('texto-completo3');
      textoAdicional.style.display = 'inline'; // Mostrar texto adicional
      botonAlternar.textContent = 'Mostrar Menos'; // Cambiar texto del botón
    } else {
      texto.classList.add('texto-completo3');
      textoAdicional.style.display = 'none'; // Ocultar texto adicional
      botonAlternar.textContent = 'Mostrar Funciones y Personas que son consideradas como PEP' // Cambiar texto del botón
    }
  });
});

document.addEventListener('DOMContentLoaded', function () { //funcion Mostrar más texto2
  const botonAlternar = document.getElementById('alternarTexto4');
  const texto = document.getElementById('texto4');
  const textoAdicional = texto.querySelector('.texto-adicional4');

  botonAlternar.addEventListener('click', function () {
    if (texto.classList.contains('texto-completo4')) {
      texto.classList.remove('texto-completo4');
      textoAdicional.style.display = 'inline'; // Mostrar texto adicional
      botonAlternar.textContent = 'Mostrar Menos'; // Cambiar texto del botón
    } else {
      texto.classList.add('texto-completo4');
      textoAdicional.style.display = 'none'; // Ocultar texto adicional
      botonAlternar.textContent = 'Mostrar Definición' // Cambiar texto del botón
    }
  });
});

document.addEventListener('DOMContentLoaded', function () { //funcion Mostrar más texto2
  const botonAlternar = document.getElementById('alternarTexto5');
  const texto = document.getElementById('texto5');
  const textoAdicional = texto.querySelector('.texto-adicional5');

  botonAlternar.addEventListener('click', function () {
    if (texto.classList.contains('texto-completo5')) {
      texto.classList.remove('texto-completo5');
      textoAdicional.style.display = 'inline'; // Mostrar texto adicional
      botonAlternar.textContent = 'Mostrar Menos'; // Cambiar texto del botón
    } else {
      texto.classList.add('texto-completo5');
      textoAdicional.style.display = 'none'; // Ocultar texto adicional
      botonAlternar.textContent = 'Mostrar Definición' // Cambiar texto del botón
    }
  });
});

document.addEventListener('DOMContentLoaded', function () { //funcion Mostrar más texto2
  const botonAlternar = document.getElementById('alternarTexto6');
  const texto = document.getElementById('texto6');
  const textoAdicional = texto.querySelector('.texto-adicional6');

  botonAlternar.addEventListener('click', function () {
    if (texto.classList.contains('texto-completo6')) {
      texto.classList.remove('texto-completo6');
      textoAdicional.style.display = 'inline'; // Mostrar texto adicional
      botonAlternar.textContent = 'Mostrar Menos'; // Cambiar texto del botón
    } else {
      texto.classList.add('texto-completo6');
      textoAdicional.style.display = 'none'; // Ocultar texto adicional
      botonAlternar.textContent = 'Mostrar Definición' // Cambiar texto del botón
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('signature-canvas');
  const contexto = canvas.getContext('2d');
  const limpiarBtn = document.getElementById('limpiarFirma');

  limpiarBtn.addEventListener('click', function () {
    contexto.clearRect(0, 0, canvas.width, canvas.height);
  })
});


document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () { //hacer aparecer la opcion "Accionistas" a traves de un indice
  document.getElementById("accionistasBtn").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("accionistas").style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () { //hacer aparecer la opcion "Benefiaciarios Finales " a traves de un indice
  document.getElementById("benefFinalesBtn").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("benefFinales").style.display = "block";
  });
});


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
