"use strict";
// Enums : enumeration," is a data type that allows you to define a set of named constants. Enums are useful when you have a fixed set of values that a variable can take, such as days of the week, months of the year, or status codes.                --ChatGPT
Object.defineProperty(exports, "__esModule", { value: true });
/*
enum DaysofWeek {
    Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
}
let today: DaysofWeek = DaysofWeek.Wednesday;
console.log(today);
*/
/*
*/
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status["Inactive"] = "123jfsdi";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
// const myStatus = Status.Pending
var myStatus = Status.Inactive;
console.log(myStatus);
