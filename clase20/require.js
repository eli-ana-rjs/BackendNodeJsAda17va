// Crear 2 archivos: require.js donde tendremos distintas funciones para realizar las 4 operaciones matemáticas básicas e index.js donde importaremos esas funciones y las utilizaremos para realizar las distintas operaciones.

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

function calculadora(num1,num2,operacion){

    switch (operacion) {
        case 'suma':
            console.log(sumar(num1, num2));
            break;
        case 'resta':
            console.log(restar(num1, num2));
            break;
        case 'multiplicar':
            console.log(multiplicar(num1, num2));
            break;
        case 'dividir':
            console.log(dividir(num1, num2));
            break;
        default:
            console.log("La operacion ingresada no se encontro");
            break;
    }
}


function processesArguments(arguments) {
    const argumentoRecortado = arguments.slice(2);

    const processedArguments = {};

    argumentoRecortado.forEach((parametro, index) => {
        if (parametro.startsWith('--')) {
            const nombrePropiedad = parametro.slice(2);
            processedArguments[nombrePropiedad] = argumentoRecortado[index + 1];
        }
    });

    return processedArguments;
}

module.exports = {
    suma: sumar,
    resta: restar,
    multiplicar: multiplicar,
    dividir: dividir,
    calculadora: calculadora,
    arguments: processesArguments
}

