function Player(symbol) {
  this.symbol = symbol;
}

Player.prototype.getSymbol = function(){
  return this.symbol;
};
