'use strict';

// Arreglos para almacenar nombres y URLs, y lista de colores disponibles
let nombresEmpresas = [];
let urlsEmpresas = [];
let colores = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'black', 'white'];

// Función principal para registrar el nombre y URL de las empresas con validaciones
function registrarEmpresas() {
    do {
        let esValido = false;
        // Validación del nombre de la empresa
        do {
            let nombre = prompt (`Ingrese el nombre de la empresa que desee registrar`).toUpperCase();
            if ((nombre.trim()) === '')
                alert(`¡No se pueden ingresar espacios vacios!`);
            else
                if (!isNaN(nombre))
                    alert(`¡No se pueden ingresar numeros!`);
                else 
                    if (!nombresEmpresas.includes(nombre)) {
                        nombresEmpresas.push(nombre);
                        esValido = true;
                    } else 
                        alert(`¡El nombre de la empresa ya existe!. Intente nuevamente.`);
        } while (esValido == false);
        
        // Actualiza el título del documento con la cantidad de empresas registradas
        document.title = `Empresas registradas: ${nombresEmpresas.length}`
        
        // Validación de la URL de la empresa
        do {
            esValido = false;
            let url = prompt (`Ingrese la url de la empresa (Ejemplo: https://url.com)`).toLowerCase();
            if ((url.trim()) === '')
                alert(`¡No se pueden ingresar espacios vacios!`);
            else
                if (!isNaN(url))
                    alert(`¡No se pueden ingresar numeros!`);                
                else
                    if (!urlsEmpresas.includes(url)) {
                        urlsEmpresas.push(url);
                        esValido = true;
                    } else 
                        alert(`¡La url de la empresa ya existe!. Intente nuevamente.`);
        } while (esValido == false);
        
        alert(`¡Registro exitoso!`);
        // Muestra la última empresa registrada en pantalla
        document.getElementById('mostrarEmpresa').innerText = nombresEmpresas[nombresEmpresas.length-1]; 
    } while (confirm(`¿Deseas registrar otra empresa?`)); 
}

// Abre una ventana nueva para mostrar las empresas si hay registros previos
function abrirVentana() { 
    if (nombresEmpresas.length > 0) {
        var nuevaVentana = window.open(``, ``, `width=${window.innerWidth / 2},height=${window.innerHeight}`); 
        
        // Recorremos el arreglo para imprimir todas las empresas registradas
        for (let i = 0; i < nombresEmpresas.length; i++) {
            nuevaVentana.document.write(`${i + 1} - <a href="${urlsEmpresas[i]}" target="_blank">${nombresEmpresas[i]}</a><br>`); 
        }
    } else {
        alert(`¡Necesitas registrar una empresa antes de abrir una ventana!`);
    }
}

// Cambia aleatoriamente el color de fondo y adapta el color del texto
function cambiarBackgroundColor() { 
    let aleatorio = Math.floor(Math.random() * colores.length); 
    let colorFondo = colores[aleatorio];

    document.body.style.backgroundColor = `${colorFondo}`;

    // Asigna color de texto legible según el fondo elegido
    if (aleatorio === 0 || aleatorio === 1 || aleatorio === 2 || aleatorio === 5 || aleatorio === 6) 
        document.body.style.color = 'white';
    else 
        document.body.style.color = 'black';
}

// Asigna los eventos de clic a los botones correspondientes
function eventos() { 
    let registrar = document.getElementById('registrarEmpresa');
    registrar.addEventListener('click', registrarEmpresas);
    
    let abrirVentanas = document.getElementById('abrirVentana');
    abrirVentanas.addEventListener('click', abrirVentana);
    abrirVentanas.addEventListener('click', cambiarBackgroundColor);
}

// Inicializa la ejecución de los eventos
eventos();