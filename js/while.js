"use strict"

var i = 1;

while (i <= 16) {
    console.log(Math.pow(2, i));
    i++;
}

//Ice cream cone problem

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

// console.log(allCones);

do {
    console.log('You have ' + allCones + ' to sell');
    var conesSold = (Math.floor(Math.random() * 5) + 1);
    // console.log(allCones);
    // console.log(conesSold);


    if (allCones === 0) {
        console.log('Yay! I sold them all!');
        allCones = allCones - 1;
    } else if (allCones - conesSold < 0) {
        console.log('Cannot sell you ' + conesSold + ' cones I only have ' + allCones + '... ');
    }  else {
        console.log(conesSold + ' cones sold');
        allCones = allCones - conesSold;
    }

} while ( allCones > (-1));

// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough con
// Yay! I sold them all! // If there are no more cones