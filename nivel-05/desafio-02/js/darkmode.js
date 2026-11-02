'use strict';

const btnDark = document.getElementById('darkMode');
const btnLight = document.getElementById('lightMode');
const htmlElement = document.documentElement;

// Carga el tema guardado en localStorage o detecta la preferencia del sistema operativo
function inicializarTema() {
    const temaGuardado = localStorage.getItem('theme');
    
    if (temaGuardado === 'dark' || (!temaGuardado && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }
}

// Activa el modo oscuro y lo guarda en el almacenamiento local
function activarModoOscuro() {
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
}

// Activa el modo claro y lo guarda en el almacenamiento local
function activarModoClaro() {
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
}

// Evento para cambiar al modo oscuro mediante el botón
if (btnDark) {
    btnDark.addEventListener('click', activarModoOscuro);
}

// Evento para cambiar al modo claro mediante el botón
if (btnLight) {
    btnLight.addEventListener('click', activarModoClaro);
}

// Ejecuta la inicialización al cargar el script
inicializarTema();