// Dada la siguiente collection, realizar las siguientes operaciones:

const movies = [
    {
        name: "El día de la marmota",
        rating: 9,
        tags: ["drama", "comedia"]
    },
    {
        name: "Un hombre con suerte",
        rating: 7,
        tags: ["drama", "crítica social"]
    },
    {
        name: "Bulworth",
        rating: 8,
        tags: ["comedia", "critica social"]
    },
    {
        name: "Wallstreet",
        rating: 7,
        tags: ["drama", "crimen"]
    },
    {
        name: "Apocalypse Now",
        rating: 9,
        tags: ["guerra", "drama"]
    },
    {
        name: "The Deer Hunter",
        rating: 10,
        tags: ["guerra", "drama"]
    },
];

// - Desarrollar una funcion getNames() que reciba como parámetro la collection y que retorne un array con todos los nombres de las películas.
// - Desarrollar una función getRatingAverage() que reciba como parametro la collection de películas y que retorne el rating promedio.
// - Desarrollar una función searchTitle() que reciba un string y la collection cómo parámetros y que retorne el objeto completo correspondiente al título de la película especificado.
// - Desarrollar una función getByTag() que reciba como parámetros la collection y un tag, y que retorne un array con la o las películas que incluyen ese tag especificado.




// Resoluciones en clase: 1:22:00

function getNames(collection) {
    let moviesName = [];
    //let auxIndex = 0;

    for (let index = 1; index < collection.length; index++) {
        // collection es un []
        // collection[index] es un {} que va a cambiar en cada vuelta

        moviesName[index] = collection[index].name;
        //moviesName[auxIndex] = collection[index].name;
        //auxIndex++;
    }

    return moviesName;
}

function getRatingAverage(collection) {
    let acumulator = 0;
    let index = 0;

    while (index < collection.length) {
        acumulator += collection[index].rating;
        index++;
    }

    return acumulator / collection.length;
}

function searchTitle(collection, title) {
    let index = 0;

    while (index < collection.length) {
        if (title == collection[index].name) {
            return collection[index];
        }
    }
    index++;
    return 'No existe la pelicula que estas buscando';
}

function getByTag(collection, tag) {
    let index = 0;

    while (index < collection.length) {
        console.log(collection[index].tags);
        for (
            let auxIndex = 0;
            auxIndex < collection[index].tags.length;
            auxIndex++
        ) {
            console.log(collection[index].tags[auxIndex]);
        }

        index++;

    }
}