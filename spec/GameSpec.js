describe("Game",  function(){
  var game;
  var grid = jasmine.createSpyObj('grid', {'place': [], 'setGrid': [[]],'isFieldTaken': false});
  var playerO = jasmine.createSpyObj('player', {'getSymbol': 'o'});
  var playerX = jasmine.createSpyObj('player', {'getSymbol': 'x'});

  beforeEach(function(){
    game = new Game(grid, playerO, playerX);
  });

  it("should choose the grid field", function(){
    game.selectField(1,2);
    expect(grid.place).toHaveBeenCalledWith(1,2,'o');
  });

  it("should switch players", function(){
    game.selectField(1,2);
    expect(game.currentPlayer).toEqual(game.playerX);
  });
});
