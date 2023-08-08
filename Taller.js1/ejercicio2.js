/**
 * Leer un número e imprimir un mensaje si es positivo o negativo
 */

'use strict';
let numero= parseFloat(prompt ('Digite el numero a evaluar'));

if (numero>0){

    alert(`El numero:${numero} es positivo ` );
    
} 
else{
    if (numero<0)
        alert(`El numero: ${numero} es negativo`);
    else alert(`El numero: ${numero} es cero`);
}
console.log(numero);