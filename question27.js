"use strict";
// Q27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
function checkColorAllien(color) {
    if (color === 'green') {
        console.log("Congratulations! You just earned 5 points for shooting alien that is green.");
    }
    else if (color === 'yellow') {
        console.log("Congratulations! You just earned 10 points for shooting alien that is yellow.");
    }
    else if (color === 'red') {
        console.log("Congratulations! You just earned 15 points for shooting alien that is not green.");
    }
}
// First version
let inputAlienColor = 'green';
checkColorAllien(inputAlienColor);
// Second version
inputAlienColor = 'yellow';
checkColorAllien(inputAlienColor);
// third version
inputAlienColor = 'red';
checkColorAllien(inputAlienColor);
