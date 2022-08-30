let flag = false;
let board = [];

for(let i = 0; i < 3; i++) {
   board.push([]);
   for(let j = 0; j < 3; j++) {
    board[i].push(null);
   }
}

function clicked(id) {
    if(flag) {
        document.getElementById(id).innerHTML = "O";
        board[id[0]][id[1]] = "O";
    } else {
        document.getElementById(id).innerHTML = "X";
        board[id[0]][id[1]] = "X";
    }
    document.getElementById(id).disabled = true;
    checkIfWon(id);
    flag = !flag;
}

function checkRow(id) {
    let player = flag ? "O" : "X";
    for(let i = 0; i < 3; i++) {
        if (board[id[0]][i] != player) {
            return false;
        }
    }
    return true;
}

function checkColumn(id) {
    let player = flag ? "O" : "X";
    for(let i = 0; i < 3; i++) {
        if (board[i][id[1]] != player) {
            return false;
        }
    }
    return true;
}

function checkDiagonal(id) {
    let player = flag ? "O" : "X";
    for(let i = 0; i < 3; i++) {
        if(board[i][i] != player) {
            return false;
        }
    }
    return true;
}

function checkAntiDiagonal(id) {
    let player = flag ? "O" : "X";
    for(let i = 0; i < 3; i++) {
        if(board[i][3 - 1 - i] != player) {
            return false;
        }
    }
    return true;
}

function refreshBoard() {
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
         board[i][j] = null;
         document.getElementById(i.toString() + j.toString()).innerHTML = "";
         document.getElementById(i.toString() + j.toString()).disabled = false;
        }
     }
}

function checkIfWon(id) {
    let player = flag ? "O" : "X";
    if (checkRow(id)) {
        alert("Player " + player + " has won!");
        refreshBoard();
        return;
    } else if (checkColumn(id)) {
        alert("Player " + player + " has won!");
        refreshBoard();
        return;
    } else if (checkDiagonal(id)) {
        alert("Player " + player + " has won!");
        refreshBoard();
        return;
    } else if (checkAntiDiagonal(id)) {
        alert("Player " + player + " has won!");
        refreshBoard();
        return;
    } else {
        return;
    }
}