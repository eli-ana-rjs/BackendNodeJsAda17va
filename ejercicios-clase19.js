// Buscar objetos por propiedad: Hacer una función que tome 3 parametros:  una collection, una propiedad y el valor a buscar dentro de esa propiedad. Debe devolver un array con los objetos que tengan esa propiedad igual al valor indicado por parametro

function buscarObjetoXPropiedad(collection,property,value){

    return collection.filter(collection => collection[property] === value);
}

//Buscar elemento: Hacer una función que tome un array y un valor por parametro, y devuelva true si el valor está presente en el array, false caso contrario.

function buscarElemento(array,valor){
   /*  let encontrado = false;

    array.forEach(element => {
        if(element === valor){
            encontrado = true;
        }
    });
    
    return encontrado;
 */
    array.forEach( elem => elem === valor ? true : false)
}

// Main

function main(){

    const array = [23,4,7,12,78,90,32,47,89,12,7];
    const valor = 43;

    const collection = [
        {
            nombre: "Eliana",
            apellido: "Rojas",
            edad: 30
        },
        {
            nombre: "Lothar",
            apellido: "Meyer",
            edad: 10
        },
        {
            nombre: "Patricio",
            apellido: "Maseda",
            edad: 34
        },
        {
            nombre: "Pepe",
            apellido: "Cuenca",
            edad: 35
        },
        {
            nombre:"Ana" ,
            apellido: "Cramblyn",
            edad: 25
        },
        {
            nombre: "Paige",
            apellido: "Turco",
            edad: 52
        }
    ]

    const propiedad = "apellido";
    const value = "Maseda";

    if(buscarElemento(array,valor)){
        console.log(` El valor ${valor} se encuentra dentro del array`);
    } else{
        console.log(` El valor ${valor} NO se encuentra dentro del array`);
    }
    
    console.log(buscarObjetoXPropiedad(collection, propiedad, value));

}

main();