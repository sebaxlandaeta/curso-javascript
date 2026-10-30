'use strict';

// Definición de la clase Producto para estructurar los artículos de la tienda
class Producto {
    constructor(sku, nombre, precio, foto) {
        this.sku = sku;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
        this.fechaAgregado = null;
    }

    // Método para formatear el precio con dos decimales y el símbolo '$'
    getPrecioFormateado() {
        return `${this.precio.toFixed(2)} $`;
    }
}

// Catálogo inicial de productos disponibles
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

$(document).ready(function() {
    const $contenedor = $('#lista-productos');

    // Generar e insertar dinámicamente las tarjetas de productos en el DOM
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

    // Función para actualizar el reloj en tiempo real
    function actualizarTituloHora() {
        const ahora = new Date();
        let horas = ahora.getHours();
        const minutos = ahora.getMinutes();
        const meridiem = horas >= 12 ? 'PM' : 'AM';

        horas = horas % 12;
        horas = horas ? horas : 12;

        const horasFormateadas = horas < 10 ? '0' + horas : horas;
        const minutosFormateados = minutos < 10 ? '0' + minutos : minutos;

        const time = document.getElementById('hora');

        time.innerText = `${horasFormateadas}:${minutosFormateados} ${meridiem}`;
    }

    actualizarTituloHora();
    setInterval(actualizarTituloHora, 10000);
});

// Función para gestionar la adición de productos al carrito en localStorage
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
        const ahora = new Date().getTime();

        // Actualizar cantidad si ya existe o agregar como nuevo item
        if (productoExistente) {
            productoExistente.cantidad = productoExistente.cantidad + 1;
            productoExistente.fechaAgregado = ahora; 
            cantidadMostrar = productoExistente.cantidad;
        } else {
            const nuevoItemCarrito = {
                sku: producto.sku,
                nombre: producto.nombre,
                precio: producto.precio,
                foto: producto.foto,
                cantidad: 1,
                fechaAgregado: ahora
            };
            carrito.push(nuevoItemCarrito);
            cantidadMostrar = 1;
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Alerta de confirmación usando SweetAlert2
        Swal.fire({
            title: `${producto.nombre} agregado con exito!`,
            text: `Tiene ${cantidadMostrar} unidad(es) agregada en el carrito.`,
            icon: "success",
            draggable: true
        });
    }
}

// Controlar la visualización del modal de oferta mediante sessionStorage
const ofertaMostrada = sessionStorage.getItem('ofertaMostrada');

if (!ofertaMostrada) {
    setTimeout(() => {
        if (!sessionStorage.getItem('ofertaMostrada')) {
            mostrarModalOferta();
            sessionStorage.setItem('ofertaMostrada', 'true');
        }
    }, 5000);
}

// Mostrar ventana emergente con SweetAlert2 para ofertas
function mostrarModalOferta() {
    Swal.fire({
        title: "¡Oferta Imperdible!",
        text: "Aprovecha nuestros descuentos exclusivos solo por hoy.",
        imageUrl: "https://i.pinimg.com/736x/d4/96/d9/d496d982acffc2661cd2dd859c4a3fd9.jpg",
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: "Banner de Liquidación Especial",
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false
    });
}