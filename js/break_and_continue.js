'use strict';

function numSkipper() {
    var input = parseInt(prompt('please enter an odd number between 0 and 50'))
    console.log(input + ' is the number to skip');

    for (var i = 1; i < 50; i++) {
        if (input % 2 === 0 || input > 50 || input < 0) {
            alert(input + ' is not a valid input!')
            break;
        }
        if (i === input) {
            console.log('Yikes! Skipping number: ' + i);
            continue
        }
        if (i % 2 === 0) {
            continue;
        }
        console.log('here is an odd number: ' + i);
    }
}

numSkipper()