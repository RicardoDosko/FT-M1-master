'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
    const result = [1];
    let baseDiv = 2;
    while (num > 1) {
        if (num % baseDiv === 0) {
            // 5 % 2 => 0 NO  - 5 % 3 => 0 NO -  5 % 4 => 0 NO - 5 % 5 SI
            result.push(baseDiv);
            num = num / baseDiv;
        } else {
            console.log(baseDiv);
            baseDiv++;
            console.log(baseDiv);
        }
    }
    return result;
}


function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    let swap = true;
    while (swap) {
        swap = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
                swap = true;
            }
        }
    }
    return array;
}


function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j >= 1; j--) {
            if (array[j] < array[j - 1]) {
                let aux = array[j];
                array[j] = array[j - 1];
                array[j - 1] = aux;
            } else {
                j = 0;
            }
        }
    }
    return array;
}


function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }
    return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    factorear,
    bubbleSort,
    insertionSort,
    selectionSort,
};