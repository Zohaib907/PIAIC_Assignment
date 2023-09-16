"use strict";
// Q22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var cars = ["toyota", "audi", "Tesla", "KIA"];
const errorIndex = 5;
console.log(`Car at Index ${errorIndex}: ${cars[errorIndex]}`);
// Correct
const validIndex = 1;
console.log(`Car at Index ${validIndex}: ${cars[validIndex]}`);
