'use strict';

function BinarioADecimal(num) {
    var decimal = 0;
    let numBinario = num.split("").reverse();

    for (let i = 0; i < numBinario.length; i++) {

        decimal += parseInt(numBinario[i] * 2 ** i);
    }
    return decimal;
}

function DecimalABinario(num) {
    var binario = "";

    while (num !== 0) {
        binario = (num % 2) + binario;
        num = Math.floor(num / 2);
    }
    return binario;
}

module.exports = {
    BinarioADecimal,
    DecimalABinario,
};