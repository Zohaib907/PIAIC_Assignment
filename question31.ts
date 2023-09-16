// Q31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
var userFullNames: string[] = ["admin", "abdullah", "ali", "baber", "hassan"];

// Loop through the array and print greetings
for (let i=0; i< userFullNames.length; i++) {
  if (userFullNames[i] === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${userFullNames[i]}, thank you for logging in.`);
  }
}
// Remove all users
userFullNames = [];

if (userFullNames.length == 0){
    console.log("We need to find some users!")
}