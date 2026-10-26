'use strict';

// Selección de elementos clave del DOM
const btnAgregar = document.getElementById('btnAgregar');
const btnLimpiar = document.getElementById('btnLimpiar');
const tabla = document.getElementById('datosSalida');

// Registro de escuchadores de eventos para los botones
btnAgregar.addEventListener('click', agregarVehiculo);
btnLimpiar.addEventListener('click', limpiarTabla);

// Función para verificar si una placa ya está registrada en la tabla
function buscarPlaca(placaAValidar) {
    const filas = tabla.rows;
    const placaLimpia = placaAValidar.trim().toUpperCase(); 
    
    // Recorre la tabla buscando coincidencias de placa
    for (let i = 1; i < filas.length; i++) {
        if (filas[i].cells[0].innerText.toUpperCase() === placaLimpia)
            return true;
    }
    return false;
}

// Función principal para validar y agregar un nuevo vehículo
function agregarVehiculo() {
    const placaNueva = datos.placa.value.trim();

    // Validaciones de campo vacío o duplicado
    if (placaNueva === "")
        alert("El valor de la placa no puede ser vacío");
    else if (buscarPlaca(placaNueva))
        alert("El vehículo ya se encuentra registrado");
    else {
        // Inserta nueva fila al final de la tabla
        const nuevaFila = tabla.insertRow(-1);

        // Celda de placa con opción de edición interactiva (Prompt)
        let celdaPlaca = nuevaFila.insertCell(0);
        celdaPlaca.innerText = placaNueva.toUpperCase(); 
        celdaPlaca.style.cursor = "pointer";
        
        celdaPlaca.onclick = function() {
            const nuevaPlacaPrompt = prompt("Escriba un nuevo valor para modificarlo");
            
            if (nuevaPlacaPrompt !== null) {
                const valorLimpio = nuevaPlacaPrompt.trim();
                
                // Validaciones al editar la placa
                if (valorLimpio === "") 
                    alert("No puede introducir un valor vacio");
                else if (valorLimpio.toUpperCase() === celdaPlaca.innerText.toUpperCase()) 
                    celdaPlaca.innerText = valorLimpio.toUpperCase();
                else if (buscarPlaca(valorLimpio))
                    alert("Esa placa ya existe en otro vehiculo");
                else
                    celdaPlaca.innerText = valorLimpio.toUpperCase(); 
            }
        };

        // Inserción de los datos restantes en la fila
        nuevaFila.insertCell(1).innerText = datos.km.value;
        nuevaFila.insertCell(2).innerText = datos.precio.value;
        nuevaFila.insertCell(3).innerText = datos.marca.value;
        nuevaFila.insertCell(4).innerText = datos.modelo.value;
        nuevaFila.insertCell(5).innerText = datos.estado.value;

        // Reinicio del formulario y actualización del resumen
        datos.reset();
        datos.placa.focus();
        actualizarResumen();
    }
}

// Función para calcular y renderizar las estadísticas del inventario
function actualizarResumen() {
    const filas = tabla.rows;
    let contadorNuevos = 0;
    let contadorUsados = 0;
    let sumaPrecios = 0;
    let totalVehiculos = filas.length - 1;

    // Recuento de estados y suma de precios
    for (let i = 1; i < filas.length; i++) {
        const estado = filas[i].cells[5].innerText;
        if (estado === "Nuevo") 
            contadorNuevos++;
        if (estado === "Usado") 
            contadorUsados++;

        const precio = parseFloat(filas[i].cells[2].innerText);
        sumaPrecios += precio;
    }

    // Cálculo del promedio y renderizado HTML del resumen
    const promedio = totalVehiculos > 0 ? (sumaPrecios / totalVehiculos) : 0;
    const divResultados = document.getElementById('resultados'); 
    divResultados.innerHTML = `
        <hr>
        <h3>Resumen de Inventario</h3>
        <p><strong>Carros nuevos:</strong> ${contadorNuevos}</p>
        <p><strong>Carros usados:</strong> ${contadorUsados}</p>
        <p><strong>Promedio de precios:</strong> ${promedio.toFixed(2)}$</p>
    `;
}

// Función para vaciar completamente la tabla y actualizar el resumen
function limpiarTabla() {
    while (tabla.rows.length > 1) 
        tabla.deleteRow(1); 
    
    actualizarResumen();
}