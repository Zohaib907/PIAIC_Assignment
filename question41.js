"use strict";
// Q41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Function to show magicians' names
function showMagicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the function to display the magician's names
console.log("Magicians' Names:");
showMagicians(magicianNames);
