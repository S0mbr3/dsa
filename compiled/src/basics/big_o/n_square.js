"use strict";
function sum_char_codes_squared(n) {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            sum += n.charCodeAt(j);
        }
    }
    return sum;
}
console.log(sum_char_codes_squared("welcome from 0(N^2) as you can see this loop is itering n.n times "));
