const operacionesBasicas = require('./require');

function main() {

    console.log(operacionesBasicas);

    const processedArguments = operacionesBasicas.arguments(process.argv);

    
    const num1 = parseInt(processedArguments.num1);
    
    const num2 = parseInt(processedArguments.num2);
    
    const operacion = processedArguments.operacion;
    

    operacionesBasicas.calculadora(num1,num2,operacion);

}

main();