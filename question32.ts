// Q32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// List of current usernames
var currentUsers: string[] = ["Eric", "Alice", "John", "Bob", "Mary"];

// List of new usernames
var newUsers: string[] = ["Mary", "David", "John", "Sarah", "Emily"];

// Loop through the new_users list
for (let i=0; i< newUsers.length; i++) {
  // Convert new username and existing usernames to lowercase for case insensitivity
  var newUserNameLower = newUsers[i].toLowerCase();
  var currentUsersLower = currentUsers.map((user) => user.toLowerCase());

  // Check if the lowercase new username is in the list of lowercase current usernames
  if (currentUsersLower.includes(newUserNameLower)) {
    console.log(`Sorry, ${newUsers[i]} is already taken. Please enter a new username.`);
  } else {
    console.log(`${newUsers[i]} is available.`);
  }
}