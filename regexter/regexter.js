const RegexTer = {
    buildWordsRegex(words, ignoreCase = true) {
        const regex = new RegExp(words.reduce((a, b) => a + '|' + b), 'gi');
        return regex;
    },
    buildPattern(pattern, flag = null) {
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
        return `${current}${followedBy}`;
    },
    buildLookBehind(current, preceededBy) {
        const behind = this.buildBehind(current);
        return `${preceededBy}${current}`;
    }
};

RegexTer.hasDigits = function(str) {
    return /\d/g.test(str);
};

RegexTer.hasWhiteSpace = function(str) {
    return /\s/g.test(str);
};

RegexTer.noWhiteSpace = function(str) {
    return RegexTer.hasWhiteSpace(str) === false;
}

RegexTer.hasSpecialCharacters = function(str) {
    return /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|\s/g.test(str);
}

RegexTer.hasOneOrMoreUpper = function(str) {
    return /[A-Z]{1,}/g.test(str);
};


RegexTer.minMaxLength = function(min=null, max=null, str) {
    if (min && max) {
        return str.length >= min && str.length <= max;
    }

    if (min) {
        return str.length >= min;
    }

    if (max) {
        return str.length <= max;
    }
}

RegexTer.countAtLeast = function(pattern, n, str) {
    const regexCore = this.buildPattern(`${pattern}{${n},}`);
    const regex = new RegExp(regexCore);
    return regex.test(str);
};

RegexTer.countExact = function(pattern, n, str) {
    const regexCore = this.buildPattern(`${pattern}`);
    const regex = new RegExp(regexCore, 'g');
    return str.match(regex).length === n;
};

RegexTer.countInRange = function(pattern, min, max, str) {
    const regexCore = this.buildPattern(`${pattern}{${min},${max}}`);
    const regex = new RegExp(regexCore);
    return regex.test(str);
};

RegexTer.containsWords = function(words, str) {
    const regex = this.buildWordsRegex(words);
    return regex.test(str);
};

RegexTer.getWords = function(words, str) {
    const regex = this.buildWordsRegex(words);
    return str.match(regex);
};

RegexTer.getWordsCount = function(words, str) {
    const matches = this.getWords(str, words);
    return matches.length;
};

RegexTer.startsWith = function(pattern, str) {
    const regex = new RegExp(this.buildPattern(pattern, '^'), 'gi');
    return regex.test(str);
};

RegexTer.endsWith = function(pattern, str) {
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

RegexTer.checkMultipleConditions = function(conditions) {
    return conditions.every(result => result);
}

RegexTer.matchSimpleConditions = function(conditions, str) {
    const resultCheck = conditions.map(condition => condition.call(null, str));
    return resultCheck.every(result => result);
}

RegexTer.exactMatch = function(pattern, str) {
    const regex = new RegExp(`^${pattern}$`,'g');
    return regex.test(str);
}


module.exports = RegexTer;