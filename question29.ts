// Q29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Array of favorite fruits
const favoriteFruits: string[] = ["apple", "banana", "strawberry"];

// Check if "banana" is in the array
if (favoriteFruits.includes("banana")) {
  console.log("You really like bananas!");
}

// Check if "apple" is in the array
if (favoriteFruits.includes("apple")) {
  console.log("You really like apples!");
}

// Check if "kiwi" is in the array
if (favoriteFruits.includes("kiwi")) {
  console.log("You really like kiwis!");
}

// Check if "strawberry" is in the array
if (favoriteFruits.includes("strawberry")) {
  console.log("You really like strawberries!");
}

// Check if "mango" is in the array
if (favoriteFruits.includes("mango")) {
  console.log("You really like mangoes!");
}
