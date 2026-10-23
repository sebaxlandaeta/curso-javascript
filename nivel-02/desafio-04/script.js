'use strict';

// Referencias a los elementos del DOM (botones, contenedor de resultados y variables globales)
let btnCalcular = document.getElementById('btnCalcular');
let btnFacturar =  document.getElementById ('btnFacturar')
let divResultado = document.getElementById('resultado');
let productos, precio, cantidad, porcInicial, nroCuotas, subtotal, montoInicial, montoCuotas;

// Evento para capturar datos, calcular montos, mostrarlos y habilitar el botón de facturar
btnCalcular.addEventListener('click', function() {
    productos = document.getElementById ('productos').value;
    precio = parseFloat(document.getElementById('precio').value); 
    cantidad = parseInt(document.getElementById('cantidad').value);
    porcInicial = parseFloat(document.getElementById('porcInicial').value);
    nroCuotas = parseInt(document.getElementById('cuotas').value); 

    // Operaciones matemáticas de la factura
    subtotal = precio * cantidad;
    montoInicial = subtotal * porcInicial;
    montoCuotas = (subtotal - montoInicial) / nroCuotas; 

    // Muestra los cálculos en el div de resultados
    divResultado.innerHTML = ` 
            <p>Subtotal a pagar: ${subtotal.toFixed(2)}$</p>
            <p>Monto de la Inicial: ${montoInicial.toFixed(2)}$</p>
            <p>Monto por Cuota: ${montoCuotas.toFixed(2)}$</p>`;

    btnFacturar.disabled = false;
});

// Evento para confirmar, abrir ventana emergente con el detalle y reiniciar el formulario
btnFacturar.addEventListener('click', function() {
    let procesar = confirm('Estas seguro que quieres procesar la factura?');

    if (procesar) {
        // Abre una nueva ventana y escribe el reporte detallado de la compra
        let nuevaVentana = window.open('', '_blank', 'width = 500,height = 500');
        nuevaVentana.document.write(`<p><strong>Nombre del producto:</strong> ${productos}</p>
                                    <p><strong>Precio:</strong> ${precio.toFixed(2)}$</p>
                                    <p><strong>Cantidad:</strong> ${cantidad}</p>
                                    <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}$</p>
                                    <p><strong>Porcentaje inicial:</strong> ${porcInicial * 100}%</p>
                                    <p><strong>Monto Inicial:</strong> ${montoInicial.toFixed(2)}$</p>
                                    <p><strong>Numero de cuotas:</strong> ${nroCuotas}</p>
                                    <p><strong>Monto de cuotas:</strong> ${montoCuotas.toFixed(2)}$</p>`);
    }

    // Resetea el formulario, limpia la pantalla y bloquea el botón de facturar nuevamente
    let datos = document.getElementById ('form');
    datos.reset();
    divResultado.innerText = "";
    btnFacturar.disabled = true;
});