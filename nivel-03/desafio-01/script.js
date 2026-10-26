'use strict';

// Lista de colores para asignar aleatoriamente
let colores = ['Red', 'Blue', 'Yellow', 'Purple', 'Green', 'Pink', 'Orange', 'Gray'];

// Evento al hacer clic en el botón procesar
btnProcesar.onclick = function (event) { 
    event.preventDefault();
    
    // Crear elementos de la tarjeta
    let divProducto = document.createElement('div');
    let divPrecio = document.createElement('div');
    let hipervinculo = document.createElement('a');
    let article = document.createElement('article');

    // Seleccionar color de fondo aleatorio
    let aleatorio = Math.floor(Math.random() * 8);
    let colorFondo = colores[aleatorio];

    // Asignar valores y atributos
    divProducto.innerText = datos.producto.value;
    divPrecio.innerText = datos.precio.value;
    hipervinculo.innerText = 'Eliminar';
    hipervinculo.setAttribute('href', '#');
    article.setAttribute('style', `background-color: ${colorFondo}`);
    resultados.setAttribute('style', 'display: flex; flex-wrap: wrap; gap: 10px;');
   
    // Insertar elementos en el DOM y limpiar formulario
    resultados.appendChild(article);
    article.appendChild(divProducto);
    article.appendChild(divPrecio);
    article.appendChild(hipervinculo);
    datos.reset();

    // Evento para eliminar la tarjeta
    hipervinculo.onclick = function (event) {
        event.preventDefault();
        let articlePadre = this.parentNode;
        let nombreProducto = articlePadre.firstChild.innerText;
        let respuesta = confirm(`Desea eliminar el producto: ${nombreProducto}?`);
    
        // Eliminar si el usuario confirma
        if (respuesta)
            resultados.removeChild(articlePadre);
    };
};