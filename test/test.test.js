let check = require("../exercises/check.js");
var expect = require("chai").expect;
let assert = require("chai").assert;

let card = 7992739871;
let card2 = 1123214321;
let card3 = 123456;

describe("Card Function", function () {
  it("Card Function test 1", function () {
    expect(check(card)).to.equal(79927398713);
  }),
    it("Card Function test 2", function () {
      expect(check(card2), " Incorrect Value for Check: ").to.equal(
        11232143211
      );
    }),
    it("Card Function test 3", function () {
      assert.typeOf(check(card3), "number");
    });
});
