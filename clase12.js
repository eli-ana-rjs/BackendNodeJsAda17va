//1. Crear una funcion que cuente la cantidad de veces que aparece un elemento en un array. Recibe un array y un elemento como parametros y devuelve la cantidad de veces que aparece en el array

const elementos = ["carta", "perro", "pelota", "mouse", "carta","casa","carta","perro"];

const cantidadDeVecesRepetido = (array,elemento) => {

    let contador = 0;

    for (let i = 0; i < array.length; i++) {
        if(array[i] === elemento){
            contador++;
        }
    }

    return contador;
}

const elemento = "carta";

const cantRep = cantidadDeVecesRepetido(elementos, elemento);
console.log(`El elemento ${elemento} se repite ${cantRep} veces en el array`);