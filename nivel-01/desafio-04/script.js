'use strict';

var cursos = ['ELECTRONICA', 'MARKETING', 'PROGRAMACION', 'DISEÑO GRAFICO', 'ROBOTICA', 'BASES DE DATOS', 'HERRAMIENTAS CAD', 'SOPORTE TECNICO', 'WEB', 'DESAROLLO PROFESIONAL'];
var cursosDeCarrera = [];

// Bucle principal para registrar múltiples cursos
do {
    var esValido = false;
    
    // Bucle de validación (verifica si existe y si ya fue agregado)
    do {
        var nombreCurso = prompt('Ingrese el nombre del curso:').toUpperCase();
        if (!cursos.includes(nombreCurso)) 
            alert('El curso no existe. Por favor, intente nuevamente.');
        else 
            if (cursosDeCarrera.includes(nombreCurso))
                alert('El curso ya fue registrado. Por favor, intente nuevamente.');
            else {
                cursosDeCarrera.push(nombreCurso);
                alert('El curso fue registrado con exito.');
                esValido = true;
            }   
    } while (!esValido);

} while (confirm('¿Desea registrar otro curso al pensum?'));

// Muestra el total de cursos registrados
alert (`Se registraron ${cursosDeCarrera.length} cursos al pensum de la carrera.`);
console.log (`Se registraron ${cursosDeCarrera.length} cursos al pensum de la carrera.`);

// Recorre el arreglo para mostrar la lista de cursos
for (var i=0; i < cursosDeCarrera.length; i++) {  
    alert (`El curso Nº${i+1} registrado fue ${cursosDeCarrera[i].toLowerCase()}.`);
    console.log (`El curso Nº${i+1} registrado fue ${cursosDeCarrera[i].toLowerCase()}.`);
}