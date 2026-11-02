"use strict";

const xhr = new XMLHttpRequest();
const sectionUsers = document.getElementById('section-users');

// Inicializa eventos AJAX y realiza la petición principal
$(document).ready(() => {
    $(document).ajaxStart(() => $('#loading').show());
    $(document).ajaxStop(() => $('#loading').hide());
    $(document).ajaxError(() => mostrarError('ERROR', 'Ocurrió un problema en la solicitud.'));

    const URL = 'https://jsonplaceholder.typicode.com/users';
    $('#loading').show();
    xhr.open('GET', URL);
    xhr.send();
});

// Maneja la respuesta de la petición general de usuarios
xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
        $('#loading').hide();
        if (this.status === 200) {
            try {
                const response = JSON.parse(this.responseText);
                sectionUsers.innerHTML = '';
                response.forEach((usuario, index) => renderizarUsuarios(usuario, index));
            } catch (error) {
                mostrarError('ERROR', 'Error al procesar la respuesta.');
            }
        } else {
            mostrarError('ERROR', `Error en la solicitud HTTP (${this.status}).`);
        }
    }
};

xhr.onerror = function () {
    $('#loading').hide();
    mostrarError('ERROR', 'Error de red o conexión con el servidor.');
};

// Genera y pinta la tarjeta HTML para cada usuario
function renderizarUsuarios(usuario, posicion) {
    sectionUsers.innerHTML += `
        <article class="users-card">
            <h2>Usuario en la posición ${posicion + 1}</h2>
            <div class='card-main'>
                <div>
                    <p class="users-info"><strong>Name: <br></strong>${usuario.name}</p>
                    <p class="users-info"><strong>Address: <br></strong>${usuario.address.city}</p>
                    <p class="users-info"><strong>Company:<br></strong> ${usuario.company.name}</p>
                </div>
                <div>
                    <button class='card-button' onclick="consultarUsuario(${usuario.id})">Buscar por ID</button>
                </div>
                <div class='user-info' id="detalle-usuario-${usuario.id}"></div>
            </div>
        </article>
    `;
}

// Consulta los detalles de un usuario específico por su ID
function consultarUsuario(id) {
    const divDetalle = document.getElementById(`detalle-usuario-${id}`);
    divDetalle.innerHTML = `
        <div class="card-loader">
            <span>Cargando...</span>
            <div class="mini-spinner"></div>
        </div>
    `;

    const URL = `https://jsonplaceholder.typicode.com/users/${id}`;
    $.getJSON(URL, function (data) {
        divDetalle.innerHTML = `
            <p>Username: ${data.username}</p>
            <p>Email: ${data.email}</p>
            <p>Teléfono: ${data.phone}</p>
            <p>Website: ${data.website}</p>
        `;
    }).fail(function() {
        divDetalle.innerHTML = `<p style="color: #f87171; font-size: 0.85rem;">Error al obtener los datos.</p>`;
    });
}

// Muestra alertas de error personalizadas con SweetAlert
function mostrarError(title, texto) {
    Swal.fire({
        icon: "error",
        title: `${title}`,
        text: `${texto}`,
    });
}