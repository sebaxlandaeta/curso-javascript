'use strict';

let empresas = ['CADIF1', 'FACEBOOK', 'INSTAGRAM', 'YOUTUBE', 'GITHUB'];
let urls = ['https://cadif1.com', 'https://facebook.com', 'https://instagram.com', 'https://youtube.com', 'https://github.com'];

// Muestra información del idioma, sistema operativo y navegador
function mostrarInfo() {
    let idioma = navigator.language;
    let sistemaOperativo = navigator.platform;
    let navegador = navigator.userAgent;
    let lenguage = '';
    let nombreNavegador = '';

    if (idioma.includes("en-US") || idioma.includes("en"))
        lenguage = "Ingles";
    else 
        if (idioma.includes("es"))
            lenguage = "Español";
        else
            if (idioma.includes("pt-BR") || idioma.includes("pt") || idioma.includes("pt-PT"))
                lenguage = "Portugues";
            else
                if (idioma.includes("fr") || idioma.includes("fr-FR") || idioma.includes("fr-CA") || idioma.includes("fr-CH"))
                    lenguage = "Frances";
                else 
                    lenguage = idioma;

    if (navegador.includes("Firefox"))
        nombreNavegador = "Mozilla Firefox";
    else
        if (navegador.includes("SamsungBrowser")) 
            nombreNavegador = "Samsung Internet";
        else
            if (navegador.includes("Opera") || navegador.includes("OPR")) 
                nombreNavegador = "Opera";
            else
                if (navegador.includes("Edg")) 
                    nombreNavegador = "Microsoft Edge";
                else
                    if (navegador.includes("Chrome"))
                        nombreNavegador = "Google Chrome";
                    else
                        if (navegador.includes("Safari"))
                            nombreNavegador = "Apple Safari";
                        else
                            if (navegador.includes("MSIE") || !!document.documentMode)
                                nombreNavegador = "Internet Explorer";

    alert(`El idioma del navegador es "${lenguage}", el sistema operativo es "${sistemaOperativo}" y el navegador es "${nombreNavegador}".`);
}

// Busca una empresa en el arreglo y abre su URL si coincide
function buscarEmpresa() {
    let empresa = prompt('Ingrese el nombre de la empresa que desea buscar en el arreglo').toUpperCase();
    let posicion = empresas.indexOf(empresa);

    if (posicion !== -1) {
        alert(`La empresa que usted ingreso si existe, se abrira automaticamente en otra pestaña.`);
        window.open(urls[posicion]);
    } else {
        alert(`La empresa que usted ingreso no existe en el arreglo.`);
    }
}

// Abre un sitio aleatorio en una ventana centrada y redimensionada
function abrirEmpresaAleatoria() {
    let numeroAleatorio = Math.floor(Math.random() * empresas.length);
    let ancho = screen.width * (3 / 4);
    let alto = screen.height * (2 / 3);
    let posX = (screen.width - ancho) / 2; 
    let posY = (screen.height - alto) / 2;
    
    let nuevaVentana = window.open(urls[numeroAleatorio], `ventana`, `width=${ancho},height=${alto}`);
    nuevaVentana.moveTo(posX, posY);
}