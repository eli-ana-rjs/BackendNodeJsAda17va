const array = [1,2,3,4,5,6,7,8,9];
const array2 = [67,34,8,12,37,90,22,9]

console.log("Longitud: ");
console.log(array.length);

console.log("Agregar al final: ");
console.log(array.push(10));
console.log(array);

console.log("Borrar ultimo: ");
console.log(array.pop());
console.log(array);

console.log("Arrat toString: " + array.toString());
console.log("Arrat toString: " + array.toString() + 2);

console.log("Array join: \n", array.join("-"));

console.log(array);

console.log("Array -> include 3: ", array.includes(3));
console.log("Array -> include 3: ", array.includes(34));

console.log("forEach: ");
array.forEach(elemento => console.log(elemento));

console.log(array2.sort());

console.log(array2.find((elemento) => elemento >= 20));
/* console.log(array2.filter((valorActual,index,array2) => {
    console.log("Index: " + index);
    console.log("Valor Actual: " + valorActual);
    console.log("Array: " + array2);
    console.log("---------------------------");
}));
 */

console.log(array2.filter((valorActual,index) => valorActual > 37));