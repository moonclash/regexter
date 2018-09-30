const RegexTer =  require('./regexter.js');

describe("Digit test check", function() {
  it("should return true if a string contains digits", function() {
    expect(RegexTer.hasDigits('hell0')).toBe(true);
  });
});

describe("White space test", function() {
  it("should return true if a string contains whitespace", function() {
    expect(RegexTer.hasWhiteSpace('hello world')).toBe(true);
  });
});

describe("Special characters tests", function() {
  it("should return true if a string contains special characters", function() {
    expect(RegexTer.hasSpecialCharacters('h!!hello')).toBe(true);
  });
});

