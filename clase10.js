// 1. Dado un número muestra si es positivo, negativo o cero.
function positivoNegativoCero(num) {

    if (num > 0) {
        console.log(`El numero ${num} es positivo`);
    } else if (num === 0) {
        console.log(`El numero ${num} es CERO`);
    } else {
        console.log(`El numero ${num} es negativo`);
    }
}

// 2. Dado un número del 1 al 7 muestra el día de la semana correspondiente.
function diaSemana(num) {
    switch (num) {
        case 1:
            console.log(`El dia ${num} de la semana es el LUNES`);
            break;
        case 2:
            console.log(`El dia ${num} de la semana es el MARTES`);
            break;
        case 3:
            console.log(`El dia ${num} de la semana es el MIERCOLES`);
            break;
        case 4:
            console.log(`El dia ${num} de la semana es el JUEVES`);
            break;
        case 5:
            console.log(`El dia ${num} de la semana es el VIERNES`);
            break;
        case 6:
            console.log(`El dia ${num} de la semana es el SABADO`);
            break;
        case 7:
            console.log(`El dia ${num} de la semana es el DOMINGO`);
            break;
        default:
            console.log("El numero ingresado no corresponde a un dia de la semana");
            break;

    }
}

// 3. Contar la cantidad de números pares que hay entre 1 y 10 (Inclusive) 
function cantidadPares() {
    let cant = 0;

    for (let index = 1; index <= 10; index++) {
        if (index % 2 === 0) {
            cant++;
        }

    }
    return cant;
}

// 4. Imprimir CADA numero que sea impar entre 1 y 20 (inclusive) 
function impares() {

    for (let index = 1; index < 20; index++) {
        if (index % 2 !== 0) {
            console.log(index);
        }
    }
}

// 5. Imprimir los siete días de la semana de forma automática.
function diasSemanaAutomatico(){
    console.log(`Los 7 dias de la semana son:
      - Lunes
      - Martes
      - Miercoles
      - Jueves
      - Viernes
      - Sabado
      - Domingo`)
}

function main() {

    const ejercicio = 5;

    switch (ejercicio) {
        case 1:
            positivoNegativoCero(45);
            positivoNegativoCero(-23);
            positivoNegativoCero(0);
            break;
        case 2:
            diaSemana(1);
            diaSemana(3);
            diaSemana(7);
            break;
        case 3:
            const cantPares = cantidadPares();
            console.log(`La cantidad de numeros pares que hay entre 1 y 10 es: ${cantPares}`);
            break;
        case 4:
            console.log("Los numeros impares entre 1 y 20 son:");
            impares();
            break;
        case 5:
            diasSemanaAutomatico();
            break;
        default:
            break;
    }
}

main();