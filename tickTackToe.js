// The board
var Board = function() {
	// Keep track of it's own state
	this.gameBoard = [
		[undefined, undefined, undefined],	//[0,0],[0,1],[0,2]
		[undefined, undefined, undefined],	//[1,0],[1,1],[1,2]
		[undefined, undefined, undefined]	//[2,0],[2,1],[2,2]
	]
}

var x = {
	symbol: "X"
};
var y = {
	symbol: "Y"
};


// have a method someone can call on it to write
Board.prototype.write = function(arrx, arry, obj) {
	this.gameBoard[arrx - 1][arry - 1] = obj.symbol;

	this.checkLines(obj);
	this.checkDiagonal(obj);
};

Board.prototype.checkLines = function(obj){
	var board = this.gameBoard;
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board.length; j++) {
			if(j === 0 && i === 0){
				if(board[i][j] === obj && board[i][j + 1] === obj && board[i][j + 2] === obj){
					this.checkForWin(obj);
				}
				if(board[i][j] === obj && board[i + 1][j] === obj && board[i + 2][j] === obj){
					this.checkForWin(obj);
				}
			} else if (i === 0 && j === 1){
				if(board[i][j] === obj && board[i + 1][j] === obj && board[i + 2][j] === obj){
					this.checkForWin(obj);
				}
			} else if(i === 0 && j === 2){
				if(board[i][j] === obj && board[i + 1][j] === obj && board[i + 2][j] === obj){
					this.checkForWin(obj);
				}
			}
		}
	}
}

Board.prototype.checkDiagonal = function(obj){
	var board = this.gameBoard
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board.length; j++) {
			if(j === 0 &&  i === 0){
				if(board[i][j] === obj && board[i + 1][j + 1] === obj && board[i + 2][j + 2] === obj){
					this.checkForWin(obj);
				}
			} else if (j === 2 && i === 0){
				if(board[i][j] === obj && board[i + 1][j - 1] === obj && board[i + 1][j - 1] === obj){
					this.checkForWin(obj);
				}
			}
		}
	}
}


Board.prototype.spitSpaces = function(){
    for(var i = 0;i < this.gameBoard.length; i++){
        if(i === 0){
            console.log("in the top level " + this.gameBoard[i]);
        } else if(i === 1){
            console.log("In the middle level " + this.gameBoard[i]);
        } else {
            console.log("in the Bottom level " + this.gameBoard[i]);
        }
    }
}

Board.prototype.checkForWin = function(thing) {
	console.log(thing.symbol + " : Wins");
};