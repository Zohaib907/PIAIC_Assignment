// Q15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
var guestList:string[] = ["ali", "omar","asad", "usman", "hassan", "hussain"];
// Find guest who can't make it
var guestsCantMakeit = "asad";
console.log(`${guestsCantMakeit} can't make out dinner`);
const index:number = guestList.indexOf(guestsCantMakeit);
const newGuest:string = "ahmed";
// Replace guest who cant make it with new guest
guestList.splice(index, 1, newGuest); // remove asad from the list
// Send updating Invitation
for(let i=0; i<guestList.length; i++){
    console.log(`Dear ${guestList[i]} you are invited for dinner and celeberation!!`);
}