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

`RegexTer.hasDigits(str)` - checks a string if it contains digits.
 Example:
 ```
  RegexTer.hasDigits('h3llo') // returns true
  RegexTer.hasDigits('hello') // returns false
 ```
 
 `RegexTer.hasWhiteSpace(str)` - checks a string if it contains whitespace.
 Example:
 ```
  RegexTer.hasWhiteSpace('hello world') // returns true
  RegexTer.hasWhiteSpace('helloworld') // returns false
 ```
 
 `RegexTer.noWhiteSpace(str)` - only returns `true` if the string does not contain whitespace
 Example:
 ```
  RegexTer.noWhiteSpace('hello world') // returns false
  RegexTer.noWhiteSpace('helloworld') // returns true
 ```
 
  `RegexTer.hasSpecialCharacters(str)` - only returns `true` if the string contains any special characters such as `!"£$%^@`
 Example:
 ```
  RegexTer.hasSpecialCharacters('regular expressions are fun!!!') // returns true
  RegexTer.hasSpecialCharacters('regular expressions are fun') // returns false
 ```

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


   `RegexTer.minMaxLength(min=null, max=null, str)` - allows you to check the lenght of a string by min, max or a specific range
 Example:
 ```
  // checking for a string lenght between a certain range:
  RegexTer.minMaxLength(min=3, max=10, str='hey world!') // returns true
  RegexTer.minMaxLength(min=5, max=null, str='hello') // returns true
  RegexTer.minMaxLength(min=null, max=10, str='juqwerpald') // returns true

 ```
 
 
