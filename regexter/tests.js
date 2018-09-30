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

describe("One or more upper character test", function() {
  it("should return true if a string contains one or more upper characters", function() {
    expect(RegexTer.hasOneOrMoreUpper('These aren the caps you are looking for')).toBe(true);
  });
});

describe("Count a minimum number of pattern occurances", function() {
  it("should return true for a specified n of an occurance", function() {
    expect(RegexTer.countExact('dog', 2, 'one dog two dog in this string')).toBe(true);
  });
});

describe("String length in range test", function() {
	it("should return true if a given pattern's length is between the specified min and max", function() {
		expect(RegexTer.countInRange('d', 2, 3, 'there are between 2 dd and 3 ddd here')).toBe(true);
	});
});

describe("Words contain test", function() {
	it("should return true if a given array of words is contained in a string", function() {
		expect(RegexTer.containsWords(['dog', 'egg', 'horse'], 'Well i have a dog, that rides a horse and eats eggs')).toBe(true);
	});
});

describe("Find and return matching words test", function() {
	it("should return an array with matching words from a string", function() {
		expect(RegexTer.getWords(['dog', 'egg', 'horse'], 'Well i have a dog, that rides a horse and eats eggs').length).toEqual(3);
	});
});

describe("Starts with test", function() {
	it("should return true if a string starts with a specified pattern", function() {
		expect(RegexTer.startsWith('dare', 'daredevil')).toBe(true);
	});
});

describe("Ends with test", function() {
	it("should return true if a string ends with a specified pattern", function() {
		expect(RegexTer.endsWith('sho be', 'Plansho be')).toBe(true);
	});
});

describe("Followed by test", function() {
	it("should return true if a specified pattern is followed by another pattern", function() {
		expect(RegexTer.followedBy(pattern='a', follower='b', str='abba')).toBe(true);
	});
});

describe("Preceeded by test", function() {
	it("should return true if a specified pattern is preceeded by another pattern", function() {
		expect(RegexTer.preceededBy(pattern='ko', preceeder='yo', str='yoko')).toBe(true);
	});
});




