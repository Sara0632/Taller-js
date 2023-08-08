/**
 * Dado 4 notas de un estudiante, calcular el promedio del estudiante, imprimir las notas y el promedio
 */
'use strict '; 
let numero1 = parseFloat(prompt('Digite la primera nota'));
let numero2 = parseFloat(prompt('Digite la segunda nota'));
let numero3 = parseFloat(prompt('Digite la tercera nota'));
let numero4 = parseFloat(prompt('Digite la cuarta nota'));
let notas = numero1 + numero2 + numero3 + numero4;
let promedio = notas/4; 
alert("El promedio de las notas digitadas es: " + promedio);