'use strict';

function binarySearch(array, element) {
    let first = 0;
    let last = array.length - 1;
    let position = -1;
    let found = false;
    let middle;

    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        if (array[middle] === element) {
            found = true;
            position = middle;
        } else if (array[middle] > element) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }
    return position;
}

const array = [5, 6, 16, 18, 20, 34, 70];

console.log(binarySearch(array, 34)); // 5
console.log(binarySearch(array, 25)); // -1
