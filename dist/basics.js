"use strict";
console.log("TEST");
function add(n1, n2, showResult) {
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
add(1, 3, true);
