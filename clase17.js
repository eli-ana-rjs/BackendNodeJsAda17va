// Dada la siguiente collection, realizar las siguientes operaciones:

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




// - Desarrollar una funcion getNames() que reciba como parámetro la collection y que retorne un array con todos los nombres de las películas.

function getNames(arr){
    const arrPropiedades = [];

    arr.forEach(pelicula => {
        arrPropiedades.push(pelicula.name);
    });

    return arrPropiedades;
}

//console.log(getNames(movies));


// - Desarrollar una función getRatingAverage() que reciba como parametro la collection de películas y que retorne el rating promedio.
function getRatingAverage(arr){

    let ratingPromedio = 0;
    let sumaRating = 0;
    const totalPeliculas = arr.length;

    arr.forEach(movie => {
        sumaRating += movie.rating;
    });

    ratingPromedio = sumaRating/totalPeliculas;

    return ratingPromedio;
}

//console.log(getRatingAverage(movies));

// - Desarrollar una función searchTitle() que reciba un string y la collection cómo parámetros y que retorne el objeto completo correspondiente al título de la película especificado.

function searchTitle(string,collection){
    let peliculaEncontrada = {};

    collection.forEach( pelicula => {
        if(string === pelicula.name){
            peliculaEncontrada = pelicula;
        }else{
            console.log("Pelicula no encontrada");
        }
    })
    return peliculaEncontrada;
}

//console.log(searchTitle('Bulworth', movies));

// - Desarrollar una función getByTag() que reciba como parámetros la collection y un tag, y que retorne un array con la o las películas que incluyen ese tag especifico

function getByTag( tag, collection){
    
    const arrTags = [];

    collection.forEach( pelicula => {
       if(pelicula.tags.includes(tag)){
        arrTags.push(pelicula.name);
       }
    })

    return arrTags;
}

//console.log(getByTag('guerra',movies));
console.log(getByTag('drama',movies));


