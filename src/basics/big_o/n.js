"use strict";
function sum_char_codes(n) {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }
    return sum;
}
function sum_char_codes_bis(n) {
    // constants are in theory negligable the goal is to understand how it growth not to have real world calculus permances (pratically it's not negligable and sometimes constants are slower than squared)
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }
    return sum;
}
function sum_char_codes_bis_bis(n) {
    // Worst case E is at the end of the string so it's again a O(N)
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        const charCode = n.charCodeAt(i);
        // Capital E
        if (charCode === 69) {
            return sum;
        }
        sum += charCode;
    }
    return sum;
}
console.log(sum_char_codes("Hello from O(N)"));
console.log(sum_char_codes_bis("Still a O(N) constants are dropped :D no need to say O(2N) "));
console.log(sum_char_codes_bis_bis("Still again a O(N) we always mesure worst case scenario instead of best or average"));
