'use strict';
//
// ***************************************************** Mult table ***************************************


function showMultiplicatioTable(numInput) {
    for (var i = 1; i <= 10; i++) {
        console.log(numInput + ' * ' + i + ' = ' + (numInput * i));
    }
    return numInput;
}



showMultiplicatioTable(7);
//
// ********************************************* random odd/even checker ***************************************

//
for (var i = 0; i < 10; i++) {
    var randomNum = (Math.floor(Math.random() * 180) + 20); // (Math.floor(Math.random() * 20) + 180)
    if (randomNum % 2 === 0) {
        console.log(randomNum + ' is even');
    } else {
        console.log(randomNum + ' is odd');
    }
}


// ***************************************************** number tree ***************************************
function numberStack() {

    var stack = '1';

    for (var i =1;i<=9;i++) {

        console.log(parseInt(stack.repeat(i)) * i);
    }
}
 numberStack();






function numberBuilder() {
    var bigNum = 0
    for (var i = 1; i <= 9; i++) {

        bigNum = (bigNum * 10) + 1;
        console.log(bigNum * i);
    }
}
numberBuilder();
//


// ***************************************************** numbers not div by 5 ***************************************

for (var i = 100; i > 0; i--) {

	if (i % 5 !== 0) {
		// skipping all numbers not divisible by 5;
		continue;
	}

	console.log(i);
}
