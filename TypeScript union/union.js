"use strict";
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(30, 20), combine("Abid", "Malik"));
console.log("Do you enjoy learning?");
let answer = "Maybe";
if (answer == answer) {
    console.log("You are tough!");
}
