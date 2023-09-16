"use strict";
// Q43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function displayedMagicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Function to make magicians great
function makingGreat(magicians) {
    var greatMagiciansArr = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagiciansArr.push(`${magicians[i]} the Great`);
    }
    return greatMagiciansArr;
}
// Array of magician's names
var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call make_great() to modify the magician names
var great = makingGreat(magicians);
// Call original array
console.log("Original Magicians' Names:");
displayedMagicians(magicians);
// Call the function to display the great magicians' names
console.log("Great Magicians' Names:");
displayedMagicians(great);
