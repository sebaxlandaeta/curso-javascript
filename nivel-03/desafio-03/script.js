'use strict';

const divError = document.getElementById('error');

// Evento de envío del formulario
datos.onsubmit = (event) => {
  event.preventDefault();

  divError.innerHTML = "";
  divError.classList.add('d-none');
  let tieneErrores = false;

  // Valida el nombre
  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  if (!regexNombre.test(datos.nombre.value)) {
    mostrarMensajeError("El nombre ingresado es invalido");
    tieneErrores = true;
  }

  // Valida el correo
  const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regexCorreo.test(datos.correo.value)) {
    mostrarMensajeError("Formato de correo electronico invalido.");
    tieneErrores = true;
  }

  // Valida contraseñas
  if (datos.clave.value.length < 8) {
    mostrarMensajeError("La contraseña debe tener al menos 8 caracteres.");
    tieneErrores = true;
  } else if (datos.clave.value !== datos.confirmacion.value) {
    mostrarMensajeError("Las contraseñas no coinciden.");
    tieneErrores = true;
  }

  // Valida ciudad
  if (datos.ciudad.value === "0") {
    mostrarMensajeError("Debe seleccionar una ciudad de la lista.");
    tieneErrores = true;
  }

  // Valida términos
  if (!datos.terminos.checked) {
    mostrarMensajeError("Debe aceptar los terminos y condiciones.");
    tieneErrores = true;
  }

  // Envía si todo es correcto
  if (!tieneErrores) {
    alert("¡Formulario validado con exito!");
    datos.submit();
    datos.nombre.focus();
  }
}

// Muestra errores en pantalla
function mostrarMensajeError(mensaje) {
  divError.classList.remove('d-none');
  const span = document.createElement('span');
  const br = document.createElement('br');
  span.innerText = mensaje;
  divError.appendChild(span);
  divError.appendChild(br);
}