'use strict';

function printRules(){
    console.log('%cКрестики-нолики', 'color:#03fcc6;font-size:1.8rem');
    console.log('%cУсловия: по очереди в консоли', 'color:#0d5dde;font-size:0.8rem');
    console.log('%cstart() - начать игру ', 'color:#0d5dde;font-size:0.8rem');
    console.log('%cвызывайте ход типа next(1,1)', 'color:#0d5dde;font-size:0.8rem');
    console.log('%ctestGame(), если лень играть:)', 'color:#0d5dde;font-size:0.8rem');
}

let field = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function showField(f){
    function symbolDraw(symbol){
        if( !symbol ){
            return '▒';
        }
        return symbol;
    }

    let result = `     x1  x2  x3 
   ╔═══╦═══╦═══╗
y1 ║ ${symbolDraw(f[0][0])} ║ ${symbolDraw(f[0][1])} ║ ${symbolDraw(f[0][2])} ║
   ╠═══╬═══╬═══╣
y2 ║ ${symbolDraw(f[1][0])} ║ ${symbolDraw(f[1][1])} ║ ${symbolDraw(f[1][2])} ║
   ╠═══╬═══╬═══╣
y3 ║ ${symbolDraw(f[2][0])} ║ ${symbolDraw(f[2][1])} ║ ${symbolDraw(f[2][2])} ║
   ╚═══╩═══╩═══╝
`;
    console.log(result);
}

let isPlus = true;

function checkWin(){
    const f = field;

    if( f[0][0] && f[0][0] === f[0][1] && f[0][1] === f[0][2]) return f[0][0];
    if( f[1][0] && f[1][0] === f[1][1] && f[1][1] === f[1][2]) return f[1][0];
    if( f[2][0] && f[2][0] === f[2][1] && f[2][1] === f[2][2]) return f[2][0];

    if( f[0][0] && f[0][0] === f[1][0] && f[1][0] === f[2][1]) return f[0][0];
    if( f[0][1] && f[0][1] === f[1][1] && f[1][1] === f[2][1]) return f[0][1];
    if( f[0][2] && f[0][2] === f[1][2] && f[1][2] === f[2][2]) return f[0][2];

    if( f[0][2] && f[0][2] === f[1][1] && f[1][1] === f[2][0]) return f[0][2];
    if( f[0][0] && f[0][0] === f[1][1] && f[1][1] === f[2][2]) return f[0][0];

    return false;
}

function nextMove(x,y, symbol = '+'){
    console.clear();
    printRules();
    field[y-1][x-1] = symbol;
    showField(field);
}
function next(x, y){
    if( !field[y-1][x-1] ){
        nextMove(x, y, isPlus ? '+' : 'o');
    } else {
        console.log('Сюда ходить нельзя :)');
        return;
    }

    let win = checkWin();
    if (win) {
        console.log(`%cПобеда '${win}'!`,'color:#468a5d;font-size:1.2rem');
        console.log('%cКоманда start() для запуска новой игры', 'color:#468a5d;font-size:0.8rem');
    }
    isPlus = !isPlus;
}

function start(){
    console.clear();
    printRules();
    field = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    showField(field);
}
printRules();

function testGame() {
    start();
    next(1, 1);
    next(2, 1);
    next(2, 2);
    next(3, 1);
    next(3, 3)
}