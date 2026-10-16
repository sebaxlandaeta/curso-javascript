"use strict";

var cantVendedores = 0;
var acumTotal = 0;

do {
    cantVendedores++;

    // Validación de sueldo base
    var sueldoBase = parseFloat(prompt("Ingrese el sueldo base: -> "));
    while (sueldoBase == null || isNaN(sueldoBase) || sueldoBase <= 0) {
        alert("Ingrese un sueldo valido, mayor a cero, sin caracteres especiales ni espacios vacios.");
        sueldoBase = parseFloat(prompt("Ingrese el sueldo base de nuevo: -> "));
    }

    // Validación de monto mensual
    var montoMensual = parseFloat(prompt("Ingrese el monto mensual de ventas: -> "));
    while (montoMensual == null || isNaN(montoMensual) || montoMensual < 0) {
        alert("Ingrese un monto valido, positivo, sin caracteres especiales ni espacios vacios.");
        montoMensual = parseFloat(prompt("Ingrese el monto mensual de ventas de nuevo: -> "));
    }

    // Validación de edad
    var edad = parseInt(prompt("Ingrese su edad: -> "));
    while (edad == null || isNaN(edad) || edad <= 0) {
        alert("Ingrese una edad valida, mayor a cero, sin caracteres especiales ni espacios vacios.");
        edad = parseInt(prompt("Ingrese su edad de nuevo: -> "));
    }

    var esHombre = confirm(`Presione "Aceptar"si es Masculino o "Cancelar" si es Femenino.`);

    // Cálculo de porcentaje de ventas y bono adulto mayor
    if (montoMensual < 75000) 
        var porc = 0.05;
    else
        if (montoMensual >= 90000 && montoMensual <= 200000)
            var porc = 0.07;
        else 
            if (montoMensual >= 300000 && montoMensual <= 1000000)
                var porc = 0.08;
            else
                if (montoMensual > 1500000)
                    var porc = 0.10;
                else
                    var porc = 0.01;

    if (esHombre && edad >= 60 || !esHombre && edad > 55)
        var bonoAdultoMayor = 40;
    else
        var bonoAdultoMayor = 0;

    // Operaciones y acumulador
    var bonoVentas = montoMensual * porc;
    var sueldoTotal = sueldoBase + bonoVentas + bonoAdultoMayor;  
    acumTotal += sueldoTotal;
    
    // Resultados individuales
    alert(`El bono de ventas del vendedor ${cantVendedores} es de: -> ${Math.floor(bonoVentas)}$`);
    alert(`El bono de adultos mayores del vendedor ${cantVendedores} es de: -> ${Math.floor(bonoAdultoMayor)}$`);
    alert(`El sueldo total  del vendedor ${cantVendedores} es de: -> ${Math.floor(sueldoTotal)}$`);
    
    console.log(`----------------------------------------------------`);
    console.log(`El bono de ventas del vendedor ${cantVendedores} es de: -> ${Math.floor(bonoVentas)}$`);
    console.log(`El bono de adultos mayores del vendedor ${cantVendedores} es de: -> ${Math.floor(bonoAdultoMayor)}$`);
    console.log(`El sueldo total del vendedor ${cantVendedores} es de: -> ${Math.floor(sueldoTotal)}$`);

} while (confirm("¿Desea calcular el sueldo de otro vendedor?"));

// Resultados finales globales
alert(`Cantidad de vendedores calculados: -> ${cantVendedores}`);
alert(`Monto total calculado por todos los vendedores: -> ${Math.floor(acumTotal)}`);
console.log(`----------------------------------------------------`);
console.log(`Cantidad de vendedores calculados: -> ${cantVendedores}`);
console.log(`Monto total calculado por todos los vendedores: -> ${Math.floor(acumTotal)}$`);