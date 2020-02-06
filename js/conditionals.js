"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// var input = confirm("Would you like to enter a number?");
//
// if (input) {
//
//     var userInput = prompt("please enter a number");
//     var numInput = Number(userInput)
//
//     if (isNaN(numInput)) {
//         alert(userInput + " is not a number");
//     } else {
//         if (numInput % 2 === 0) {
//             alert(numInput % 2);
//             var isOdd = "even"
//         } else {
//             isOdd = "odd";
//         }
//
//         if (numInput === Math.abs(numInput)) {
//             var isNeg = "positive";
//         } else {
//             isNeg = "Negative"
//         }
//         alert(numInput + " is " + isOdd + ", plus 100 = " + (numInput+100) + ", and is " + isNeg + ".");
//     }
// //
// }

function defineNumber() {
    var input = confirm("Would you like to enter a number?");

    if (input) {

        var userInput = prompt("please enter a number");
        var numInput = Number(userInput)

        if (isNaN(numInput)) {
            alert(userInput + " is not a number");
        } else {
            if (numInput % 2 === 0) {
                var isOdd = "Even";
            } else {
                isOdd = "Odd";
            }

            if (numInput === Math.abs(numInput)) {
                var isNeg = "positive";
            } else {
                isNeg = "Negative"
            }
            alert(numInput + " is " + isOdd + ", " + numInput + " + 100 = " + (numInput + 100) + ", and is " + isNeg + ".");
        }

    } else {
        alert("Thanks anyway")
    }

}

// defineNumber();


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//
// var inputColor = prompt("please enter a color: ").toLowerCase();

function analyzeColor(userInput) {
    if (userInput === 'red') {
        return "Some apples are red!";
    } else if (userInput === 'orange') {
        return "I can't think of anything that rhymes with orange...can you?";
    } else if (userInput === 'yellow') {
        return "Our sun is yellow.";
    } else if (userInput === 'green') {
        return "Chlorophyll makes plants green.";
    } else if (userInput === 'blue') {
        return "The sky isn't really blue you know.";
    } else if (userInput === 'indigo') {
        return "Indigo means 'from India' and originates from a dye color.";
    } else if (userInput === 'violet') {
        return "Violet has long been associated with royalty because the dye was so expensive...Neato!";
    } else {
        return "I don't know anything about the color '" + userInput + "'";
    }
}

// alert(analyzeColor(inputColor));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(userInput) {

    var outputInfo; //string output

    switch (userInput) {
        case 'red':
            outputInfo = "Some apples are red!";
            break;
        case 'orange':
            outputInfo = "I can't think of anything that rhymes with orange...can you?";
            break;
        case 'yellow':
            outputInfo = "Our sun is yellow.";
            break;
        case 'green':
            outputInfo = "Chlorophyll makes plants green.";
            break;
        case 'blue':
            outputInfo = "The sky isn't really blue you know.";
            break;
        case 'indigo':
            outputInfo = "Indigo means 'from India' and originates from a dye color.";
            break;
        case 'violet':
            outputInfo = "Violet has long been associated with royalty because the dye was so expensive...Neato!";
            break;
        default:
            outputInfo = "I don't know anything about the color '" + userInput + "'";
            break;
    }
    return outputInfo;

}

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var inputColor = prompt("please enter a color: ").toLowerCase();

// alert(analyzeColor(inputColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalPrice) {
    console.log(luckyNumber);
    var discountPrice;
    switch (luckyNumber) {
        case 1:
            discountPrice = totalPrice * .9;
            break;
        case 2:
            discountPrice = totalPrice * .75;
            break;
        case 3:
            discountPrice = totalPrice * .65;
            break;
        case 4:
            discountPrice = totalPrice * .5;
            break;
        case 5:
            discountPrice = 0;
            break;
        default:
            discountPrice = totalPrice;
            break;
    }
    return discountPrice;
}

// calculateTotal(0, 100) // returns 100
// calculateTotal(4, 100) // returns 50
// calculateTotal(5, 100) // returns 0
// calculateTotal(6, 100) // returns 100

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

// console.log(calculateTotal(luckyNumber, 100));