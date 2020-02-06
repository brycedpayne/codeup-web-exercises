"use strict";
//
// Make a function named isOdd(number)

function isOdd(num) {
    var oddNum = num % 2 !== 0;
    return oddNum;
}

// console.log(isOdd(3));
// console.log(isOdd(2));
// console.log(isOdd(0));

// Make a function named isEven(number)

function isEven(num) {
    return !isOdd(num);
}

// console.log(isEven(3));
// console.log(isEven(2));
// console.log(isEven(0));

// Make a function named identity(input) that returns the input exactly as provided.

function identity(input) {
    return input;
}

// console.log(identity("EXACTLY"));
// console.log(identity(false));
// console.log(identity(324));

//     Make a function named isFive(input)

function isFive (num) {
    return num === 5;
}

// console.log(isFive(5));
// console.log(isFive(2));
// console.log(isFive(9));

// Make a function named addFive(input) that adds five to some input.

function addFive(num) {
    return num + 5;
}

// console.log(addFive(10));
// console.log(addFive(0));
// console.log(addFive(2));

//     Make a function named isMultipleOfFive(input)

function isMultipleOfFive(num) {
    var MultipleOfFive = num % 5 === 0;
    return MultipleOfFive;
}

// console.log(isMultipleOfFive(25));
// console.log(isMultipleOfFive(12));
// console.log(isMultipleOfFive(10));

// Make a function named isThree(input)

function isThree(num) {
    return num === 3;
}

// console.log(isThree(5));
// console.log(isThree(6));
// console.log(isThree(3));

// Make a function named isMultipleOfThree(input)

function isMultipleOfThree(num) {
    var MultipleOfThree = num % 3 === 0;
    return MultipleOfThree;
}

// console.log(isMultipleOfThree(10));
// console.log(isMultipleOfThree(6));
// console.log(isMultipleOfThree(9));

// Make a function named isMultipleOfThreeAndFive(input)

function isMultipleOfThreeAndFive(num) {
    return isMultipleOfFive(num) && isMultipleOfThree(num);
}

// console.log(isMultipleOfThreeAndFive(15));
// console.log(isMultipleOfThreeAndFive(30));
// console.log(isMultipleOfThreeAndFive(5));

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n

function isMultipleOf(target, n) {
    return target % n === 0;
}

// console.log(isMultipleOf(10, 2));
// console.log(isMultipleOf(11, 2));
// console.log(isMultipleOf(9, 3));

// Make a function named isTrue(boolean)

function isTrue(boolean) {
    return boolean === true;
}

// console.log(isTrue(true));
// console.log(isTrue(false));
// console.log(isTrue(5));

// Make a function named isFalse(boolean)

function isFalse(boolean){
    return boolean === false;
}
// console.log(isFalse(true));
// console.log(isFalse(false));
// console.log(isFalse(5));

// Make a function named isTruthy(input), remember that values other than true will behave like true

function isTruthy(input) {
    return Boolean(input);
}

// console.log(isTruthy(true));
// console.log(isTruthy(false));
// console.log(isTruthy(0));
// console.log(isTruthy(NaN));
// console.log(isTruthy(5));
// console.log(isTruthy("hello world!"));


// Make a function named isFalsy(input), remember that values other than false behave like false

function isFalsy(input) {
    return !isTruthy(input);
}

// console.log(isFalsy(true));
// console.log(isFalsy(false));
// console.log(isFalsy(0));
// console.log(isFalsy(NaN));
// console.log(isFalsy(5));
// console.log(isFalsy("hello world!"));

// Make a function named isVowel(letter)

function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(letter.toLowerCase()) !== -1;
}

// console.log(isVowel("a"));
// console.log(isVowel("b"));
// console.log(isVowel("e"));

// Make a function named isConsonant(letter)

function isConsonant(letter) {
    return !isVowel(letter);
}

// console.log(isConsonant("a"));
// console.log(isConsonant("b"));
// console.log(isConsonant("e"));

// Make a function named isCapital(letter)

function isCapital(letter) {
    return letter === letter.toUpperCase();
}

// console.log(isCapital("A"));
// console.log(isCapital("e"));
// console.log(isCapital("f"));
// console.log(isCapital("B"));

// Make a function named isLowerCase(letter)

function isLowerCase(letter) {
    return !isCapital(letter);
}

// console.log(isLowerCase("A"));
// console.log(isLowerCase("e"));
// console.log(isLowerCase("f"));
// console.log(isLowerCase("B"));

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter

