'use strict';

function sort_array_imperative(array) {
    const len = array.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i ; j++) {
            if (array[j + 1] < array[j]) {
                let tepm = array[j + 1];
                array[j + 1] = array[j];
                array[j] = tepm;
            }
        }
    }
    return array;
}

console.log(sort_array_imperative([4, 6, 5, 5, 9, 3, 5, 2, 7, 6, 0, 0, 0, 5, 6]));

function sort_array_declarative(array) {
    array.sort((a, b) => a - b);
    return array;
}

console.log(sort_array_declarative([4, 6, 5, 100, 15, 75, 19, 0, 5, 6]));
