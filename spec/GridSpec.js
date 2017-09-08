describe("Grid",  function(){
  var grid;

  beforeEach(function(){
    grid = new Grid();
  });

  it("should return the array", function() {
    expect(grid.setGrid()).toEqual(jasmine.any(Array));
  });

  it("should return the right length of the array", function() {
    expect(grid.grid.length).toEqual(3);
  });

  it("should be able to place the symbol", function(){
    grid.place(0,1,"o");
    expect(grid.setGrid()[0][1]).toEqual('o');
  });

  it("should check if a field isn't empty", function(){
    grid.place(0,1,"o");
    expect(grid.isFieldTaken(0,1)).toBe(true);
  });

});
