"use strict";
// Q16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestList = ["ali", "omar", "usman", "hassan", "hussain"];
// Print message about big table
console.log("Good news! We found big new table");
// add a guest at beginning
guestList.unshift("arslan");
// add new guest at middle 
guestList.splice(Math.floor(guestList.length / 2), 0, "qasim");
// use append to add at last
guestList.push("waqar");
// Print invitation
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]} you are invited for dinner and celeberation!!`);
}
