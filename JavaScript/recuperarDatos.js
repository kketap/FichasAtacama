document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('mostrarDatosAccionistas').addEventListener('click', function () {
    const datosAccionistasRecuperados = document.getElementById('datosAccionistasRecuperados');
    datosAccionistasRecuperados.innerHTML = ''; // Limpiar cualquier contenido anterior

    let accionistaIndex = 1;

    function crearPreguntaClientePEP(numeroAccionista) {
      const preguntaClientePEP = document.createElement('h5');
      preguntaClientePEP.innerHTML = `<br> ¿Es el Accionista (${accionistaIndex}) Cliente PEP?`;

      const divClientePEP = document.createElement('div');
      divClientePEP.className = 'input-group text-center';

      const divSi = document.createElement('div');
      divSi.className = 'form-check form-check-inline';
      divSi.innerHTML = '<label style="padding-right: 10px;">Si</label> <input name="residenciaFiscalPregunta' + numeroAccionista + '" class="form-check-input" type="radio" value="0">';

      const divNo = document.createElement('div');
      divNo.className = 'form-check form-check-inline';
      divNo.innerHTML = '<label style="padding-right: 10px;">No</label> <input name="residenciaFiscalPregunta' + numeroAccionista + '" class="form-check-input" type="radio" value="1">';

      divClientePEP.appendChild(divSi);
      divClientePEP.appendChild(divNo);

      accionistaIndex++;

      return [preguntaClientePEP, divClientePEP];
    }

    const accionistas = [
      { nombre: document.getElementById('nomCompletoAccio').value, rut: document.getElementById('rutAccio').value },
      { nombre: document.getElementById('nomCompletoAccio2') ? document.getElementById('nomCompletoAccio2').value : null, rut: document.getElementById('rutAccio2') ? document.getElementById('rutAccio2').value : null },
      { nombre: document.getElementById('nomCompletoAccio3') ? document.getElementById('nomCompletoAccio3').value : null, rut: document.getElementById('rutAccio3') ? document.getElementById('rutAccio3').value : null },
      { nombre: document.getElementById('nomCompletoAccio4') ? document.getElementById('nomCompletoAccio4').value : null, rut: document.getElementById('rutAccio4') ? document.getElementById('rutAccio4').value : null },
      { nombre: document.getElementById('nomCompletoAccio5') ? document.getElementById('nomCompletoAccio5').value : null, rut: document.getElementById('rutAccio5') ? document.getElementById('rutAccio5').value : null },
    ];


    accionistas.forEach(function (accionista, index) {
      if (accionista.nombre && accionista.rut) {
        const datosAccionista = document.createElement('p');
        datosAccionista.innerHTML = 'Nombre Completo Accionista (' + (index + 1) + ') : ' + accionista.nombre + '<br> RUT Accionista (' + (index + 1) + ') :' + accionista.rut;


        const [preguntaClientePEP, divClientePEP] = crearPreguntaClientePEP(index + 1);
        datosAccionista.appendChild(preguntaClientePEP);
        datosAccionista.appendChild(divClientePEP);

        datosAccionistasRecuperados.appendChild(datosAccionista);
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('mostrarDatosBeneficiarios').addEventListener('click', function () {
    const datosBeneficiariosRecuperados = document.getElementById('datosBeneficiariosRecuperados');
    datosBeneficiariosRecuperados.innerHTML = ''; // Limpiar cualquier contenido anterior

    let beneficiarioIndex = 1;

    function crearPreguntaClientePEP(numeroBeneficiario) {
      const preguntaClientePEP = document.createElement('h5');
      preguntaClientePEP.innerHTML = `<br> ¿Es el Beneficiario (${beneficiarioIndex}) Cliente PEP?`;

      const divClientePEP = document.createElement('div');
      divClientePEP.className = 'input-group text-center';

      const divSi = document.createElement('div');
      divSi.className = 'form-check form-check-inline';
      divSi.innerHTML = '<label style="padding-right: 10px;">Si</label> <input name="residenciaFiscalPregunta' + numeroBeneficiario + '" class="form-check-input" type="radio" value="0">';

      const divNo = document.createElement('div');
      divNo.className = 'form-check form-check-inline';
      divNo.innerHTML = '<label style="padding-right: 10px;">No</label> <input name="residenciaFiscalPregunta' + numeroBeneficiario + '" class="form-check-input" type="radio" value="1">';

      divClientePEP.appendChild(divSi);
      divClientePEP.appendChild(divNo);

      beneficiarioIndex++;

      return [preguntaClientePEP, divClientePEP];
    }

    const beneficiario = [
      { nombre: document.getElementById('nomBenef').value, rut: document.getElementById('rutBenef').value },
      { nombre: document.getElementById('nomBenef2') ? document.getElementById('nomBenef2').value : null, rut: document.getElementById('rutBenef2') ? document.getElementById('rutBenef2').value : null },
      { nombre: document.getElementById('nomBenef3') ? document.getElementById('nomBenef3').value : null, rut: document.getElementById('rutBenef3') ? document.getElementById('rutBenef3').value : null },
      { nombre: document.getElementById('nomBenef4') ? document.getElementById('nomBenef4').value : null, rut: document.getElementById('rutBenef4') ? document.getElementById('rutBenef4').value : null },
      { nombre: document.getElementById('nomBenef5') ? document.getElementById('nomBenef5').value : null, rut: document.getElementById('rutBenef5') ? document.getElementById('rutBenef5').value : null }, ,
    ];


    beneficiario.forEach(function (beneficiario, index) {
      if (beneficiario.nombre && beneficiario.rut) {
        const datosBeneficiario = document.createElement('p');
        datosBeneficiario.innerHTML = 'Nombre Completo Beneficiario (' + (index + 1) + ') : ' + beneficiario.nombre + '<br> RUT Beneficiario (' + (index + 1) + ') :' + beneficiario.rut;

        const [preguntaClientePEP, divClientePEP] = crearPreguntaClientePEP(index + 1);
        datosBeneficiario.appendChild(preguntaClientePEP);
        datosBeneficiario.appendChild(divClientePEP);

        datosBeneficiariosRecuperados.appendChild(datosBeneficiario);
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('mostrarResidenciaAccio').addEventListener('click', function () {
    const datosAccionistasRecuperados = document.getElementById('datosResidenciaAccioRecuperados');
    datosAccionistasRecuperados.innerHTML = ''; // Limpiar cualquier contenido anterior

    let accionistaIndex = 1;

    function crearPreguntaResidencia(numeroAccionista) {
      const preguntaResidencia = document.createElement('h5');
      preguntaResidencia.innerHTML = `<br> ¿Tiene el Accionista (${accionistaIndex}) Residencia Fiscal en Extranjero?`;

      const divResidencia = document.createElement('div');
      divResidencia.className = 'input-group text-center';

      const divSi = document.createElement('div');
      divSi.className = 'form-check form-check-inline';
      divSi.innerHTML = '<label style="padding-right: 10px;">Si</label> <input name="residenciaFiscalPregunta' + numeroAccionista + '" class="form-check-input" type="radio" value="0">';

      const divNo = document.createElement('div');
      divNo.className = 'form-check form-check-inline';
      divNo.innerHTML = '<label style="padding-right: 10px;">No</label> <input name="residenciaFiscalPregunta' + numeroAccionista + '" class="form-check-input" type="radio" value="1">';

      divResidencia.appendChild(divSi);
      divResidencia.appendChild(divNo);

      accionistaIndex++;

      return [preguntaResidencia, divResidencia];
    }

    const accionistas = [
      { nombre: document.getElementById('nomCompletoAccio').value, rut: document.getElementById('rutAccio').value },
      { nombre: document.getElementById('nomCompletoAccio2') ? document.getElementById('nomCompletoAccio2').value : null, rut: document.getElementById('rutAccio2') ? document.getElementById('rutAccio2').value : null },
      { nombre: document.getElementById('nomCompletoAccio3') ? document.getElementById('nomCompletoAccio3').value : null, rut: document.getElementById('rutAccio3') ? document.getElementById('rutAccio3').value : null },
      { nombre: document.getElementById('nomCompletoAccio4') ? document.getElementById('nomCompletoAccio4').value : null, rut: document.getElementById('rutAccio4') ? document.getElementById('rutAccio4').value : null },
      { nombre: document.getElementById('nomCompletoAccio5') ? document.getElementById('nomCompletoAccio5').value : null, rut: document.getElementById('rutAccio5') ? document.getElementById('rutAccio5').value : null },
    ];


    accionistas.forEach(function (accionista, index) {
      if (accionista.nombre && accionista.rut) {
        const datosAccionista = document.createElement('p');
        datosAccionista.innerHTML = 'Nombre Completo Accionista (' + (index + 1) + ') : ' + accionista.nombre + '<br> RUT Accionista (' + (index + 1) + ') :' + accionista.rut;


        const [preguntaResidencia, divResidencia] = crearPreguntaResidencia(index + 1);
        datosAccionista.appendChild(preguntaResidencia);
        datosAccionista.appendChild(divResidencia);

        datosAccionistasRecuperados.appendChild(datosAccionista);
      }
    });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('mostrarResidenciaBeneficiarios').addEventListener('click', function () {
    const datosBeneficiariosRecuperados = document.getElementById('datosResidenciaBenefRecuperados');
    datosBeneficiariosRecuperados.innerHTML = ''; // Limpiar cualquier contenido anterior

    let beneficiarioIndex = 1;

    function crearPreguntaResidencia(numeroBeneficiario) {
      const preguntaResidencia = document.createElement('h5');
      preguntaResidencia.innerHTML = `<br> ¿Tiene el Beneficiario (${beneficiarioIndex}) Residencia Fiscal en Extranjero?`;

      const divResidencia = document.createElement('div');
      divResidencia.className = 'input-group text-center';

      const divSi = document.createElement('div');
      divSi.className = 'form-check form-check-inline';
      divSi.innerHTML = '<label style="padding-right: 10px;">Si</label> <input name="residenciaFiscalPregunta' + numeroBeneficiario + '" class="form-check-input" type="radio" value="0">';

      const divNo = document.createElement('div');
      divNo.className = 'form-check form-check-inline';
      divNo.innerHTML = '<label style="padding-right: 10px;">No</label> <input name="residenciaFiscalPregunta' + numeroBeneficiario + '" class="form-check-input" type="radio" value="1">';

      divResidencia.appendChild(divSi);
      divResidencia.appendChild(divNo);

      beneficiarioIndex++;

      return [preguntaResidencia, divResidencia];
    }

    const beneficiario = [
      { nombre: document.getElementById('nomBenef').value, rut: document.getElementById('rutBenef').value },
      { nombre: document.getElementById('nomBenef2') ? document.getElementById('nomBenef2').value : null, rut: document.getElementById('rutBenef2') ? document.getElementById('rutBenef2').value : null },
      { nombre: document.getElementById('nomBenef3') ? document.getElementById('nomBenef3').value : null, rut: document.getElementById('rutBenef3') ? document.getElementById('rutBenef3').value : null },
      { nombre: document.getElementById('nomBenef4') ? document.getElementById('nomBenef4').value : null, rut: document.getElementById('rutBenef4') ? document.getElementById('rutBenef4').value : null },
      { nombre: document.getElementById('nomBenef5') ? document.getElementById('nomBenef5').value : null, rut: document.getElementById('rutBenef5') ? document.getElementById('rutBenef5').value : null }, ,
    ];


    beneficiario.forEach(function (beneficiario, index) {
      if (beneficiario.nombre && beneficiario.rut) {
        const datosBeneficiario = document.createElement('p');
        datosBeneficiario.innerHTML = 'Nombre Completo Beneficiario (' + (index + 1) + ') : ' + beneficiario.nombre + '<br> RUT Beneficiario (' + (index + 1) + ') :' + beneficiario.rut;


        const [preguntaResidencia, divResidencia] = crearPreguntaResidencia(index + 1);
        datosBeneficiario.appendChild(preguntaResidencia);
        datosBeneficiario.appendChild(divResidencia);

        datosBeneficiariosRecuperados.appendChild(datosBeneficiario);
      }
    });
  });
});