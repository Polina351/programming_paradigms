'use strict';

const array1 = [24, 27, 26, 21, 20, 31, 26, 22, 20, 18, 30, 29, 24, 26];
const array2 = [100, 115, 117, 119, 134, 94, 105, 103, 111, 124, 122, 109, 110, 86];
function pearsonCorrelation(array1, array2) {
    function averageValue(array) {
        return roundTo1decimalPlace(sumArray(array) / array.length);
    }
    function sumArray(array) {
        const initialIndex = 0;
        return roundTo2decimalPlace(array.reduce((sum, elemValue) => sum + elemValue, initialIndex));
    }
    function deviationFromAverageValue(array, averageValue) {
        return array.map(elemValue => roundTo1decimalPlace(averageValue - elemValue));
    }
    function squareEachArrayValue(array) {
        return array.map(arrayValue => roundTo2decimalPlace(arrayValue ** 2));
    }
    function roundTo1decimalPlace(number) {
        return Math.round(number * 10) / 10;
    }
    function roundTo2decimalPlace(number) {
        return Math.round(number * 100) / 100;
    }
    function productOfDifferenceBetweenAverageAndValue(array1, array2) {
        array1 = deviationFromAverageValue(array1, averageValue(array1));
        array2 = deviationFromAverageValue(array2, averageValue(array2));

        const result = [];

        for (let i = 0; i < array1.length; i++) {
            result[i] = roundTo2decimalPlace(array1[i] * array2[i]);
        }
        return result;
    }
    return sumArray(productOfDifferenceBetweenAverageAndValue(array1,array2))
    / Math.sqrt(sumArray(squareEachArrayValue(deviationFromAverageValue(array1, averageValue(array1))))
        * sumArray(squareEachArrayValue(deviationFromAverageValue(array2, averageValue(array2)))));
}

console.log('test', pearsonCorrelation(array1, array2)); //-0.42110435466257606
