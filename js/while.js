"use strict"


// ***************************************************** exponent problem ***************************************
var i = 1;

while (i <= 16) {
    console.log(Math.pow(2, i));
    i++;
}

// ***************************************************** ice cream cones prob ***************************************


var allCones = Math.floor(Math.random() * 50) + 50; //sets how many cones have to be sold.

do {
    console.log('You have ' + allCones + ' to sell'); //how many cones have to be sold
    var conesSold = (Math.floor(Math.random() * 5) + 1); //sets how many cones are being bought.

    if (allCones === 0) {
        console.log('Yay! I sold them all!');
        allCones = allCones - 1;
    } else if (allCones - conesSold < 0) {
        console.log('Cannot sell you ' + conesSold + ' cones I only have ' + allCones + '...');
    }  else {
        console.log(conesSold + ' cones sold');
        allCones = allCones - conesSold;
    }

} while ( allCones > (-1));

// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough con
// Yay! I sold them all! // If there are no more cones