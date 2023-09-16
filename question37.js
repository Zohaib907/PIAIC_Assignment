"use strict";
// Q37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function maketShirt(size = "Large", message = "I love TypeScript") {
    console.log(`You've ordered a ${size}-sized T-shirt with the following message: "${message}".`);
}
// Create a large shirt with the default message
maketShirt();
// Create a medium shirt with the default message
maketShirt("Medium");
// Create a small shirt with a different message
maketShirt("Small", "TypeScript is awesome!");
