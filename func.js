"use strict";

// function  out_log() {
//     console.log("Hello")
// }
//
// out_log();

let car = createCar ("Toyota", "Black");

function createCar(model, color) {
    return {
        model: model,
        color: color
    };
}

console.log(car.model);