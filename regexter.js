const RegexTer = {
  buildWordsRegex(words, ignoreCase=true) {
    const regex = new RegExp(words.reduce((a, b) => a + '|' + b), 'gi');
    return regex;
  },
  buildPattern(pattern, flag=null) {
    return flag ? flag : '' + pattern
  },
  buildAhead(pattern) {
    return `(?=${pattern})`;
  },
  buildBehind(pattern) {
    return `(?<=${pattern})`;
  },
  buildLookAhead(current, followedBy) {
    const ahead = this.buildAhead(current);
    return `${current}${ahead}`;
  },
  buildLookBehind(current, preceededBy) {
    const behind = this.buildBehind(current);
    return `${behind}${current}`;
  }
};

RegexTer.hasDigits = function(str) {
  return /\d/g.test(str);
};

RegexTer.hasWhiteSpace = function(str) {
  return /\s/g.test(str);
};

RegexTer.hasSpecialCharacters = function(str) {
  return /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|\s/g.test(str);
}

RegexTer.hasOneOrMoreUpper = function(str) {
  return /[A-Z]{1,}/g.test(str);
};
 
RegexTer.containsWords = function(str, words) {
  const regex = this.buildWordsRegex(words);
  return regex.test(str);
};
 
RegexTer.getWords = function(str, words) {
  const regex = this.buildWordsRegex(words);
  return str.match(regex);
};
 
RegexTer.getWordsCount = function(str, words) {
  const matches = this.getWords(str, words);
  return matches.length;
};
 
RegexTer.startsWith = function(str, pattern) {
    const regex = new RegExp(this.buildPattern(pattern, '^'), 'gi');
    return regex.test(str);
  };
 
RegexTer.endsWith = function(str, pattern) {
    const regex = new RegExp(this.buildPattern('$', pattern), 'gi');
    return regex.test(str);
  };

RegexTer.followedBy = function(pattern, follower, str) {
  const regex = new RegExp(this.buildPattern(this.buildLookAhead(pattern, follower)));
  return regex.test(str);
}

RegexTer.preceededBy = function(pattern, preceeder, str) {
  const regex = new RegExp(this.buildPattern(this.buildLookBehind(pattern, preceeder)));
  return regex.test(str);
}

RegexTer.between = function(left, middle, right, str) {
  const leftPattern = this.buildBehind(left);
  const rightPattern = this.buildAhead(right);
  const regex = new RegExp(leftPattern + middle + rightPattern, 'gi');
  return regex.test(str);
}

RegexTer.checkMultipleConditions = function(conditions, str) {
  const checksResults = conditions.map(condition => condition(str));
  return checksResults.every(result => result);
}