// funcion agregar Gerente
document.addEventListener('DOMContentLoaded', function () {
    var agregarCampoBtn = document.getElementById('agregarGerenteBtn');
    var camposContainer = document.getElementById('camposGerente');
    var limpiarGerentesBtn = document.getElementById('limpiarGerentesBtn');

    let campoIndex = 2;
    let maxIndex = 2;

    limpiarGerentesBtn.addEventListener('click', limpiarGerentes);

    agregarCampoBtn.addEventListener('click', function () {
        if (campoIndex <= maxIndex) {
            var nuevoCampoHTML = `
                    <!-- código HTML-->
                    <div class="col-md-6">
                            <label for="nombreGerente${campoIndex}" class="form-label">Nombre Completo (${campoIndex})</label>
                            <input type="text" name="nombreGerente${campoIndex}" placeholder="Nombre Completo (${campoIndex})" class="form-control" id="nombreGerente${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="rutGerente${campoIndex}" class="form-label">RUT (${campoIndex})</label>
                            <input type="text" name="rutGerente${campoIndex}" placeholder="RUT (${campoIndex})" class="form-control" id="rutGerente${campoIndex}">
                        </div>
                        <br>
                        <br>
                        <br>
                        <div class="col-md-6">
                            <label for="nacionalidadGerente${campoIndex}" class="form-label">Nacionalidad (${campoIndex})</label>
                            <input type="text" name="nacionalidadGerente${campoIndex}" placeholder="Nacionalidad (${campoIndex})" class="form-control"
                                id="nacionalidadGerente${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="correoGerente${campoIndex}" class="form-label">Correo Electrónico (${campoIndex})</label>
                            <input type="email" name="correoGerente${campoIndex}" placeholder="Correo Electrónico (${campoIndex})"
                                class="form-control" id="correoGerente${campoIndex}">
                        </div>
                        <br>
                        <br>
                        <br>
                        <div class="col-md-6">
                            <label for="direccionGerente${campoIndex}" class="form-label">Dirección (${campoIndex})</label>
                            <input type="text" name="direccionGerente${campoIndex}" placeholder="Dirección (${campoIndex})" class="form-control"
                                id="direccionGerente${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="comunaGerente${campoIndex}" class="form-label">Comuna (${campoIndex})</label>
                            <input type="text" name="comunaGerente${campoIndex}" placeholder="Comuna (${campoIndex})" class="form-control"
                                id="comunaGerente${campoIndex}">
                        </div>
                        <br>
                        <br>
                        <br>
                        <div class="col-md-6">
                            <label for="estadoCivilGerente${campoIndex}" class="form-label">Estado Civil (${campoIndex})</label>
                            <input type="text" name="estadoCivilGerente${campoIndex}" placeholder="Estado Civil (${campoIndex})" class="form-control"
                                id="estadoCivilGerente${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="telefono1Gerente${campoIndex}" class="form-label">Teléfono 1 (${campoIndex})</label>
                            <input type="tel" name="telefono1Gerente${campoIndex}" placeholder="Teléfono 1 (${campoIndex})" class="form-control"
                                id="telefono1Gerente${campoIndex}">
                        </div>
                        <br>
                        <br>
                        <br>
                        <div class="col-md-6">
                            <label for="telefono2Gerente${campoIndex}" class="form-label">Telefóno 2 (${campoIndex})</label>
                            <input type="tel" name="telefono2Gerente${campoIndex}" placeholder="Telefóno 2 (${campoIndex})" class="form-control"
                                id="telefono2Gerente${campoIndex}">
                        </div>
                        <br>
                        <br>
                        <br>
                        <br>
                `;
            var nuevoCampoContainer = document.createElement('div');
            nuevoCampoContainer.classList.add('row');
            nuevoCampoContainer.innerHTML = nuevoCampoHTML;

            camposContainer.appendChild(nuevoCampoContainer);

            campoIndex++;
        } else {
            alert('Solo se puede agregar 1 gerente o representante legal')
        }
    });

    function limpiarGerentes() {
        if (campoIndex > 2) {
            var ultimoCampo = camposContainer.lastElementChild;

            camposContainer.removeChild(ultimoCampo);

            campoIndex--;
        } else {
            alert('No hay gerentes para limpiar')
        }
    }
});

