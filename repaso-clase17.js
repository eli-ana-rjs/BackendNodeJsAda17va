const array = [];

//console.log();


console.log(array.length); // 0 porque esta vacio
array.push(1,2); // agrego un elemento
console.log(array); // [1,2]
array.pop(); // elimina el ultimo elemento
console.log(array); // [1]
console.log(array.push(2,5,8,3,9));
console.log(array); // [2,5,8,3,9]
console.log(array.join('-')); // 2 - 5 - 8 - 3 - 9 -> devuelve un string con el separador que le paso al parametro del join
console.log(array); // No modifica el array
array.includes(3); // verifica si ese valor se encuentra o no en el array - Devuelve true o false
console.log(array); // No modifica el array
console.log(array.find( e => e > 2));
console.log(array);
array.forEach( elem => console.log(elem)); // forEacho -> por cada elemento del array, hace lo que le pase en la funcion que le paso al forEach como parametro
console.log(array);

console.log(array.map( e => e + 2)); // Devuelve una copia del array modificado
console.log(array); // No modifica el array original

console.log(array.filter(e => e > 2)); // Devuelve un array con todos los elementos que cumplen la condicion del callback
console.log(array); // No modifica el array original
