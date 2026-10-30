'use strict';

// Modelo de Producto
class Producto {
    constructor(sku, nombre, precio, foto) {
        this.sku = sku;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
    }

    getPrecioFormateado() {
        return `${this.precio.toFixed(2)} $`;
    }
}

// Catálogo de productos
const listaProductosObjetos = [
    new Producto("ADI-STR-00", "Adidas Adistar", 87.95, "https://assets.adidas.com/images/w_600,f_auto,q_auto/8867b43fb3cb4b499314b02654a1cb5c_9366/Tenis_Adistar_3_Negro_ID6161_HM9.jpg"),
    new Producto("ADI-ZER-01", "Adidas Adizero", 97.95, "https://zshopp.com/wp-content/uploads/2021/02/Adizero-Evo-SL-Hombre-3.webp"),
    new Producto("LEN-WIT-04", "Lebron Witness 4", 209.97, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfqftgMyhXQEuWBuW8p6-ZGhpTUeD2e6ErkblO-aAftIVFYyqqRWfwWFVH&s=10"),
    new Producto("LEN-WIT-05", "Lebron Witness 5", 209.97, "https://zshopp.com/wp-content/uploads/2022/07/blanco-6.jpg"),
    new Producto("LEN-WIT-06", "Lebron Witness 6", 146.00, "https://i.pinimg.com/474x/bb/25/41/bb25411b95eb5a593697409236fb1a62.jpg"),
    new Producto("LEB-ROM-15", "Lebron 15", 97.00, "https://i.pinimg.com/564x/64/97/60/649760d92493c2b04995e155672cdd6c.jpg"),
    new Producto("LEB-ROM-16", "Lebron 16", 120.00, "https://i.ytimg.com/vi/iBDrP6gFwMI/maxresdefault.jpg"),
    new Producto("LEB-ROM-17", "Lebron 17", 12.50, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbcfLYc-6I0z6hPUiQUaYrsBXp1e82WIXyHQ&s"),
    new Producto("LEB-ROM-18", "Lebron 18", 85.50, "https://i.ebayimg.com/images/g/8pwAAOSwTChjAU~~/s-l1200.jpg"),
    new Producto("JOR-RET-01", "Jordan Retro 1", 98.00, "https://roosters.cl/cdn/shop/files/IMG_0365.jpg?v=1726702590&width=1946"),
    new Producto("JOR-RET-02", "Jordan Retro 2", 190.95, "https://media.gq.com.mx/photos/62b09f7f55c3e87dbdd427f1/master/w_1600%2Cc_limit/tenis-air-jordan-2-j-balvin-nueva-colaboracion-fecha-de-lanzamiento-azules.png"),
    new Producto("JOR-RET-03", "Jordan Retro 3", 89.50, "https://www.tennispremium.co/cdn/shop/files/9c5f428e-93ae-42f4-9594-9b4eb8f5c695.jpg?v=1744605140&width=1445"),
    new Producto("JOR-RET-04", "Jordan Retro 4", 89.00, "https://acdn-us.mitiendanube.com/stores/001/987/365/products/img_7997-744679305668bd907117296373762777-1024-1024.webp"),
    new Producto("LV-SKT-00", "Louis Vuitton Skate", 115.00, "https://lockerstreet.com/cdn/shop/files/EBF6A6EE-ABFB-4328-9C09-323C2D92B5C2.jpg?v=1726009523&width=1946"),
    new Producto("BLC-TRC-01", "Balenciaga Track", 230.00, "https://s.alicdn.com/@sc04/kf/H9b4c17185b364d61a346450c751451bfS.jpg"),
    new Producto("LV-TRN-00", "Louis Vuitton Trainer", 124.00, "https://i.ebayimg.com/images/g/KiUAAeSwlIVp5RXX/s-l1200.jpg")
];

// Renderiza los productos en el DOM al cargar la página
$(document).ready(function() {
    const $contenedor = $('#lista-productos');

    listaProductosObjetos.forEach((producto) => {
        const tarjetaHTML = `
            <div class="tarjeta-producto" data-sku="${producto.sku}">
                <a href="#" class="enlace-producto">
                    <img src="${producto.foto}" alt="${producto.nombre}" class="imagen-producto">
                </a>
                <div class="sku-producto">SKU: ${producto.sku}</div>
                <a href="#" class="enlace-producto">
                    <div class="nombre-producto">${producto.nombre}</div>
                </a>
                <div class="precio-producto">${producto.getPrecioFormateado()}</div>
                <button class="btn-carrito" onclick="agregarAlCarrito('${producto.sku}')">Añadir al carrito</button>
            </div>
        `;
        
        $contenedor.append(tarjetaHTML);
    });
});

// Agrega o actualiza un producto en el carrito usando localStorage
function agregarAlCarrito(sku) {
    const producto = listaProductosObjetos.find(p => p.sku === sku);
    
    if (producto) {
        let carrito = [];

        try {
            const datosGuardados = localStorage.getItem('carrito');
            if (datosGuardados) {
                carrito = JSON.parse(datosGuardados);
            }
        } catch (error) {
            carrito = [];
        }

        const productoExistente = carrito.find(p => p.sku === sku);
        let cantidadMostrar = 1;

        if (productoExistente) {
            productoExistente.cantidad = productoExistente.cantidad + 1;
            cantidadMostrar = productoExistente.cantidad;
        } else {
            producto.cantidad = 1;
            carrito.push(producto);
            cantidadMostrar = 1;
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Alerta de confirmación
        Swal.fire({
            title: `${producto.nombre} agregado con éxito!`,
            text: `Tiene ${cantidadMostrar} unidad(es) agregada en el carrito.`,
            icon: "success",
            draggable: true
        });
    }
}