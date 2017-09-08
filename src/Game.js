(function(exports){
function Game(grid, playerO, playerX) {
  this.playerO = playerO;
  this.playerX = playerX;
  this.grid = grid;
  this.currentPlayer = this.playerO;
}

Game.prototype.selectField = function(x,y) {
  if (this.grid.isFieldTaken()) {
    throw new Error('Field is not available');
  } else {
    this.grid.place(x, y, this.currentPlayer.getSymbol());
    this.switchTurn();
    return this.grid.setGrid();
  }
  return this.grid.setGrid();
};

Game.prototype.switchTurn = function() {
  (this.currentPlayer === this.playerO) ? (this.currentPlayer = this.playerX) : (this.currentPlayer = this.playerO);
  return this.currentPlayer;
};
exports.Game = Game;
})(this);
