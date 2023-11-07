'use strict';

function printMultiplicationTable(maxNumber) {
    for (let i = 1; i <= maxNumber ; i++) {
        for (let j = 1; j <= 9; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
        console.log('');
    }

}

printMultiplicationTable(9);

/*
    Код написан в иммперативной, структурной и процедурной парадигме.
    Выбрана процедурная парадигма, тк по условию задачи число n может быть любым,
    будет удобнее один раз написать, и много раз использовать данную функцию.
*/