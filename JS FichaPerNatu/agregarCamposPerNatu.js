//Persona Natural

// funcion agregar AAM
document.addEventListener('DOMContentLoaded', function () {
  var agregarAAMBtnPerNatu = document.getElementById('agregarAAMBtnPerNatu');
  var camposContainerAAM = document.getElementById('camposAAMPerNatu');
  var limpiarAAMBtn = document.getElementById('limpiarAAMBtn');

  limpiarAAMBtn.addEventListener('click', limpiarAAM)

  var campoIndex = 2;
  let maxIndex = 3;

  agregarAAMBtnPerNatu.addEventListener('click', function () {
    if (campoIndex <= maxIndex) {
      var nuevoCampoHTML = `
              <!-- código HTML-->
                      <div class="col-md-6">
              <label for="nombreAAMPerNatu${campoIndex}" class="form-label">Nombre Completo (${campoIndex})</label>
              <input type="text" name="nombreAAMPerNatu${campoIndex}" placeholder="Nombre Completo (${campoIndex})" class="form-control"
                id="nombreAAMPerNatu${campoIndex}">
            </div>
            <div class="col-md-6">
              <label for="rutAAMPerNatu${campoIndex}" class="form-label">RUT (${campoIndex})</label>
              <input type="text" name="rutAAMPerNatu${campoIndex}" placeholder="RUT (${campoIndex})" class="form-control" 
              id="rutAAMPerNatu${campoIndex}">
            </div>
            <br>
            <br>
            <br>
            <div class="col-md-6">
              <label for="nacionalidadAAMPerNatu${campoIndex}" class="form-label">Nacionalidad (${campoIndex})</label>
              <input type="text" name="nacionalidadAAMPerNatu${campoIndex}" placeholder="Nacionalidad (${campoIndex})" class="form-control"
                id="nacionalidadAAMPerNatu${campoIndex}">
            </div>
            <div class="col-md-6">
              <label for="correoAAMPerNatu${campoIndex}" class="form-label">Correo Electrónico (${campoIndex})</label>
              <input type="email" name="correoAAMPerNatu${campoIndex}" placeholder="Correo Electrónico (${campoIndex})" class="form-control"
                id="correoAAMPerNatu${campoIndex}">
            </div>
            <br>
            <br>
            <br>
            <div class="col-md-6">
              <label for="direccionAAMPerNatu${campoIndex}" class="form-label">Dirección (${campoIndex})</label>
              <input type="text" name="direccionAAMPerNatu${campoIndex}" placeholder="Dirección (${campoIndex})" class="form-control"
                id="direccionAAMPerNatu${campoIndex}">
            </div>
            <div class="col-md-6">
              <label for="comunaAAMPerNatu${campoIndex}" class="form-label">Comuna (${campoIndex})</label>
              <input type="text" name="comunaAAMPerNatu${campoIndex}" placeholder="Comuna (${campoIndex})" class="form-control"
                id="comunaAAMPerNatu${campoIndex}">
            </div>
            <br>
            <br>
            <br>
            <div class="col-md-6">
              <label for="estadoCivilAAMPerNatu${campoIndex}" class="form-label">Estado Civil (${campoIndex})</label>
              <input type="text" name="estadoCivilAAMPerNatu${campoIndex}" placeholder="Estado Civil (${campoIndex})" class="form-control"
                id="estadoCivilAAMPerNatu${campoIndex}">
            </div>
            <div class="col-md-6">
              <label for="telefonoAAMPerNatu${campoIndex}" class="form-label">Telefóno (${campoIndex})</label>
              <input type="tel" name="telefonoAAMPerNatu${campoIndex}" placeholder="Telefóno (${campoIndex})" class="form-control"
                id="telefonoAAMPerNatu${campoIndex}">
            </div>
              <br>
              <br>
              <br>
              <br>
          `;
      var nuevoCampoContainer = document.createElement('div');
      nuevoCampoContainer.classList.add('row');
      nuevoCampoContainer.innerHTML = nuevoCampoHTML;

      camposContainerAAM.appendChild(nuevoCampoContainer);

      campoIndex++;
    } else {
      alert("Solo pueden haber 3 personas autorizadas")
    }
  });

  function limpiarAAM() {
    if (campoIndex > 2) {
      var ultimoCampo = camposContainerAAM.lastElementChild;

      camposContainerAAM.removeChild(ultimoCampo);

      campoIndex--;
    } else {
      alert('No hay Personas AAM para limpiar')
    }
  }
});



document.addEventListener('DOMContentLoaded', function () {
  var agregarAAMBtnPerNatu = document.getElementById('agregarCtasCorrientesPerNatu');
  var camposContainerCtasCorrientes = document.getElementById('camposCtasCorrientesPerNatu');
  var limpiarCtasCorrientesBtn = document.getElementById('limpiarCtasCorrientesBtn');

  limpiarCtasCorrientesBtn.addEventListener('click', limpiarCtasCorrientes);

  var campoIndex = 2;
  var maxIndex = 3;

  agregarAAMBtnPerNatu.addEventListener('click', function () {
    if (campoIndex <= maxIndex) {
      var nuevoCampoHTML = `
              <!-- código HTML-->
              <div class="col-md-6">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Moneda</th>
                    <th scope="col">Banco (${campoIndex})</th>
                    <th scope="col">Tipo de Cuenta (${campoIndex})</th>
                    <th scope="col">N° de Cuenta (${campoIndex})</th>
                    <th scope="col">Cuenta Principal (${campoIndex})</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">CLP</th>
                    <td><input style="width: 170px;" type="text" id="bancoCLPPerNatu${campoIndex}"></td>
                    <td><input style="width: 170px;" type="text" id="tipoCuentaCLPPerNatu${campoIndex}"></td>
                    <td><input style="width: 170px;" type="text" id="nCuentaCLPPerNatu${campoIndex}"></td>
                    <td><input style="width: 170px;" type="text" id="cuentaPrincipalPerNatu${campoIndex}"></td>
                  </tr>
                  <tr>
                    <th scope="row">USS</th>
                    <td><input style="width: 170px;" type="text" id="bancoUSSPerNatu${campoIndex}"></td>
                    <td><input style="width: 170px;" type="text" id="tipoCuentaUSSPerNatu${campoIndex}"></td>
                    <td><input style="width: 170px;" type="text" id="nCuentaUSSPerNatu${campoIndex}"></td>
                    <td><input style="width: 170px;" type="text" id="cuentaPrincipalPerNatu${campoIndex}"></td>
                  </tr>
                </tbody>
              </table>
              <br>
            </div>
              <br>
              <br>
          `;
      var nuevoCampoContainer = document.createElement('div');
      nuevoCampoContainer.classList.add('row');
      nuevoCampoContainer.innerHTML = nuevoCampoHTML;

      camposContainerCtasCorrientes.appendChild(nuevoCampoContainer);

      campoIndex++;
    } else {
      alert("El Máximo cuentas corrientes a agregar es de 3")
    }
  });

  function limpiarCtasCorrientes() {
    if (campoIndex > 2) {
      var ultimoCampo = camposContainerCtasCorrientes.lastElementChild;

      camposContainerCtasCorrientes.removeChild(ultimoCampo);

      campoIndex--;
    } else {
      alert('No hay Cuentas Corrientes para limpiar')
    }
  }
});