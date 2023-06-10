// let myName : string = 'paras'
// Parameter type annotation
function greet(name) {
    console.log(name);
}
// greet(42) //would be a runtiime error if executed
// Return type annotation
function greet2() {
    return 42;
}
// Object Types
function printCoords(pt) {
    console.log(pt.x);
    console.log(pt.y);
}
// object with optional properties
function printName(user) {
    console.log("My name is ".concat(user.first, " ").concat(user.last, " and I am ").concat(user.age));
}
// both OK
printName({ first: 'John', last: 'Doe' });
printName({ first: 'John', last: 'Doe', age: 30 });
