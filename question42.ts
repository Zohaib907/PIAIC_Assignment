// Q42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Function to show magicians' names
function displayMagicians(magicians: string[]){
    for (let i=0; i< magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
// Function to make magicians great
function makeGreat(magicians: string[]){
    var greatMagiciansArr =[];
    for (let i=0; i< magicians.length; i++) {
        greatMagiciansArr.push(`${magicians[i]} the Great`);
    }
  
    return greatMagiciansArr;
}
  
// Array of magician's names
var magiciansNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
// Call make_great() to modify the magician names
var greatMagicians :string []  =makeGreat(magiciansNames);
  
// Call the function to display the great magicians' names
console.log("Great Magicians' Names:");
displayMagicians(greatMagicians);