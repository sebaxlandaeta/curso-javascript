"use strict";

// 1. Capturar los datos de entrada
var modelo = prompt("Indique el modelo del vehiculo: -> ");

// 2. Generar valores aleatorios usando los números exactos
var costoDiario = Math.random() * (50 - 25) + 25;
var cantDias = Math.random() * (10 - 3) + 3;

// Mostrar en consola formateando solo para la vista
console.log(`El costo diario por el alquiler del vehiculo es: -> ${costoDiario.toFixed(2)}$`);
console.log(`La cantidad de dias que desea alquilar el vehiculo es: -> ${cantDias.toFixed(0)}$`);

// 3. Calcular con los números crudos (sin .toFixed previo)
var montoTotal = costoDiario * cantDias;
var pagoInicial = montoTotal * 0.35;

// 4. Mostrar el resultado final incluyendo el modelo del vehículo
alert(`Para el vehiculo modelo ${modelo}:\nEl monto inicial son ${pagoInicial.toFixed(1)}$ y el monto total ${montoTotal.toFixed(1)}$`);