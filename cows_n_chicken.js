'use strict'

function printFarmInventory(cows, chickens) {

    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = '0' + cowString 
    }
    console.log(`${cowString} cows`);

    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = '0' + chickenString
    }
    console.log(chickenString + ' chickens');

}

printFarmInventory(5,44)