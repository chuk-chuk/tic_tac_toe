describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player("O");
  });

  it("should return the symbol", function() {
    expect(player.getSymbol()).toEqual("O");
  });

});
