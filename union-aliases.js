"use strict";
function combine(n1, n2, resultType) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    if (resultType === "asNumber") {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combinedAges = combine(30, 26, "asNumber");
var combinedStringAges = combine("30", "26", "asNumber");
var combinedNames = combine("Artur", "Rebecca", "asText");
console.log(combinedAges);
console.log(combinedStringAges);
console.log(combinedNames);
