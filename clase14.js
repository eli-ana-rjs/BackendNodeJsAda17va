// 1. Dado un array de 10 numeros, desarrollar una fn que reciba como parametro un numero y devuelva true si es par, false si es impar.
// Imprimir en la terminal un array que contenga todos los numeros pares del array 'numbers'
// Necesito que hagan 2 funciones, na que reciba un solo numero por parametro y verifique que es par. Luego otra fn que va a utilizar a la fn par y se va a encargar de crear el array de numeros pares

const numbers = [12, 5, 43, 44, 78, 56, 2, 32, 33, 10];

const esPar = num => num % 2 == 0;

const crearArrayPares = array => {

    let arrayPares = [];

    for (let i = 0; i < array.length; i++) {
        if (esPar(array[i])) {
            arrayPares.push(array[i]);
        }

    }

    return arrayPares;
}

const pares = crearArrayPares(numbers);

console.log(pares);

// Explicacion del profe

const crearArrayPares2 = array => {

    let arrayPares = [];

    for (let i = 0; i < array.length; i++) {
        if (esPar(array[i])) {

            if (arrayPares.length == 0) {
                arrayPares[i] = array[i];
            } else {
                arrayPares[arrayPares.length] = array[i]; // 
            }

        }

    }

    return arrayPares;
}


/// 2. Dada la siguiente collection, realizar las siguientes operaciones:

// - Desarrollar una función getNames() que reciba como parámetro la collection y que retorne un array con todos los nombres de las películas.
// - Desarrollar una función searchTitle() que reciba un string y la collection como parámetros y que retorne el objeto completo correspondiente al título de la película especificado.

const movies = [
    {
        name: 'El día de la marmota',
        rating: 9,
        tags: ['drama', 'comedia'],
    },
    {
        name: 'Un hombre con suerte',
        rating: 7,
        tags: ['drama', 'crítica social'],
    },
    {
        name: 'Bulworth',
        rating: 8,
        tags: ['comedia', 'critica social'],
    },
    {
        name: 'Wallstreet',
        rating: 7,
        tags: ['drama', 'crimen'],
    },
    {
        name: 'Apocalypse Now',
        rating: 9,
        tags: ['guerra', 'drama'],
    },
    {
        name: 'The Deer Hunter',
        rating: 10,
        tags: ['guerra', 'drama'],
    },
];

function getNames(moviesCollection) {

    const moviesName = [];

    for (let index = 0; index < moviesCollection.length; index++) {
        moviesName[index] = moviesCollection[index].name;
    }

    return moviesName;
}

function searchTitle(title, moviesCollection) {
    for (let index = 0; index < moviesCollection.length; index++) {
        if (title == moviesCollection[index].name) {
            return moviesCollection[index];
        }
    }
}

console.log(searchTitle('Un hombre con suerte', movies));