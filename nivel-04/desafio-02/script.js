'use strict';

// Clase que representa un producto individual
class Producto {
    constructor(codigo, nombre, precio, cantidad, exento) {    
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.exento = exento; // true si está exento de IVA, false si no
    }

    // Calcula el subtotal del producto (precio * cantidad)
    calcularSubTotal() {
        return this.precio * this.cantidad;
    }
}

// Clase que maneja la factura y sus operaciones globales
class Factura {
    constructor(fecha, rif) {
        this.fecha = fecha;
        this.rif = rif;
        this.productos = [];
        this.tasaIVA = 0.16; // 16% de IVA
    }

    // Calcula el IVA total acumulado de los productos no exentos
    calcularTotalIVA() {
        let totalIVA = 0;
        for (let p of this.productos) {
            if (!p.exento) 
                totalIVA += p.calcularSubTotal() * this.tasaIVA;
        }
        return totalIVA;
    }

    // Calcula el monto total sumando el subtotal general más el IVA
    calcularMontoTotal() {
        let subtotalGeneral = 0;
        for (let p of this.productos) 
            subtotalGeneral += p.calcularSubTotal();

        return subtotalGeneral + this.calcularTotalIVA();
    }
}

// Instancia global de la factura y referencias al DOM
const miFactura = new Factura("03-05-2026", "J-12345678-9");
const btnAgregar = document.getElementById('btnAgregar');
const tablaBody = document.getElementById('factura');

// Guarda el objeto factura convertido a JSON en una cookie por 7 días
function guardarCookie(nombre, objeto) {
    const valorJson = JSON.stringify(objeto);
    Cookies.set(nombre, valorJson, { expires: 7 });
}

// Carga y reconstruye los datos de la factura desde la cookie si existe
function cargarDatosDesdeCookie() {
    const cookieData = Cookies.get("Factura");

    if (cookieData) {
        const datosParseados = JSON.parse(cookieData);
        
        miFactura.fecha = datosParseados.fecha;
        miFactura.rif = datosParseados.rif;

        // Reconstruye cada objeto plano como instancia de la clase Producto
        miFactura.productos = datosParseados.productos.map(p => {
            return new Producto(p.codigo, p.nombre, p.precio, p.cantidad, p.exento);
        });

        renderizarTabla();
    }
}

// Dibuja los productos y las filas de totales en la tabla HTML
function renderizarTabla() {
    tablaBody.innerHTML = "";

    miFactura.productos.forEach(p => {
        const fila = `
            <tr>
                <td>${p.codigo}</td>
                <td>${p.nombre}</td>
                <td>${p.precio.toFixed(2)}$</td>
                <td>${p.cantidad}</td>
                <td>${p.exento ? "Si" : "No"}</td>
                <td>${p.calcularSubTotal().toFixed(2)}$</td>
            </tr>`;
    
        tablaBody.innerHTML += fila;
    });

    const totalIVA = miFactura.calcularTotalIVA();
    const totalFinal = miFactura.calcularMontoTotal();

    // Agrega las filas finales con el IVA y el Monto Total
    const filasTotales = `
        <tr style="background-color: #f2f2f2;">
            <td colspan="5" style="text-align: center;"><strong>Total IVA (16%):</strong></td>
            <td><strong>${totalIVA.toFixed(2)}$</strong></td>
        </tr>
        <tr style="background-color: #e6e6e6;">
            <td colspan="5" style="text-align: center;"><strong>MONTO TOTAL:</strong></td>
            <td><strong>${totalFinal.toFixed(2)}$</strong></td>
        </tr>
    `;
    
    tablaBody.innerHTML += filasTotales;
}

// Evento para capturar el formulario, agregar el producto, guardar en cookie y actualizar vista
btnAgregar.addEventListener('click', () => {
    const formulario = document.forms['datos'];
    const nombre = formulario.nombre.value;
    const codigo = formulario.id.value;
    const precio = parseFloat(formulario.precio.value);
    const cantidad = parseInt(formulario.cantidad.value);
    const exento = formulario.exento.checked;

    const nuevoProducto = new Producto(codigo, nombre, precio, cantidad, exento);
    miFactura.productos.push(nuevoProducto);

    guardarCookie("Factura", miFactura);
    renderizarTabla();
    formulario.reset();
});

// Inicializa cargando los datos guardados al abrir la página
cargarDatosDesdeCookie();