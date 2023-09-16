// Q24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

//Tests for equality and inequality with strings
let fruit1:string = 'apple';
let fruit2:string = 'banana';

console.log("Test 11: Is fruit1 == 'apple'? I predict True.");
console.log(fruit1 == 'apple');

console.log("Test 12: Is fruit1 != fruit2? I predict True.");
console.log(fruit1 != fruit2);

console.log("Test 13: Is fruit1 == 'banana'? I predict False.");
console.log(fruit1 == 'banana');

console.log("Test 14: Is fruit1 !== 'banana'? I predict True.");
console.log(fruit1 !== 'banana');

// Tests using the lower case function
let text1:string = 'Hello';
let text2:string = 'hello';

console.log("Test 15: Is text1.toLowerCase() == 'hello'? I predict True.");
console.log(text1.toLowerCase() == 'hello');

console.log("Test 16: Is text1.toLowerCase() != text2? I predict False.");
console.log(text1.toLowerCase() != text2);

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let number1:number = 10;
let number2:number = 5;

console.log("Test 17: Is number1 > number2? I predict True.");
console.log(number1 > number2);

console.log("Test 18: Is number1 < number2? I predict False.");
console.log(number1 < number2);

console.log("Test 19: Is number1 >= number2? I predict True.");
console.log(number1 >= number2);

console.log("Test 20: Is number1 <= number2? I predict False.");
console.log(number1 <= number2); 

// Tests using "and" and "or" operators

let isSunny:boolean = true;
let isWeekend:boolean = false;

console.log("Test 21: Is itSunny && isWeekend? I predict False.");
console.log(isSunny && isWeekend);

console.log("Test 22: Is itSunny || isWeekend? I predict True.");
console.log(isSunny || isWeekend);


// Test whether an item is in a array

let fruits:string[] = ["apple", "banana", "cherry"];

console.log("Test 23: Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes("banana")); 

//Test whether an item is not in a array

console.log("Test 25: Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes("grape"));