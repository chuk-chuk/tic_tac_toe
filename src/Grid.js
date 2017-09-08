function Grid() {
  this.grid = [[null, null, null], [null, null, null], [null, null, null]];
}

Grid.prototype.setGrid = function(){
  return this.grid;
};

Grid.prototype.place = function(x, y, symbol) {
  this.grid[x][y] = symbol;
};

Grid.prototype.isFieldTaken = function(x,y){
  if(this.grid[x][y] !== null){
    return true;
  }
};
