"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function binary_search(arr, number_tosearch) {
    function search(min, max) {
        if (min > max)
            return false;
        const index = min + Math.floor((max - min) / 2);
        if (number_tosearch < arr[min] || number_tosearch > arr[max])
            return false;
        else if (number_tosearch === arr[index])
            return true;
        else if (number_tosearch > arr[index])
            return search(index + 1, max);
        else if (number_tosearch < arr[index])
            return search(min, index - 1);
        return false;
    }
    return search(0, arr.length - 1);
}
exports.default = binary_search;
