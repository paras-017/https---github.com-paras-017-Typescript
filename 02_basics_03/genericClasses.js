"use strict";
// Simple generic example
/*
function anotherFunction<T,U>(valOne:T,valTwo:U):object{
    return {valOne, valTwo};
}
anotherFunction(1, 'hello')
*/
Object.defineProperty(exports, "__esModule", { value: true });
var sellAble = /** @class */ (function () {
    function sellAble() {
        this.cart = [];
    }
    sellAble.prototype.addToCart = function (products) {
        this.cart.push(products);
    };
    return sellAble;
}());
var myArr = new sellAble();
myArr.addToCart(5);
myArr.addToCart('hello');
myArr.addToCart(['hello123', 234]);
console.log(myArr);
