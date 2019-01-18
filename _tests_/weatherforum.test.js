var multiply = require('../server.js')

describe("multiply", function() {
  it("should multiply properly when passed numbers", function() {
    expect(multiply(2, 4)).toEqual(8);
  });

  it("should throw when not passed numbers", function() {
    expect(function testThrow() {
      multiply(2, "a")
    }).toThrow(Error);
  });
});