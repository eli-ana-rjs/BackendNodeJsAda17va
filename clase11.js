// 1. Crear una funcion que convierta grados celsius a grados farenheit

function celsiusAFarenheit(grCelsius){
    const grFarenheit = (grCelsius * 1.8) + 32;
    return grFarenheit;
}

const grC = 90;
let grF = celsiusAFarenheit(grC);
console.log(` ${grC} grados Celsius son ${grF} grados Farenheit`);

// 2. Crear una función que calcule el promedio de edad de un grupo de personas. Recibe una array de edades y devuelve el promedio.

const edades = [12,34,25,67,50];

function promedio(edades){
     let sumaEdades = 0;
     let prom = 0;

     for (let i = 0; i < edades.length; i++) {
        sumaEdades = sumaEdades + edades[i];
     }

     prom = sumaEdades / edades.length;

     return prom;
}

let promEdades = promedio(edades);

console.log(`El promedio de edades del array es: ${promEdades}`);

// 3. Dado un array de números, imprimir la suma de los números en el array que son mayores que el promedio del array.

const numeros = [12,7,89,43,24,61];

function sumaMayoresAlPromedio (numeros){

    let suma = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        if( numeros[i] > promedio(numeros)){
            suma = suma + numeros[i];
        }
    }

    return suma;
}

const sumaMayores = sumaMayoresAlPromedio(numeros);
console.log(`La suma de los numeros que son mayores al promedio en el array es: ${sumaMayores}`);

// 4. Crear una función que calcule el área de un círculo. Recibe un parámetro (radio) y devuelve el área del círculo.


function areaCirculo(radio){
    return Math.PI * radio * radio;
}

const radio = 4;
const areaCirc = areaCirculo(radio).toFixed(2); // toFixed trunca y redondea a 2 decimales, en este caso 
console.log(`El area de un circulo de radio ${radio} es ${areaCirc}`);



