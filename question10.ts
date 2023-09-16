// Q10.Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
console.log("First Program:");
// Program: Apply white space and strip string
// Author: Zohaib Mahmood
// Date: September 16, 2023
// Description: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces.

var personName:string = "Zohaib";
console.log("Person name: "+personName);
// Display name with whitespace
var personNameWithWhiteSpace:string = "\t\n  "+personName+"  \t\n";
console.log("Person name with whitespace: "+personNameWithWhiteSpace);
// Display name without whitespace
var strippedName = personNameWithWhiteSpace.trim();
console.log("Person name striping whitespace: "+strippedName);


console.log("2nd Program:");
// Program: Apply Arithmetic operations
// Author: Zohaib Mahmood
// Date: September 16, 2023
// Description: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. 
// Be sure to enclose your operations in print statements to see the results.

// Addition
console.log(4 + 4);
// Subtraction
console.log(16 - 8);
// Multiplication
console.log(2 * 4);
// Division
console.log(64 / 8);
