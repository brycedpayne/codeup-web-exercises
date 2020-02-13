(function () {

    'use strict';

    //****************************** output an array of the indexes of a specific input ********************************

    var fruits = ['apple','banana','orange','apple','pineapple'];

    function allIndexesOf(inputArr, obj) {

        var indexArr = [], i = 0;

        for (i = 0; i < inputArr.length; i++)
            if (inputArr[i] === obj) {
                indexArr.push(i);
            }

        return indexArr
    }

    // console.log(allIndexesOf(fruits, 'apple'));
    // console.log(allIndexesOf(fruits, 'guava'));
    // console.log(allIndexesOf(fruits, 'pineapple'));

    //****************************** remove all occurrences of an input from an array **********************************

    var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

    function removeAll(inputArr, obj) {
        return inputArr.filter(word => word !== obj);
    }

    // console.log(removeAll(bugs, 'ant'));
    // console.log(removeAll(bugs, 'mosquito'));
    // console.log(removeAll(bugs, 'roach'));

    //****************************** generate a random number between a min and a max **********************************

    function randomInBetween(min, max) {
        return Math.floor(Math.random() * (max-min)) + min;
    }

    // console.log(randomInBetween(5, 10));
    // console.log(randomInBetween(90, 100));
    // console.log(randomInBetween(50, 100));

    //****************************** output random bit (one or zero) simulating a coin flip ****************************

    function coinFlip() {
        return Math.floor(Math.random() * 2);
    }

    // console.log(coinFlip());
    // console.log(coinFlip());
    // console.log(coinFlip());

    //****************************** output value of 2 six sided dice rolls ********************************************

    function twoDice() {
        return Math.ceil(Math.random() * 6) + Math.ceil(Math.random(1) * 6);
    }

    // console.log(twoDice());
    // console.log(twoDice());
    // console.log(twoDice());

    //****************************** output value of a twenty(20) sided die ********************************************

    function twentySidedDie() {
        return Math.ceil(Math.random() * 20);
    }

    // console.log(twentySidedDie());
    // console.log(twentySidedDie());
    // console.log(twentySidedDie());

    //****************************** output value of a twelve(12) sided die ********************************************

    function twelveSidedDie() {
        return Math.ceil(Math.random() * 12);
    }

    // console.log(twelveSidedDie());
    // console.log(twelveSidedDie());
    // console.log(twelveSidedDie());

    //****************************** output value of a tetrahedron (1 to 4) ********************************************

    function tetrahedron() {
            return Math.ceil(Math.random() * 4);
    }

    // console.log(tetrahedron());
    // console.log(tetrahedron());
    // console.log(tetrahedron());

    //****************************** output value of a roll of a die ***************************************************

    function rollDie() {
        return Math.ceil(Math.random() * 6);
    }

    // console.log(rollDie());
    // console.log(rollDie());
    // console.log(rollDie());

    //****************************** output value of several rolls *****************************************************

    function listOfRolls(num) {

        var rollsList = [];

        for (var i = 0; i < num; i++) {
            rollsList.push(rollDie());
        }
        return rollsList
    }

    // console.log(listOfRolls(5));
    // console.log(listOfRolls(3));
    // console.log(listOfRolls(11));

    //****************************** output value of several rolls of different types of die ***************************

    function listOfRollsFromDieFunc(numberOfRolls, diceFunction) {

        var rollsList = [];

        // var typeOfRoll = diceFunction

        for (var i = 0; i < numberOfRolls; i++) {
            rollsList.push(diceFunction());
        }
        return rollsList

    }

    // console.log(listOfRollsFromDieFunc(3, rollDie));
    // console.log(listOfRollsFromDieFunc(2, tetrahedron));
    // console.log(listOfRollsFromDieFunc(1, twelveSidedDie));
    // console.log(listOfRollsFromDieFunc(6, twentySidedDie));
    // console.log(listOfRollsFromDieFunc(5, coinFlip));



    var testArr = [1,3,5,7,9,11]
    var testStringArr = ['red','blue','green','purple']
    var testStringArrTwo = ['aquamarine','turquoise','tenletters','red','blue','green','purple']

// **
// * JS Array Practice
//     * Intermediate Array practice: array creation, iteration, and manipulation
//     */

// Exercise 0. Write a function named first() that returns only the first element of an array

    function first(inputArr) {
        return inputArr[1];
    }

    // console.log(first(testArr));

// Exercise 1. Write a function named secondToLast() that returns the second to last element

    function secondToLast(inputArr) {
        return inputArr[inputArr.length - 2];
    }

    // console.log(secondToLast(testArr));

// Exercise 2. Write a function named rest() that takes an an array and returns an array containing everything except the first element.


    // this function changes the original array
    function restAlt(inputArr) {

        inputArr.shift();

        return inputArr;
    }

    //this method does not change the original array MAYBE.......

    function rest(inputArr) {

        return inputArr.splice(inputArr.length-(inputArr.length-1),inputArr.length-1);
    }

    // console.log(rest(testArr));
    // console.log(restAlt(testArr));

// Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array

    function getLongestString(inputArr) {
        var longest = inputArr.reduce(function (a, b) {
            return a.length > b.length ? a : b
        }, '');
        console.log(longest);
    }

    // getLongestString(testStringArr);
    // getLongestString(testStringArrTwo);

// Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.

    function getShortestString(inputArr) {
        var shortest = inputArr.reduce(function (a, b) {
            return a.length <= b.length ? a : b
        });
        console.log(shortest);
    }

    // getShortestString(testStringArr);
    // getShortestString(testStringArrTwo);

// Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays. The function should return a single array containing all of the elements of the first array along with all of the elements of the second array
// Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]
    
    function addTwoArrays(arrOne, arrTwo) {
        return arrOne.concat(arrTwo);
    }

    // console.log(addTwoArrays(testArr, testStringArr));
    // console.log(addTwoArrays(testStringArr, testStringArrTwo));

// Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]

    function getUniqueValues(inputArr) {

    }

// Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.

// Exercies 7. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.

// Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// The first argument should be a specific numeral or character
// The second argument should be any given string
// getIndexesOf() should return an array containing all of the indexes of that character in the string
// Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// Example: getIndexesOf("z", "banana") should return an empty array [] since there are no "z" characters in "banana"

// Exercise 9. Write a function named removeAll.
// It should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array
// Example: removeAll([1, 2, 3], 2) should return [1, 3]
// Example 2: removeAll([2, 2, 3, 4, 5, 2, 2], 2) should return [3, 4, 5]

// Exercise 10. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers

// Exercise 11. Write a function named getNFibonacci(n) that returns an array containing the first n fibonacci numbers

// Exercise 12. Write a function named moveFirstToLast() that takes in an array
// the function should return the array with the first element at the end
// Example: moveFirstToLast([1, 2, 3, 4]) should return [2, 3, 4, 1]


// Exercise 13. Write a function named zip() that takes in two arrays with the same number of elements
// Zip returns a new array of arrays where each element is an array of the two elements at the same index
// Example: zip([1, 2, 3], [4, 5, 6]) returns [[1, 4], [2, 5], [3, 6])
// Example: zip(["a", "b", "c"], ["x", "y", "z"]) returns [["a", "x"], ["b", "y"], ["c", "z"]]


})();
