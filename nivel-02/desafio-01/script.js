'use strict';

let productos = [];

// Registra nuevos productos validando que no estén vacíos ni sean números
function consultarProducto(lista) {
    do {
        let esValido = false;
        do {
            let entrada = prompt('Ingrese el nombre del producto:');
            
            if (entrada === null) {
                alert('Operación cancelada.');
                return;
            }

            let consulta = entrada.trim().toUpperCase();

            if (consulta === '') {
                alert('El valor ingresado no puede estar vacío.');
            } else if (!isNaN(consulta)) {
                alert('El valor ingresado no puede ser un número.');
            } else {
                esValido = true;
                lista.push(consulta); // Agrega el producto al arreglo
                alert('¡El producto fue registrado correctamente!');
            }
        } while (esValido === false);
    } while (confirm('¿Desea ingresar un nuevo producto?'));
}

// Muestra todos los productos guardados en el arreglo
function mostrarProductos(lista) {
    if (lista.length === 0) {
        alert('No hay productos registrados.');
    } else {
        alert(`Los productos registrados son:\n${lista.join(' - ')}`);
    }
}

// Busca la posición de un producto específico dentro del arreglo
function busquedaProducto(lista) {
    if (lista.length === 0) {
        alert('No hay productos registrados para buscar.');
        return;
    }

    do {
        let entrada = prompt('Ingrese el nombre del producto que desea buscar:');
        if (entrada === null) break;

        let busqueda = entrada.trim().toUpperCase();
        let indice = lista.indexOf(busqueda); // Retorna -1 si no lo encuentra

        if (indice !== -1) {
            alert(`El producto se encuentra en el índice [${indice}] (Posición ${indice + 1}).`);
        } else { 
            alert('El producto no se encuentra registrado.');
        }
    } while (confirm('¿Desea buscar otro producto?'));
}