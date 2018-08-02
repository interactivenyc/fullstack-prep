// YOUR CODE BELOW

let ticTacToe = {};
ticTacToe.clear = function () {
    ticTacToe.board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    return ticTacToe.board;
}

ticTacToe.move = function (player, x, y) {
    if (ticTacToe.board[x][y] == null) {
        ticTacToe.board[x][y] = player;

    } else {
        console.log("illegal move");
    }

    console.log(ticTacToe.board);
    return ticTacToe.board;
    
}

ticTacToe.clear();

/*
ticTacToe.move('x',1,1);
ticTacToe.move('y',2,2);
ticTacToe.move('x',2,2);
*/