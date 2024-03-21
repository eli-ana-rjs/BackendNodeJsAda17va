console.log("Este es el archivo que estoy importando desde require");

/* module.exports = function suma(a,b){
    return a + b;
} */

console.log(module);

function suma(a,b){
    return a + b;
}

//module.exports = suma;

console.log(module);

// Exportar mas de una fn

function multiplicar(a,b){
    return a * b;
}

function dividir(a,b){
    return a / b;
}

module.exports = {
    suma: suma,
    multiplicar: multiplicar,
    dividir: dividir
}