// 1. Desarrollar un algoritmo que permita imprimir en la consola todos los números desde el 0 al 30. Con la excepción de que cuando un número sea divisible por 3, se imprima FIZZ en su lugar. Cuando sea divisible por 5, BUZZ. Y cuando sea divisible por ambos, FIZZBUZZ.




// 2. Dado un array de palabras, imprimir la cantidad total de palabras.

const palabras = ["hola","perrito","colibri","Lothar","felicidad"];

const cantidadTotalPalabras = palabras.length;

console.log(`La cantidad de palabras del array es: ${cantidadTotalPalabras}`);


// 3. Dado un array de palabras, imprimir CADA palabra.


for (let i = 0; i < palabras.length; i++) {
    console.log(palabras[i]);
    
}


// 4. Dado un array de 9 números, imprimir el valor booleano true para todos los números pares.



// 5. Dado un array de X( = 5) cantidad de números, imprimir la suma de todos sus valores.

const numeros = [2,6,34,9,10];

let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma = numeros[i] + suma;
}

console.log(`La suma de todos los numeros del array es: ${suma}`);

// 6. Dado un número muestra si es positivo, negativo o cero.

// 7. Dado un número del 1 al 7 muestra el día de la semana correspondiente.

// 8. Contar la cantidad de numeros pares que hay entre 1 y 10 (Inclusive) 

// 9. Imprimir CADA numero que sea impar entre 1 y 20 (inclusive) 

// 10. Imprimir los siete días de la semana de forma automatica.