function hasLowerCase(wordAsString) {
    return wordAsString !== wordAsString.toUpperCase();
}

// console.log(hasLowerCase("apple"));
// console.log(hasLowerCase("HELLO"));

// Make a function named isSpace(letter) that returns if a character is a space character

function isSpace(letter) {
    return " " === letter;
}

// console.log(isSpace("a"));
// console.log(isSpace(''));
// console.log(isSpace(" "));

// Make a function named isZero(number)

function isZero(number) {
    return number === 0;
}

// console.log(isZero("a"));
// console.log(isZero(2));
// console.log(isZero(0));
// console.log(isZero("0"));

// Make a function named notZero(input) that returns true if the input is not zero

function notZero(input) {
    return input !== 0;
}

// console.log(notZero("a"));
// console.log(notZero(2));
// console.log(notZero(0));
// console.log(notZero("0"));

// Write a function named lowerCase(string)

function lowerCase(wordAsString) {
    return wordAsString.toLowerCase();
}

// console.log(lowerCase("apple"));
// console.log(lowerCase("HELLO"));

// Write a function named double(n) that returns a number times two

function double(n) {
    return n * 2;
}

// console.log(double(5));
// console.log(double(2));
// console.log(double(7));

// Write a function named triple(n) that returns a number times 3

function triple(n) {
    return double(n) * 1.5;
}

// console.log(triple(5));
// console.log(triple(2));
// console.log(triple(7));

// Write a function named quadruple(n) that returns a number times 4

function quadruple(n) {
    return double(n) * 2;
}

// console.log(quadruple(5));
// console.log(quadruple(2));
// console.log(quadruple(7));

// Write a function named half(n) that returns 1/2 of the provided input

function half(n) {
    return double(n * .25);
}

// console.log(half(5));
// console.log(half(2));
// console.log(half(7));

// Write a function named subtract(a, b) that returns a minus b

function subtract(a,b) {
    return a - b;
}

// console.log(subtract(2, 1));
// console.log(subtract(4, 3));
// console.log(subtract(6, 2));

// Write a function named multiply(a, b) that returns the product of a times b

function multiply(a,b) {
    return a * b;
}

// console.log(multiply(2, 1));
// console.log(multiply(4, 3));
// console.log(multiply(6, 2));

// Write a function named divide(a, b) that returns a divided by b

function divide(a,b) {
    return a/b;
}

// console.log(divide(2, 1));
// console.log(divide(4, 3));
// console.log(divide(6, 2));

// Write a function named remainder(a, b) that returns the remainder after dividing a by b

function remainder(a,b) {
    return a%b;
}

// console.log(remainder(2, 1));
// console.log(remainder(4, 3));
// console.log(remainder(9, 2));

// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b

function modulo(a,b) {
    return a%b;
}

// console.log(modulo(2, 1));
// console.log(modulo(4, 3));
// console.log(modulo(9, 2));

// Write a function named cube(n) that returns n * n * n

function cube(n) {
    return Math.pow(n,3);
}

// console.log(cube(3));
// console.log(cube(2));

// Write a function named squareRoot(n) that returns the square root of the input

function squareRoot(n) {
    return Math.sqrt(n);
}

// console.log(squareRoot(4));
// console.log(squareRoot(16));

// Write a function named cubeRoot(n) that returns the cube root of the input

function cubeRoot(n) {
    return Math.cbrt(n);
}

// console.log(cubeRoot(27));
// console.log(cubeRoot(8));
// console.log(cubeRoot(64));

// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.

function invertSign(number) {
    return (typeof number === 'number' ? number * -1 : false)
}

// console.log(invertSign(-1));
// console.log(invertSign(1));
// console.log(invertSign("string"));
// console.log(invertSign(true));


// Write a function named degreesToRadians(number)

function degreesToRadians(number) {
    return number * Math.PI / 180;
}

// console.log(degreesToRadians(90));
// console.log(degreesToRadians(180));
// console.log(degreesToRadians(270));

// Write a function named radiansToDegrees(number)

function radiansToDegrees(number) {
    return  number * (180/math.PI);
}



// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
//     Make a function named trim(string) that removes empty spaces before and after the input.
//     Make a function named areEqual(input1, input2) that returns if both inputs have the same value
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
//     Make a function named not(input) returns the input with a flipped boolean
// Make a function named notNot(input) that the negation of the negation of the input.
//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// Write a function called reverseString(string) that reverses a string
// Make a function named absoluteValue(number) that returns the absolute value of a number.
//     Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.