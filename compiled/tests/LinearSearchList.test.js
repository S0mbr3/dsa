"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const linear_search = require('@compiled/search/LinearSearchList')
const LinearSearchList_1 = __importDefault(require("@compiled/search/LinearSearchList"));
test('Search in a list linearaly', () => {
    const arr = [1, 50, 123, 1454, 1231, 23, 4, 1234112];
    expect((0, LinearSearchList_1.default)(arr, 50)).toBe(true);
    expect((0, LinearSearchList_1.default)(arr, 1)).toBe(true);
    expect((0, LinearSearchList_1.default)(arr, 54)).toBe(false);
    expect((0, LinearSearchList_1.default)(arr, 1231)).toBe(true);
    expect((0, LinearSearchList_1.default)(arr, 12)).toBe(false);
    expect((0, LinearSearchList_1.default)(arr, 1234112)).toBe(true);
});
