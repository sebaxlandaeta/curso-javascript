'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const cuerpoTabla = document.getElementById('tabla-carrito');
    const contenedorTotal = document.getElementById('total-compra');

    function renderizarCarrito() {
        let carrito = [];

        // Cargar y parsear el carrito desde localStorage
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

        // Mostrar mensaje si está vacío o generar las filas con los productos
        if (carrito.length === 0) {
            if (cuerpoTabla) {
                cuerpoTabla.innerHTML = `<tr>
                                            <td colspan="5" style="text-align: center; padding:0.5rem; font-weight:bold; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">El carrito está vacío.</td>
                                        </tr>`;
            }
        } else {
            const tiempoActual = new Date().getTime();
            let filasHTML = ''; 

            carrito.forEach(producto => {
                const subtotal = producto.precio * producto.cantidad;
                montoTotalCompra = montoTotalCompra + subtotal;

                let mensajeTiempo;

                // Calcular el tiempo transcurrido desde que se agregó el producto
                if (producto.fechaAgregado) {
                    const diferenciaMilisegundos = tiempoActual - producto.fechaAgregado;

                    const minutosTotales = Math.floor(diferenciaMilisegundos / 60000);
                    const horasTotales = Math.floor(minutosTotales / 60);
                    const diasTotales = Math.floor(horasTotales / 24);

                    if (minutosTotales < 1) 
                        mensajeTiempo = "Hace un instante";
                    else if (minutosTotales < 60)
                        mensajeTiempo = minutosTotales === 1 ? "Hace 1 minuto" : `Hace ${minutosTotales} minutos`;
                    else if (horasTotales < 24) {
                        const txtHoras = horasTotales === 1 ? "1 hora" : `${horasTotales} horas`;
                        mensajeTiempo = `Hace ${txtHoras}`;
                    } else { 
                        const txtDias = diasTotales === 1 ? "1 dia" : `${diasTotales} dias`;
                        mensajeTiempo = `Hace ${txtDias}`;
                    }

                } else
                    mensajeTiempo = "Hace un instante";
                
                filasHTML += `
                    <tr>
                        <td style="padding:0.7rem;">${producto.nombre}</td>
                        <td style="text-align: center;">${producto.cantidad}</td>
                        <td style="text-align: center;">${producto.precio.toFixed(2)} $</td>
                        <td style="text-align: center;">${subtotal.toFixed(2)} $</td>
                        <td style="text-align: center;">${mensajeTiempo}</td>
                    </tr>
                `;
            });

            if (cuerpoTabla) {
                cuerpoTabla.innerHTML = filasHTML;
            }
        }

        // Actualizar el monto total en pantalla
        if (contenedorTotal) {
            contenedorTotal.innerHTML = `<strong>Total a Pagar: ${montoTotalCompra.toFixed(2)} $</strong>`;
        }
    }

    // Renderizar al cargar y actualizar automáticamente cada 10 segundos
    renderizarCarrito();
    setInterval(renderizarCarrito, 10000);
});