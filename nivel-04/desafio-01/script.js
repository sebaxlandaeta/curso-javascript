'use strict';

// Clase que define la estructura de un producto
class Producto {
    constructor(codigo, nombre, precio, cantidad, exento) {    
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.exento = exento
    }

    // Método para calcular el subtotal del producto
    calcularSubTotal() {
        return this.precio * this.cantidad
    }
}

// Clase que define la estructura general de la factura
class Factura {
    constructor(fecha, rif) {
        this.fecha = fecha
        this.rif = rif
        this.monto = 0
        this.productos = [] // Arreglo para almacenar los productos
    }
}

// Instancia principal de la factura
const factura = new Factura("03-05-2026", "J-12345678-9");

// Creación de productos de ejemplo
const p1 = new Producto("001", "Laptop", 1200, 2, false);
const p2 = new Producto("002", "Mouse", 25, 4, false);
const p3 = new Producto("003", "Teclado", 45, 2, true);

// Se agregan los productos a la factura
factura.productos.push(p1);
factura.productos.push(p2);
factura.productos.push(p3);

// Obtiene el cuerpo de la tabla en el HTML
const tbody = document.getElementById('factura');

// Recorre cada producto para generar e insertar sus filas en la tabla
factura.productos.forEach((p) => {
    const fila = 
    `<tr>
        <td>${p.codigo}</td>
        <td>${p.nombre}</td>
        <td>${p.precio}$</td>
        <td>${p.cantidad}</td>
        <td>${p.exento ? "Si" : "No"}</td>
        <td>${p.calcularSubTotal()}$</td>
    </tr>`;
    tbody.innerHTML += fila; // Añade la fila al DOM
});