// The board
var Board = function() {
	// Keep track of it's own state
	this.gameBoard = [
		[undefined, undefined, undefined],
		[undefined, undefined, undefined],
		[undefined, undefined, undefined]
	]
	
}

// have a method someone can call on it to write
Board.prototype.write = function(x, y, symbol) {
    var arrx = x - 1;
    var arry = y - 1;
    var countX = 0;
    var countY = 0;
	this.gameBoard[arrx][arry] = symbol;
	for(var i = 0; i < 3; i++){
		for(var j = 0; j < 3; j++){
			if(this.gameBoard[i][j] === "X")
				console.log("X")
		}
	}
    return this.gameBoard
	// check, every time someone writes on it, whether or not someone has won
		// check the top left space, and the bottom right space for the same symbol
		// check ajacent squares for the same character
	// notify the winner
};



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

Board.prototype.checkForWin = function(first_argument) {
	
};


// check a cell's neighbors for the same symbol
// Board.prototype.checkNeighbor = function(x, y, direction) {
// 	switch (direction){
// 		case "up":
// 		case "down":
// 		case "left":
// 		case "right":
// 		case "DupR":
// 		case "DupL":
// 		case "DdownR":
// 		case "DdownL":

// 		case default :
// 			return false
// 	}
// };


// Board.checkNeighbor(1,1,"left")

// the players should
// call the board's method for making marks
// know whether or not they are x or o