require('./require.js');

// Si yo quiero imprimir lo que me retorna require('./require.js');
console.log(require('./require.js')); // imprime: [Function: suma] 

// const functionSuma = require('./require.js');
//console.log(functionSuma); // imprime: [Function: suma] 

// Si ejecuto la funcion suma -> imprime el resultado de la suma
//console.log(functionSuma(1,2)); // 3

const funcionesBasicas = require('./require.js');
//console.log(funcionesBasicas); 

/* 
imprime: {
    suma: [Function: suma],
    multiplicar: [Function: multiplicar],
    dividir: [Function: dividir]
  } */

  console.log(funcionesBasicas.suma(2,3));
  console.log(funcionesBasicas.multiplicar(25,3));