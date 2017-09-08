function Game(grid, playerO, playerX) {
  this.playerO = playerO;
  this.playerX = playerX;
  this.grid = grid;
  this.currentPlayer = this.playerO;
}

Game.prototype.selectField = function(x,y) {
  this.grid.place(x, y, this.currentPlayer.getSymbol());
};
