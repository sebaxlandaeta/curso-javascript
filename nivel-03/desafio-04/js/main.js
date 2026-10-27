'use strict';

$(document).ready(function(){
    let contador = 0;
    $('img').click(function() { 
        // Actualiza el contador en pantalla
        contador++; 
        $('h2').text(`Clicks: ${contador}`);

        // Reemplaza una imagen y su título al azar por los de la imagen clickeada
        let imgs = $('table img'); 
        let aleatorio = Math.floor(Math.random() * imgs.length);
        let srcImage = $(this).attr('src');
        $(imgs[aleatorio]).attr('src', srcImage);

        let title = $(this).attr('title');
        $(imgs[aleatorio]).attr('title', title);

        // Resalta la imagen seleccionada y añade su título a la lista
        $('img').removeClass('border-red');
        $(this).addClass('border-red');
        
        const listItem = $(`<li>${title}</li>`);
        $('ol').append(listItem);
    });
});