# regexter

## What is RegexTer?

RegexTer is a simple utility tool that aims to reduce complexity around regular expressions and provide developers with a set of methods that build and test regular expressions and patterns.

## Usage

### Private methods

RegexTer has a few core methods defined in the `RegexTer` object that are internal to the `RegexTer` object and are used to build certain patterns.

`RegexTer.buildPattern`
 * constructs basic pattern with optional flags
 
`RegexTer.buildAhead`
 * constructs a pattern to be used for building ahead
 
`RegexTer.buildBehind`
 * constructs a pattern to be used for building ahead
 
`RegexTer.buildLookAhead`
 * constructs a regular expression pattern for look aheads
 
`RegexTer.buildLookBehind`
 * constrcuts a regular expression pattern for look behinds
 
### Public methods

RegexTer's public methods to be used for creating and testing regular expressions with strings

#### hasDigits

`RegexTer.hasDigits(str)` - checks a string if it contains digits.
 Example:
 ```
  RegexTer.hasDigits('h3llo') // returns true
  RegexTer.hasDigits('hello') // returns false
 ```

 #### hasWhiteSpace
 
 `RegexTer.hasWhiteSpace(str)` - checks a string if it contains whitespace.
 Example:
 ```
  RegexTer.hasWhiteSpace('hello world') // returns true
  RegexTer.hasWhiteSpace('helloworld') // returns false
 ```

  #### noWhiteSpace
 
 `RegexTer.noWhiteSpace(str)` - only returns `true` if the string does not contain whitespace
 Example:
 ```
  RegexTer.noWhiteSpace('hello world') // returns false
  RegexTer.noWhiteSpace('helloworld') // returns true
 ```
  #### hasSpecialCharacters
 
  `RegexTer.hasSpecialCharacters(str)` - only returns `true` if the string contains any special characters such as `!"£$%^@`
 Example:
 ```
  RegexTer.hasSpecialCharacters('regular expressions are fun!!!') // returns true
  RegexTer.hasSpecialCharacters('regular expressions are fun') // returns false
 ```

  #### hasOneOrMoreUpper

  `RegexTer.hasOneOrMoreUpper(str)` - only returns `true` if the string contains one or more upper case characters
 Example:
 ```
  RegexTer.hasOneOrMoreUpper('i aM dOinG ReGeX') // returns true
  RegexTer.hasOneOrMoreUpper('i am doing regex') // returns false
 ```
 
   `RegexTer.hasOneOrMoreUpper(str)` - only returns `true` if the string contains one or more upper case characters
 Example:
 ```
  RegexTer.hasOneOrMoreUpper('i aM dOinG ReGeX') // returns true
  RegexTer.hasOneOrMoreUpper('i am doing regex') // returns false
 ```

 #### minMaxLength

   `RegexTer.minMaxLength(min=null, max=null, str)` - allows you to check the lenght of a string by min, max or a specific range
 Example:
 ```
  // checking for a string lenght between a certain range:
  RegexTer.minMaxLength(min=3, max=10, str='hey world!') // returns true
  RegexTer.minMaxLength(min=5, max=null, str='hello') // returns true
  RegexTer.minMaxLength(min=null, max=10, str='juqwerpald') // returns true

 ```
 #### countAtLeast

  `RegexTer.countAtLeast(pattern, n, str)` - counts a minimum number of occurences of a specified pattern in a string 
 Example:
 ```
  RegexTer.countAtLeast('car', 2, 'there are 2 car in this car') // returns true
  RegexTer.countAtLeast('car', 2, 'there are 2 cat in this car') // returns false
 ```

  #### exactMatch

  `RegexTer.exactMatch(pattern, str)` - will match a pattern strictly
 Example:
 ```
  RegexTer.exactMatch('cat', 'cat') // returns true
  RegexTer.exactMatch('car', 'cat') // returns false
 ```

  #### between

   `RegexTer.between(left, middle, right, str)` - will match a `middle` pattern if it's preceeded by `left` and followed by `right`
 Example:
 ```
  RegexTer.between(left='yo', middle='ko', right='no', 'yokono') // returns true
  RegexTer.between(left='yo', middle='yo', right='no', 'yokono') // returns false
 ```



