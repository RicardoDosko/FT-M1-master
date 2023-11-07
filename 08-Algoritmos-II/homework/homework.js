'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    if (array.length <= 1) return array; // caso base
    let pivot = Math.floor(array.length / 2); // -> es el index (pos) en centro <- array[pivot]
    let left = [];
    let right = [];
    for (let i = 0; i < array.length; i++) {
        if (i !== pivot) {
            if (array[i] <= array[pivot]) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }
    }
    return quickSort(left).concat(array[pivot]).concat(quickSort(right));
}


function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const leftArray = array.slice(0, mid);
    const rightArray = array.slice(mid);

    const sortedLeftArray = mergeSort(leftArray);
    const sortedRightArray = mergeSort(rightArray);

    return merge(sortedLeftArray, sortedRightArray);
}

function merge(leftArray, rightArray) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            result.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(leftArray.slice(leftIndex), rightArray.slice(rightIndex));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    quickSort,
    mergeSort,
};