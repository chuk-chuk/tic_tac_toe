function Game() {
  this.playerO = new Player("o");
  this.playerX = new Player("x");
  this.newGrid = new Grid();
  this.currentPlayer = this.playerO;
}
