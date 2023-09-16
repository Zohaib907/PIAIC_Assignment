// Q35.Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// Array of animals with a common characteristic
var animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the names of each animal using a for loop
console.log("Common characteristic: These animals can be great pets.");
console.log("Animals with a common characteristic:");
for (let i=0; i< animals.length; i++) {
  console.log(animals[i]);
}

// Print statements about each animal
console.log("More about these animals:");
for (let i=0; i< animals.length; i++) {
  console.log(`A ${animals[i].toLowerCase()} would make a great pet.`);
}

// Additional sentence about the common characteristic
console.log("Any of these animals would make a great pet!");
