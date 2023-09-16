// Q17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestList:string[] = ["arslan", "ali", "omar","qasim", "usman", "hassan", "hussain","waqar"];
// message for small table
console.log("Bad News! the dinner table wont arrive at a time, so we can only invite two peoples only");
// Remove guests from your list one at a time until only two names remain
while(guestList.length >2){
    const removeGuest = guestList[guestList.length -1];
    console.log(`Sorry, ${removeGuest} you can’t invite them to dinner.`);
    guestList.pop(); // removes last element in array
}
// Print a message to each of the two people still on your list
for(let i=0; i<guestList.length; i++){
    console.log(`Dear ${guestList[i]} you are invited for dinner and celeberation!!`);
}
// Remove the last two names from your list
guestList.pop();
guestList.pop();
console.log(`Updated guest list${guestList}`);