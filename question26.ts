// Q26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.
function checkColor(color: string){
	if (color === 'green') {
	  console.log("Congratulations! You just earned 5 points for shooting alien that is green.");
	}
    else{
        console.log("Congratulations! You just earned 10 points for shooting alien that is not green.");
    }
}
// First version
let alienColor:string = 'green';
checkColor(alienColor);
// Second version
alienColor = 'red';
checkColor(alienColor);