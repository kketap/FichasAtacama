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

document.addEventListener('DOMContentLoaded', function () { //funcion Mostrar más texto2
  const botonAlternar = document.getElementById('alternarTexto7');
  const texto = document.getElementById('texto7');
  const textoAdicional = texto.querySelector('.texto-adicional7');

  botonAlternar.addEventListener('click', function () {
    if (texto.classList.contains('texto-completo7')) {
      texto.classList.remove('texto-completo7');
      textoAdicional.style.display = 'inline'; // Mostrar texto adicional
      botonAlternar.textContent = 'Mostrar Menos'; // Cambiar texto del botón
    } else {
      texto.classList.add('texto-completo7');
      textoAdicional.style.display = 'none'; // Ocultar texto adicional
      botonAlternar.textContent = 'Mostrar Definición' // Cambiar texto del botón
    }
  });
});

document.addEventListener('DOMContentLoaded', function () { //funcion Mostrar más texto2
  const botonAlternar = document.getElementById('alternarTexto8');
  const texto = document.getElementById('texto8');
  const textoAdicional = texto.querySelector('.texto-adicional8');

  botonAlternar.addEventListener('click', function () {
    if (texto.classList.contains('texto-completo8')) {
      texto.classList.remove('texto-completo8');
      textoAdicional.style.display = 'inline'; // Mostrar texto adicional
      botonAlternar.textContent = 'Mostrar Menos'; // Cambiar texto del botón
    } else {
      texto.classList.add('texto-completo8');
      textoAdicional.style.display = 'none'; // Ocultar texto adicional
      botonAlternar.textContent = 'Mostrar Definición' // Cambiar texto del botón
    }
  });
});

document.addEventListener('DOMContentLoaded', function () { //funcion Mostrar más texto2
  const botonAlternar = document.getElementById('alternarTexto9');
  const texto = document.getElementById('texto9');
  const textoAdicional = texto.querySelector('.texto-adicional9');

  botonAlternar.addEventListener('click', function () {
    if (texto.classList.contains('texto-completo9')) {
      texto.classList.remove('texto-completo9');
      textoAdicional.style.display = 'inline'; // Mostrar texto adicional
      botonAlternar.textContent = 'Mostrar Menos'; // Cambiar texto del botón
    } else {
      texto.classList.add('texto-completo9');
      textoAdicional.style.display = 'none'; // Ocultar texto adicional
      botonAlternar.textContent = 'Mostrar Definición' // Cambiar texto del botón
    }
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


document.addEventListener('DOMContentLoaded', function () {
  // Agregar un event listener al botón o a algún evento que desencadene la acción
  // Supongamos que tienes un botón con el id "mostrarDatosBtn" que se utilizará para recuperar los datos y mostrarlos
  document.getElementById('mostrarDatosAccionistas').addEventListener('click', function () {
    // Obtener los valores ingresados por el usuario
    const nombreCompleto = document.getElementById('nomCompletoAccio').value;
    const rut = document.getElementById('rutAccio').value;

    // Crear un nuevo elemento para mostrar los datos recuperados
    const datosAccionistasRecuperados = document.getElementById('datosAccionistasRecuperados');
    datosAccionistasRecuperados.innerHTML = ''; // Limpiar cualquier contenido anterior

    // Crear elementos para mostrar los datos
    const nombreCompletoP = document.createElement('p');
    nombreCompletoP.textContent = 'Nombre Completo: ' + nombreCompleto;

    const rutP = document.createElement('p');
    rutP.textContent = 'RUT: ' + rut;

    // Agregar los elementos al div de datos recuperados
    datosAccionistasRecuperados.appendChild(nombreCompletoP);
    datosAccionistasRecuperados.appendChild(rutP);
  });
});