// funcion agregar apoderados
document.addEventListener('DOMContentLoaded', function () {
    var agregarCampoBtn = document.getElementById('agregarCampoBtn');
    var camposContainer = document.getElementById('camposApoderados');
    var limpiarApoderadosBtn = document.getElementById('limpiarApoderadosBtn');

    limpiarApoderadosBtn.addEventListener('click', limpiarApoderados);

    var campoIndex = 2;
    let maxIndex = 7;

    agregarCampoBtn.addEventListener('click', function () {
        if (campoIndex <= maxIndex) {
            var nuevoCampoHTML = `
                    <!-- código HTML-->
                    <div class="col-md-6">
                        <label for="nombreApoderado${campoIndex}" class="form-label">Nombre Completo (${campoIndex})</label>
                        <input type="text" name="nombreApoderado${campoIndex}" placeholder="Nombre Completo (${campoIndex})" class="form-control"
                            id="nombreApoderado${campoIndex}">
                    </div>
                    <div class="col-md-6">
                        <label for="rutApoderado${campoIndex}" class="form-label">RUT (${campoIndex})</label>
                        <input type="text" name="rutApoderado${campoIndex}" placeholder="RUT (${campoIndex})" class="form-control"
                            id="rutApoderado${campoIndex}">
                    </div>
                    <br>
                        <br>
                        <br>
                    <div class="col-md-6">
                       <label for="nacionalidadApoderado${campoIndex}" class="form-label">Nacionalidad (${campoIndex})</label>
                       <input type="text" name="nacionalidadApoderado${campoIndex}" placeholder="Nacionalidad (${campoIndex})" class="form-control" id="nacionalidadApoderado${campoIndex}">
                    </div>
                    <div class="col-md-6">
                       <label for="correoApoderado${campoIndex}" class="form-label">Correo Electrónico (${campoIndex})</label>
                       <input type="email" name="correoApoderado${campoIndex}" placeholder="Correo Electrónico (${campoIndex})"
                       class="form-control" id="correoApoderado${campoIndex}">
                    </div>
                    <br>
                        <br>
                        <br>
                    <div class="col-md-6">
                       <label for="direccionApoderado${campoIndex}" class="form-label">Dirección (${campoIndex})</label>
                       <input type="text" name="direccionApoderado${campoIndex}" placeholder="Dirección (${campoIndex})" class="form-control"
                       id="direccionApoderado${campoIndex}">
                    </div>
                    <div class="col-md-6">
                       <label for="comunaApoderado${campoIndex}" class="form-label">Comuna (${campoIndex})</label>
                       <input type="text" name="comunaApoderado${campoIndex}" placeholder="Comuna (${campoIndex})" class="form-control"
                       id="comunaApoderado${campoIndex}">
                    </div>
                    <br>
                        <br>
                        <br>
                   <div class="col-md-6">
                       <label for="estadoCivilApoderado${campoIndex}" class="form-label">Estado Civil (${campoIndex})</label>
                       <input type="text" name="estadoCivilApoderado${campoIndex}" placeholder="Estado Civil (${campoIndex})"
                       class="form-control" id="estadoCivilApoderado${campoIndex}">
                    </div>
                    <div class="col-md-6">
                       <label for="telefono1Apoderado${campoIndex}" class="form-label">Telefóno 1 (${campoIndex})</label>
                       <input type="tel" name="telefono1Apoderado${campoIndex}" placeholder="Telefóno 1 (${campoIndex})" class="form-control"
                       id="telefono1Apoderado${campoIndex}">
                    </div>
                    <br>
                        <br>
                        <br>
                   <div class="col-md-6">
                       <label for="telefono2Apoderado${campoIndex}" class="form-label">Telefóno 2 (${campoIndex})</label>
                       <input type="tel" name="telefono2Apoderado${campoIndex}" placeholder="Telefóno 2 (${campoIndex})" class="form-control"
                       id="telefono2Apoderado${campoIndex}">
                    </div>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                `;
            var nuevoCampoContainer = document.createElement('div');
            nuevoCampoContainer.classList.add('row');
            nuevoCampoContainer.innerHTML = nuevoCampoHTML;

            camposContainer.appendChild(nuevoCampoContainer);

            campoIndex++;
        } else {
            alert('El máximo de apoderados agregados es de 7')
        }
    });

    function limpiarApoderados() {
        if (campoIndex > 2) {
            var ultimoCampo = camposContainer.lastElementChild;

            camposContainer.removeChild(ultimoCampo);

            campoIndex--;
        } else {
            alert('No hay gerentes para limpiar')
        }
    }
});

