/**
 * Leer un número determinar si es par o impar e imprimir el mensaje
 */

"use strict";

let parImpar= parseFloat(prompt("Digite el número a evaluar"));

 

 let resultado= (parImpar%2 === 0) ? "Es par" : "Es impar";

 

 alert(resultado);