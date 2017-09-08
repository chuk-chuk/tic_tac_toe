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

});
