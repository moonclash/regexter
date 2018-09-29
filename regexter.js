const RegexTer = {
  buildWordsRegex(words, ignoreCase=true) {
    const regex = new RegExp(words.reduce((a, b) => a + '|' + b), 'gi');
    return regex;
  },
  buildPattern(pattern, flag=null) {
    return flag ? flag : '' + pattern
  },
  buildLookAhead(current, followedBy) {
    return `${current}(?=${followedBy})`
  },
  buildLookBehind(current, preceededBy) {
    return `(?<=${preceededBy})${current}`;
  }
}
 
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


