"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let found = false;
function binary_search(arr, needle, index) {
    // error("This is an error");
    //   log("MAIS VA TE FAIRE")
    //console.debug("nique ta mere")
    //log(needle, arr[index])
    //console.log(`${needle}, ${arr[index]}`)
    console.debug(`needle: ${needle}, Index: ${index} Value: ${arr[index]}`);
    if (needle < arr[0] || needle > arr[arr.length]) {
        found = false;
    }
    else if (arr[index] == needle) {
        found = true;
    }
    else if (needle > arr[index])
        binary_search(arr, needle, Math.floor((arr.length - index + 1) / 2));
    else if (needle < arr[index])
        binary_search(arr, needle, Math.floor((index - 1) / 2));
    return found;
}
exports.default = binary_search;
