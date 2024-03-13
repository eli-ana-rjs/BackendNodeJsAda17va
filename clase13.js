// 1. Crear una función que calcule el área de un triangulo y devuelva el área

const areaTriangulo = (base,altura) =>{
    return (base * altura)/ 2;
}

const base = 4;
const altura = 6;

console.log(`El area de un triangulo de base = ${base} y altura = ${altura} es ${areaTriangulo(base,altura)}`);

// 2. Crear una función que reciba una cadena de texto y devuelva la cantidad de vocales que tiene. 

const texto = "Hello word";

const contarVocales = texto => {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if( texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u' ){
            contador++;
        }
    }
    return contador;
}

const cantidadVocales = contarVocales(texto);

console.log(`La cantidad de vocales que tiene el texto: ${texto} son ${cantidadVocales}`);

