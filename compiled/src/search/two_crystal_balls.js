"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function two_crystal_balls(breaks) {
    const jmp_amount = Math.floor(Math.sqrt(breaks.length));
    let jmp_index = jmp_amount;
    for (; jmp_index <= breaks.length; jmp_index += jmp_amount) {
        if (breaks[jmp_index])
            break;
    }
    if (breaks[jmp_index] == false)
        return -1;
    else {
        jmp_index -= jmp_amount;
        for (let i = 0; i < jmp_amount && jmp_index < breaks.length; ++jmp_index, ++i)
            if (breaks[jmp_index] == true)
                return jmp_index;
    }
    return -1;
}
exports.default = two_crystal_balls;
