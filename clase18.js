function menu() {
    console.log(`
    1. Desarrollar un script que imprima en la consola si un número ingresado es par o impar.
    2. Desarrollar un script que imprima en la consola el número mayor, de tres números ingresados.
    3. Dado un número entero n, imprimir todos los números desde n hasta 1 en orden descendente.
    4. Dado un número entero n, imprimir todos los números desde 1 hasta n en orden ascendente.
    `)
}

// 1. Desarrollar un script que imprima en la consola si un número ingresado es par o impar.

const esPar = num => num % 2 === 0 ? true : false;

// 2. Desarrollar un script que imprima en la consola el número mayor, de tres números ingresados.

const esMayor = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        console.log("El primer numero es el mayor de los tres.");
    } else if (num2 > num1 && num2 > num3) {
        console.log("El segundo numero es el mayor de los tres.");
    } else {
        console.log("El tercer numero es el mayor de los tres.");
    }
}

// 3. Dado un número entero n, imprimir todos los números desde n hasta 1 en orden descendente.

const descendente = num => {
    for (let i = num; num >= 1; num--) {
        console.log(num);
    }
}

// 4. Dado un número entero n, imprimir todos los números desde 1 hasta n en orden ascendente.

const ascendente = num => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}

// 5. Dado un array de palabras, imprimir la cantidad total de palabras.

const cantidadPalabras = array => console.log("La cantidad de palabras del array es: " + array.length);

// 6. Dado un array de 9 numeros, imprimir el valor booleano true para todos los números pares.
const numerosParesTrue = array => {

    for (let index = 0; index < array.length; index++) {
        let booleano = false;
        if (array[index] % 2 === 0) {
            booleano = true;
        }
        console.log(`${array[index]} es: ${booleano}`);
    }
}



// 7. Crear una función que calcule el promedio de edad de un grupo de personas. Recibe una array de edades y devuelve el promedio.

const promedioEdad = array => {
    let promedioEdad = 0;
    let sumaEdades = 0;
    const cantidad = array.length;

    for (let i = 0; i < array.length; i++) {
        sumaEdades += array[i];
    }

    promedioEdad = sumaEdades / cantidad;

    return promedioEdad;
}

// 8. Crear una función que cuente la cantidad de veces que aparece un elemento en un array. Recibe un array y un elemento como parámetros y devuelve la cantidad de veces que aparece en el array.

const cantidadRepetidos = (array, elemento) => {

    let cantidad = 0;

    for (let i = 0; i < array.length; i++) {
        if(array[i] === elemento){
            cantidad++;
        }
    }

    return cantidad;
}

// 9. Crea una función que reciba como parámetro una cadena de texto y devuelva la cantidad de vocales que tiene.

const cantidadVocales = str => {
    let cant = 0;

    const vocales = str.match(/[aeiouAEIOU]/g);
   
    vocales.forEach(element => cant++);

    
    return cant;
}

function main() {

    //menu();

    const palabras = ['Hola', 'mundo', 'perro', 'casa', 'comida', 'mouse', 'teclado'];

    const numeros = [23, 56, 7, 34, 55, 57, 80, 89, 24];

    const edades = [24, 56, 76, 45, 34, 27, 89, 56];
    const edades2 = [24, 56, 76, 45, 34, 27, 89, 56, 90, 28, 12, 48];

    const elementos = ['casa', 'loro', 'perro','casa', 'pelota', 'casa', 'casa', 'carta', 'carro', 'casa'];

    const palabra = 'Mercado de compras';

    const ejercicio = 9;

    switch (ejercicio) {
        case 1:
            console.log("El numero ingresado es par: " + esPar(26));
            console.log("El numero ingresado es par: " + esPar(265));
            break;
        case 2:
            esMayor(2, 45, 71);
            esMayor(12, 4, 8);
            esMayor(23, 67, 32);
            break;
        case 3:
            descendente(5);
            break;
        case 4:
            ascendente(7);
            break;
        case 5:
            cantidadPalabras(palabras);
            break;
        case 6:
            numerosParesTrue(numeros);
            break;
        case 7:
            const promEdades1 = promedioEdad(edades);
            console.log(`El promedio de edades del arreglo1 es: ${promEdades1}`);

            const promEdades2 = promedioEdad(edades2);
            console.log(`El promedio de edades del arreglo1 es: ${promEdades2}`);
            break;
        case 8:
            const elemento = 'casa';
            const cant = cantidadRepetidos(elementos,elemento);
            console.log(`La palabra ${elemento} aparece ${cant} de veces en el array`);
            break;
        case 9:
            const cantVocales = cantidadVocales(palabra);
            console.log(`La palabra ${palabra} tiene ${cantVocales} vocales`);
            break;
        default:
            break;
    }
}

main();