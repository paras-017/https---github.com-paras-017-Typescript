"use strict";
// Generics a;low you to create reusable components and functions that can work with a variety of data types. They provide a way to define placeholders for types that will be specified when the component or function is used. This allows you to write more flexible and type-safe code.
Object.defineProperty(exports, "__esModule", { value: true });
var score = [1, 2, 3, 4534, 35];
var name = ["John", "Mary", "Mike", "Jack"];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
function identityFive(obj) {
    return obj;
}
var value = identityFive({ bottle_name: "Cock", bottle_type: 1 });
console.log(value);
