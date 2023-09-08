"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const two_crystal_balls_1 = __importDefault(require("@compiled/search/two_crystal_balls"));
test("two crystal balls", function () {
    let idx = Math.floor(Math.random() * 10000);
    const data = new Array(10000).fill(false);
    for (let i = idx; i < 10000; ++i) {
        data[i] = true;
    }
    expect((0, two_crystal_balls_1.default)(data)).toEqual(idx);
    expect((0, two_crystal_balls_1.default)(new Array(821).fill(false))).toEqual(-1);
});
