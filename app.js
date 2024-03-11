// IF

// 1. Desarrollar un algotirmo que permita obtener el promedio de las notas obtenidas por una alumna en sus 3 ultimos parciales y que el resultado se imprima indicando si aprobo o no (si el promedio es mayor o igual que 8)

const nota1 = 6;
const nota2 = 8;
const nota3 = 9;

const suma = (nota1 + nota2 + nota3);

const prom = suma/3;

if(prom >= 8){
    console.log("Aprobo");
} else{
    console.log("Desaprobo");
}

// Con ternario

prom >= 8 ? console.log("Aprobo") : console.log("Desaprobo"); // puedo sacar el console.log

// 2. Desarrollar un script que imprima en la consola si un numero ingresado es par o impar

//const num1 = 3;
 const num1 = 100;

if(num1 %2 == 0){
    console.log("El numero ingresado es par");
}else{
    console.log("El numero ingresado es impar");
}