"use strict";
// let myName : string = 'paras'
Object.defineProperty(exports, "__esModule", { value: true });
// **************************Function Types**************************
// Parameter type annotation
function greet(name) {
    console.log(name);
}
// greet(42) //would be a runtiime error if executed
// Return type annotation
function greet2() {
    return 42;
}
// **************************Object Types**************************
function printCoords(pt) {
    console.log(pt.x);
    console.log(pt.y);
}
// object with optional properties
function printName(user) {
    console.log("My name is ".concat(user.first, " ").concat(user.last, " and I am ").concat(user.age));
}
// both OK
// printName({first:'John', last:'Doe'});
// printName({first:'John', last:'Doe', age:30});
function printName2(obj) {
    var _a;
    //   console.log(obj.last.toUpperCase());     //'obj.last' is possibly 'undefined'.
    //   if(obj.last !== undefined) console.log(obj.last.toUpperCase());  
    //                                              or
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
// printName2({first:'John', last:'Doe'});
// **************************Union Types**************************
function printID(id) {
    return id;
}
function printID2(id) {
    // return id.toUpperCase()             //TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string
    if (typeof id === 'string')
        console.log(id.toUpperCase());
    else
        console.log(id);
}
function printID3(x) {
    if (Array.isArray(x)) {
        console.log("hello ".concat(x.join(' and ')));
    }
}
;
printID3(['paras', 'palak', 'dream']);
function cords1(pt) { } //it’s common to want to use the same type more than once and refer to it by a single name.
function cords2(pt) { }
function cords3(pt) { }
function cords4(pt) { }
function cords5(pt) { }
function cords6(pt) { }
