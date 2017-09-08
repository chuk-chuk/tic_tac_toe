describe("Game",  function(){
  var game;
  var grid;
  var player;

  beforeEach(function(){
    game = new Game();
    grid = jasmine.createSpy('grid',['setGrid']);
    playerO = jasmine.createSpy('player', ['getSymbol']);
    playerX = jasmine.createSpy('player', ['getSymbol']);
  });


});
