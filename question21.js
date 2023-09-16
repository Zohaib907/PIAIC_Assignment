"use strict";
// Q21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var countries = [
    { name: "Afghanistan", capital: "Kabul" },
    { name: "Albania", capital: "Tirana" },
    { name: "Algeria", capital: "Algiers" },
    { name: "Pakistan", capital: "Islamabad" },
];
console.log("Countries and their Capital:");
for (let i = 0; i < countries.length; ++i) {
    console.log(`Country: ${countries[i].name}  Capital: ${countries[i].capital}`);
}
