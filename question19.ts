// Q19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestList:string[] = ["ali", "omar", "usman", "hassan", "hussain"];
console.log(`You are inviting ${guestList.length} People to dinner.`);
for(let i=0; i<guestList.length; i++){
    console.log(`Dear ${guestList[i]} you are invited for dinner and celeberation!!`);
}