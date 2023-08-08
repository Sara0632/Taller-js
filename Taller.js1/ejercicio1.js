/**
 * integrantes: Juliana Grismaldo
 *              Sara Yate 
 *1. Realizar un programa que pida al usuario 2 números y se realicen las 4 operaciones basicas (suma, resta, multiplicacion, division) imprimir los resultados.
 */
'use strict';
let numero1 = parseFloat(prompt('Digite el primer número'));
let numero2 = parseFloat(prompt('Digite el segundo número'));
let suma= numero1 + numero2;
alert("La suma de los números digitados es: " +  suma);
let resta= numero1 - numero2;
alert("La resta de los números digitados es: " + resta);
let multiplicacion= numero1 * numero2;
alert("La multiplicacion de los números digitados es: " + multiplicacion); 
let division= numero1 / numero2;
alert("La division de los números digitados es:" +division);