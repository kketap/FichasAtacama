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


/*var clic = 1;
function divAuto(){ 
   if(clic==1){
   document.getElementById("respuestaExtranjSi").style.height = "100px";
   clic = clic + 1;
   } else{
    document.getElementById("respuestaExtranjSi").style.height = "0px";      
    clic = 1;
   }   
}; */

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("accionistasBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    document.getElementById("accionistas").style.display = "block";
  });
});

