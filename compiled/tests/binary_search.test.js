"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const binary_search_1 = __importDefault(require("@compiled/search/binary_search"));
test('should find if a number is in an array', () => {
    const arr = [-1321, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 12131];
    expect((0, binary_search_1.default)(arr, 1)).toBe(true);
    expect((0, binary_search_1.default)(arr, 2)).toBe(true);
    expect((0, binary_search_1.default)(arr, 3)).toBe(true);
    expect((0, binary_search_1.default)(arr, 4)).toBe(true);
    expect((0, binary_search_1.default)(arr, 5)).toBe(true);
    expect((0, binary_search_1.default)(arr, 5)).toBe(true);
    expect((0, binary_search_1.default)(arr, 16)).toBe(true);
    expect((0, binary_search_1.default)(arr, 17)).toBe(false);
    expect((0, binary_search_1.default)(arr, 0)).toBe(false);
    expect((0, binary_search_1.default)(arr, 100)).toBe(false);
    expect((0, binary_search_1.default)(arr, -100)).toBe(false);
    expect((0, binary_search_1.default)(arr, 1230)).toBe(false);
    expect((0, binary_search_1.default)(arr, 12390)).toBe(false);
    expect((0, binary_search_1.default)(arr, -12)).toBe(false);
    expect((0, binary_search_1.default)(arr, -1321)).toBe(true);
    expect((0, binary_search_1.default)(arr, 999)).toBe(false);
    expect((0, binary_search_1.default)(arr, 12131)).toBe(true);
});
