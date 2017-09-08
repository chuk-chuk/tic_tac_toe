(function(exports){
function Rules(grid) {
  this.grid = grid;
}

Rules.prototype.rowWin = function(){
  arr = this.grid.setGrid();
  for (var i = 0; i < arr.length; i++){
    if(arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]){
      console.log('you win');
      break;
    }
  }
};
exports.Rules = Rules;
})(this);
