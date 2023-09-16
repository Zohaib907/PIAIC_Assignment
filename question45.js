"use strict";
// Q45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function storeCarInfo(manufacturer, model, optionalInfo) {
    var carInfo = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var key in optionalInfo) {
        if (optionalInfo.hasOwnProperty(key)) {
            carInfo[key] = optionalInfo[key];
        }
    }
    return carInfo;
}
// Call the function with required information and optional key-value pairs
var optionalInfo = { color: "Blue", year: 2022, features: ["Navigation", "Sunroof"] };
var carObj = storeCarInfo("Toyota", "Camry", optionalInfo);
// Print the car information
console.log(carObj);
