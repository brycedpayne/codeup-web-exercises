"use strict";

// console.log("Hello from External JavaScript");
//
// alert("Welcome to my Website!");
//
// var color = prompt("What is your favorite color?");
//
// alert("Great, " + color + " is my favorite color too!");





// var lMDays = Number(prompt("How Many days would you like to rent The Little Mermaid?"));
// console.log(lMDays);
//
// var bBDays = Number(prompt("How many days would you like to rent Brother Bear?"));
// console.log(bBDays);
//
// var hercDays = Number(prompt("How many days would you like to rent Hercules?"));
// console.log(hercDays);
//
// var pricePerDay = Number(prompt("How much is the per day rental?"));
// console.log(pricePerDay);
//
// var total = (lMDays + bBDays + hercDays) * pricePerDay;
// alert("Little Mermaid: " + lMDays + " day(s)\n" + "Brother Bear: " + bBDays + " day(s)\n" + "Hercules: " + hercDays + " day(s)\n" + "Total: $" + total);





// var googWage = parseFloat(prompt("How much per hour does Google pay?"));
// var amaWage = parseFloat(prompt("How much per hour does Amazon pay?"));
// var fbWage = parseFloat(prompt("How much per hour does Facebook pay?"));
//
// var googHrs = parseFloat(prompt("How many hrs did you work for Google?"));
// var amaHrs = parseFloat(prompt("How many hrs did you work for Amazon?"));
// var fbHrs = parseFloat(prompt("How many hrs did you work for Facebook?"));
//
// var googPay = (googHrs * googWage);
// var amaPay = (amaHrs * amaWage);
// var fbPay = (fbHrs * fbWage);
//
// var totalComp = googPay + amaPay + fbPay;
//
// alert("Google pays you: $" + googPay.toFixed(2) + "\n" + "Amazon pays you: $" + amaPay.toFixed(2) + "\n" + "Facebook pays you: $" + fbPay.toFixed(2) + "\n" + "Total pay is: $" + totalComp.toFixed(2));





var fullClass = confirm("Is the class full?");
var conflict = confirm("Do you have any conflicts");
var notAllowed = fullClass || conflict;

if (notAllowed == true) {
    alert("Sorry, you cannot register for this class.")
} else {
    alert("You can register for this class!")
};





// var isNotExpired = confirm("Is the offer valid?");
// var items = parseInt(prompt("How many items do you have?"));
// var isPremium = confirm("Are you a premium member?");
//
// var isValid = (items >= 2 || isPremium === true) && isNotExpired === true;
//
// if (isValid == true) {
//     alert("Coupon is valid.")
// } else {
//     alert("Sorry, coupon cannot be used.")
// };
