// funcion agregar AAM
document.addEventListener('DOMContentLoaded', function () {
    var agregarAAMBtn = document.getElementById('agregarAAMBtn');
    var camposContainerAAM = document.getElementById('camposAAM');
    var limpiarAAMBtn = document.getElementById('limpiarAAMBtn');

    limpiarAAMBtn.addEventListener('click', limpiarAAM)

    var campoIndex = 2;
    let maxIndex = 3;
    agregarAAMBtn.addEventListener('click', function () {
        if (campoIndex <= maxIndex) {
            var nuevoCampoHTML = `
                <!-- código HTML-->
                        <div class="col-md-6">
                            <label for="nombreAAM${campoIndex}" class="form-label">Nombre Completo (${campoIndex})</label>
                            <input type="text" name="nombreAAM${campoIndex}" placeholder="Nombre Completo (${campoIndex})" class="form-control"
                                id="nombreAAM${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="rutAAM${campoIndex}" class="form-label">RUT (${campoIndex})</label>
                            <input type="text" name="rutAAM${campoIndex}" placeholder="RUT (${campoIndex})" class="form-control" id="rutAAM${campoIndex}">
                        </div>
                        <br>
                        <br>
                        <br>
                        <div class="col-md-6">
                            <label for="nacionalidadAAM${campoIndex}" class="form-label">Nacionalidad (${campoIndex})</label>
                            <input type="text" name="nacionalidadAAM${campoIndex}" placeholder="Nacionalidad (${campoIndex})" class="form-control"
                                id="nacionalidadAAM${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="correoAAM${campoIndex}" class="form-label">Correo Electrónico (${campoIndex})</label>
                            <input type="email" name="correoAAM${campoIndex}" placeholder="Correo Electrónico (${campoIndex})" class="form-control"
                                id="correoAAM${campoIndex}">
                        </div>
                        <br>
                        <br>
                        <br>
                        <div class="col-md-6">
                            <label for="direccionAAM${campoIndex}" class="form-label">Dirección (${campoIndex})</label>
                            <input type="text" name="direccionAAM${campoIndex}" placeholder="Dirección (${campoIndex})" class="form-control"
                                id="direccionAAM${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="comunaAAM${campoIndex}" class="form-label">Comuna (${campoIndex})</label>
                            <input type="text" name="comunaAAM${campoIndex}" placeholder="Comuna (${campoIndex})" class="form-control"
                                id="comunaAAM${campoIndex}">
                        </div>
                        <br>
                        <br>
                        <br>
                        <div class="col-md-6">
                            <label for="estadoCivilAAM${campoIndex}" class="form-label">Estado Civil (${campoIndex})</label>
                            <input type="text" name="estadoCivilAAM${campoIndex}" placeholder="Estado Civil (${campoIndex})" class="form-control"
                                id="estadoCivilAAM${campoIndex}">
                        </div>
                        <div class="col-md-6">
                            <label for="telefono1AAM${campoIndex}" class="form-label">Telefóno 1 (${campoIndex})</label>
                            <input type="tel" name="telefono1AAM${campoIndex}" placeholder="Telefóno 1 (${campoIndex})" class="form-control"
                                id="telefono1AAM${campoIndex}">
                        </div>
                        <br>
                        <br>
                        <br>
                        <div class="col-md-6">
                            <label for="telefono2AAM${campoIndex}" class="form-label">Telefóno 2 (${campoIndex})</label>
                            <input type="tel" name="telefono2AAM${campoIndex}" placeholder="Telefóno 2 (${campoIndex})" class="form-control"
                                id="telefono2AAM${campoIndex}">
                        </div>
                <br>
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
            alert('Solo pueden haber 3 personas autorizadas')
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


document.addEventListener('DOMContentLoaded', function () { //agregar cta corriente
    var agregarCampoBtn = document.getElementById('agregarCtasCorrientes');
    var camposCtasCorrientes = document.getElementById('camposCtasCorrientes');
    var limpiarCtasCorrientesBtn = document.getElementById('limpiarCtasCorrientesBtn');

    limpiarCtasCorrientesBtn.addEventListener('click', limpiarCtasCorrientes);

    var campoIndex = 2;
    let maxIndex = 3;

    agregarCampoBtn.addEventListener('click', function () {
        if (campoIndex <= maxIndex) {
            var nuevoCampoHTML = `
            <!-- Código HTML para agregar campos -->
            <div class="col-md-6">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Moneda</th>
                                        <th scope="col">Banco (${campoIndex})</th>
                                        <th scope="col">Tipo de Cuenta (${campoIndex})</th>
                                        <th scope="col">N° de Cuenta (${campoIndex})</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">CLP</th>
                                        <td><input type="text" id="bancoCLP${campoIndex}"></td>
                                        <td><input type="text" id="tipoCuentaCLP${campoIndex}"></td>
                                        <td><input type="number" id="nCuentaCLP${campoIndex}"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">USS</th>
                                        <td><input type="text" id="bancoUSS${campoIndex}"></td>
                                        <td><input type="text" id="tipoCuentaUSS${campoIndex}"></td>
                                        <td><input type="number" id="nCuentaUSS${campoIndex}"></td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                                      `;
            var nuevoCampoContainer = document.createElement('div');
            nuevoCampoContainer.classList.add('row');
            nuevoCampoContainer.innerHTML = nuevoCampoHTML;

            camposCtasCorrientes.appendChild(nuevoCampoContainer);

            campoIndex++;
        } else {
            alert('El máximo de cuentas corrientes es de 3')
        }
    });

    function limpiarCtasCorrientes() {
        if (campoIndex > 2) {
            var ultimoCampo = camposCtasCorrientes.lastElementChild;

            camposCtasCorrientes.removeChild(ultimoCampo);

            campoIndex--;
        } else {
            alert('No hay Cuentas Corrientes para limpiar')
        }
    }
});


//accionistas
document.addEventListener('DOMContentLoaded', function () {
    const agregarAccionistasBtn = document.getElementById('agregarAccionistasBtn');
    const camposAccionista = document.getElementById('camposAccionista');
    const limpiarAccionistasBtn = document.getElementById('limpiarAccionistasBtn');

    let campoIndex = 2;
    const maxIndex = 10;

    limpiarAccionistasBtn.addEventListener('click', limpiarAccionistas);

    agregarAccionistasBtn.addEventListener('click', function () {
        if (campoIndex <= maxIndex) {
            const nuevoCampoHTML = `
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="razonAccio${campoIndex}" class="form-label">Razón Social (${campoIndex})</label>
                        <input type="text" name="razonAccio${campoIndex}" placeholder="Razón Social (${campoIndex})" class="form-control" id="razonAccio${campoIndex}">
                    </div>
                    <br>
                    <div class="col-md-6">
                        <label for="nomCompletoAccio${campoIndex}" class="form-label">Nombre Completo (${campoIndex})</label>
                        <input type="text" name="nomCompletoAccio${campoIndex}" placeholder="Nombre Completo (${campoIndex})" class="form-control" id="nomCompletoAccio${campoIndex}">
                    </div>
                    <br>
                    <div class="col-md-6">
                        <label for="rutAccio${campoIndex}" class="form-label">RUT (${campoIndex})</label>
                        <input type="text" name="rutAccio${campoIndex}" placeholder="RUT (${campoIndex})" class="form-control" id="rutAccio${campoIndex}">
                    </div>
                    <br>
                    <br>
                    <br>
                    <br>
                    <div class="input-group text-center residenciaFiscal">
                        <input type="text" readonly class="form-control" value="¿Es el accionista (${campoIndex}) considerado beneficiario final?" style="text-align: center; font-size: large; font-weight:bolder; text-decoration: underline;">
                        <div class="input-group-text">
                            <div class="form-check form-check-inline">
                                <label class="form-check-label" style="padding-right: 5px;">Si</label>
                                <input name="accionistaBenefPregunta${campoIndex}" class="form-check-input" type="radio" value="0" id="accionistaBenefSi${campoIndex}">
                            </div>
                        </div>
                        <div class="input-group-text">
                            <div class="form-check form-check-inline">
                                <label class="form-check-label" style="padding-right: 5px;">No</label>
                                <input name="accionistaBenefPregunta${campoIndex}" class="form-check-input" type="radio" value="1" id="accionistaBenefNo${campoIndex}">
                            </div>
                        </div> 
                    </div>
                </div>
            `;

            const nuevoCampoContainer = document.createElement('div');
            nuevoCampoContainer.innerHTML = nuevoCampoHTML;
            camposAccionista.appendChild(nuevoCampoContainer);

            campoIndex++;
        } else {
            alert('El máximo de accionistas a agregar es de 10');
        }
    });

    function limpiarAccionistas() { //limpiar a los accionistas agregados
        if (campoIndex > 2) {
            const ultimoCampo = camposAccionista.lastElementChild;
            camposAccionista.removeChild(ultimoCampo);
            campoIndex--;
        } else {
            alert('No hay accionistas para limpiar');
        }
    }
});


//beneficiarios
document.addEventListener('DOMContentLoaded', function () {
    const agregarBenefBtn = document.getElementById('agregarBenef');
    const camposBenefFinales = document.getElementById('camposBenefFinales');
    const limpiarBeneficiariosBtn = document.getElementById('limpiarBeneficiariosBtn');

    let campoIndex = 2;
    const maxIndex = 10;

    limpiarBeneficiariosBtn.addEventListener('click', limpiarBeneficiarios);

    agregarBenefBtn.addEventListener('click', function () {
        if (campoIndex <= maxIndex) {
            const nuevoCampoHTML = `
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="nomBenef${campoIndex}" class="form-label">Nombre Completo (${campoIndex})</label>
                        <input type="text" name="nomBenef${campoIndex}" placeholder="Nombre Completo (${campoIndex})" class="form-control" id="nomBenef${campoIndex}">
                    </div>
                    <br>
                    <div class="col-md-6">
                        <label for="rutBenef${campoIndex}" class="form-label">RUT (${campoIndex})</label>
                        <input type="text" name="rutBenef${campoIndex}" placeholder="RUT (${campoIndex})" class="form-control" id="rutBenef${campoIndex}">
                    </div>
                    <br>
                    <div class="col-md-6">
                        <label for="direccionBenef${campoIndex}" class="form-label">Dirección (${campoIndex})</label>
                        <input type="text" name="direccionBenef${campoIndex}" placeholder="Dirección (${campoIndex})" class="form-control" id="direccionBenef${campoIndex}">
                    </div>
                    <br>
                    <div class="col-md-6">
                        <label for="porcentajeBenef${campoIndex}" class="form-label">Porcentaje de participación beneficiario (${campoIndex})</label>
                        <input type="number" name="porcentajeBenef${campoIndex}" placeholder="% (${campoIndex})" class="form-control" id="porcentajeBenef${campoIndex}" value="10" min="10" max="100">
                    </div>
                    <br>
                    <div class="mb-4"></div>
                </div>`;
            
            const nuevoCampoContainer = document.createElement('div');
            nuevoCampoContainer.innerHTML = nuevoCampoHTML;
            camposBenefFinales.appendChild(nuevoCampoContainer);

            campoIndex++;
        } else {
            alert('El máximo de beneficiarios a agregar es de 10');
        }
    });

    function limpiarBeneficiarios() {
        if (campoIndex > 2) {
            var ultimoCampo = camposBenefFinales.lastElementChild;
            camposBenefFinales.removeChild(ultimoCampo);
            campoIndex--;
        } else {
            alert('No hay Beneficiarios para limpiar');
        }
    }
});