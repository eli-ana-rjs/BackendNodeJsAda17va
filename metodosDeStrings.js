let string = "metodos de strings";
console.log(string); // mx: metodos de string

//string = 2; // Reasigno el valor. Se borra el contendio original... Ver apunte
//console.log(string); // mx: 2

console.log(string[0]); // mx: m
string[0] = 'a';
console.log(string); // mx: metodos de string -> no modifica la posicion de ese caracter en el string original

console.log(string.toUpperCase()); // Convierte a MAYUSCULAS

let string2 = "HOLA";
console.log(string2.toLowerCase()); // Convierte a minusculas

let string3 = "345";
console.log(parseInt(string3)); // Transforma en entero
console.log(parseInt(string3) + 2); // Se puede operar con ese resultado

console.log(string.match("str")); // Devuelve: [ 'str', index: 11, input: 'metodos de strings', groups: undefined ]
// index -> posicion dentro de la cadena desde donde se encuentra la primer coincidencia, o sea la 's'
console.log(string.match("strd")); // Devuelve: null

console.log(string.search("str")); // Devuelve: 11
console.log(string.search("stra")); // Devuelve: -1 si no encuentra coincidencia

console.log(string.replace("str","stra")); // devuelve una nueva cadena con el reemplazo
console.log(string); // No cambia el string original
console.log(string.replace("strt","stra")); // Si no encuentra, no hace nada

console.log(string2.split("")); // Devuelve un array con un caracter de la palabra en cada indice. Mx: [ 'H', 'O', 'L', 'A' ]
console.log(string.split(" ")); // Si uso un espacio como separador, me crea un array con las palabras de la cadena. Mx: [ 'metodos', 'de', 'strings' ]
console.log(string.split("o")); // Si el separador es un carcater, realiza el corte en donde encuentra ese caracter. Mx: [ 'met', 'd', 's de strings' ]

console.log(string.slice(1,5)); // Devuelve lo que recorto en una nueva cadena -> etod


