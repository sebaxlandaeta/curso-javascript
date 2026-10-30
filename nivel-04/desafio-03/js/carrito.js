'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const cuerpoTabla = document.getElementById('tabla-carrito');
    const contenedorTotal = document.getElementById('total-compra');

    let carrito = [];

    // Carga el carrito desde localStorage de forma segura
    try {
        const datosGuardados = localStorage.getItem('carrito');
        if (datosGuardados) {
            carrito = JSON.parse(datosGuardados);
        }
    } catch (error) {
        console.log("Error al leer el carrito:", error);
        carrito = [];
    }

    let montoTotalCompra = 0;

    // Renderiza el mensaje de vacío o la lista de productos en la tabla
    if (carrito.length === 0) {
        if (cuerpoTabla) {
            cuerpoTabla.innerHTML = `<tr>
                                        <td colspan="5" style="text-align: center; padding:0.5rem; font-weight:bold; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">El carrito está vacío.</td>
                                    </tr>`;
        }
    } else {
        carrito.forEach( producto => {
            const subtotal = producto.precio * producto.cantidad;
            montoTotalCompra = montoTotalCompra + subtotal;

            if (cuerpoTabla) {
                cuerpoTabla.innerHTML += `
                    <tr>
                        <td style="padding:0.7rem;">${producto.nombre}</td>
                        <td style="text-align: center;">${producto.cantidad}</td>
                        <td style="text-align: center;">${producto.precio.toFixed(2)} $</td>
                        <td style="text-align: center;">${subtotal.toFixed(2)} $</td>
                    </tr>
                `;
            }
        });
    }

    // Muestra el monto total a pagar acumulado
    if (contenedorTotal) {
        contenedorTotal.innerHTML = `<strong>Total a Pagar: ${montoTotalCompra.toFixed(2)} $</strong>`;
    }
});