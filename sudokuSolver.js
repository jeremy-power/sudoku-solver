var board = [
              [7, 8, 0, 4, 0, 0, 1, 2, 0],
              [6, 0, 0, 0, 7, 5, 0, 0, 9],
              [0, 0, 0, 6, 0, 1, 0, 7, 8],
              [0, 0, 7, 0, 4, 0, 2, 6, 0],
              [0, 0, 1, 0, 5, 0, 9, 3, 0],
              [9, 0, 4, 0, 6, 0, 0, 0, 5],
              [0, 7, 0, 3, 0, 0, 0, 1, 2],
              [1, 2, 0, 0, 0, 7, 4, 0, 0],
              [0, 4, 9, 2, 0, 6, 0, 0, 7],
];
const ROWS = 9;
const COLUMNS = 9;

/**
 * Recursive function that uses backtracking to replace each 0 in the sudoku board with the correct #.
 * @param {Array} board 
 */
function solve(board){
    var currentIndex;
    var emptyIndex = findEmpty(board);
    if(emptyIndex){
        currentIndex = emptyIndex;
    } else{
        return true;
    }

    //Loop through each possible number
    for(let i = 1; i < 10; i++){
        //if the number would fit
        if(isMoveValid(board, currentIndex, i)){
            //place it in the board
            board[currentIndex.row][currentIndex.column] = i;
            //move to the next number
            if(solve(board)){
                return true;
            }
            //if the recursion breaks, set the previous index back to 0
            board[currentIndex.row][currentIndex.column] = 0;
        }
    }
    //break recursion if no numbers would fit here
    return false;
}

function isMoveValid(board, position, number){
    //check row
    for(let column = 0; column < COLUMNS; column++){
        if(board[position.row][column] === number){
            return false;
        }
    }
    //check column
    for(let row = 0; row < ROWS; row++){
        if(board[row][position.column] === number){
            return false;
        }
    }
    //check box
    //find the index (0-2) of x and y position of box
    boxX = Math.floor(position.column / 3);
    boxY = Math.floor(position.row / 3);
    
    //for each 3 columns in that box
    for(let hIndex = boxX*3; hIndex < (boxX + 3); hIndex++){
        //for each vertical 3 numbers in that column
        for(let vIndex = boxY*3; vIndex < (boxY + 3); vIndex++){
            //if number is already present, fail
            if(board[vIndex][hIndex] === number){
                return false;
            }
        }
    }
    return true;
}

/**
 * Finds the next empty 
 * @param {Array} board 
 */
function findEmpty(board){
    for(let row = 0; row < ROWS; row++){
        for(let column = 0; column < COLUMNS; column++){
            if(board[row][column] === 0){
                return {row : row,
                        column : column};
            }
        }
    }
    return null;
}

solve(board);
console.table(board);