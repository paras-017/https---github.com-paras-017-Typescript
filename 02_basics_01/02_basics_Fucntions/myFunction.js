"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return 'hello there'
}
addTwo(5);
// function as string argument
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('hello');
// arrow function as default value argument
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser('paras', 'paras@gmail.com');
// function that can return different types 
// case:1
// function getValue(myVal:number):boolean{
//     if(myVal > 0){
//         return true;
//     }
//     return '200 OK'
// }
// const Hello = (val:string | number):string| number => {                            #multiple types
//     return ``
// }
// console.log(Hello(1));
/*
// const heros = ['thor', 'spiderman', 'jack', 'codewithharry', 'technical thapa', 'technical suneja']
const heros = ['thor', 'spiderman', 'jack', 'codewithharry', 'technical thapa', 'technical suneja', 11]
heros.map((hero) => {
    return `${hero} is hero`
})
export {}
*/
/*
// function with void
function consoleError(errMsg:string):void{                           //void means it's not going to return anything ever
    console.log('errMsg');
    // return 1
}
*/
// function with never 
function consoleError(errMsg) {
    throw new Error(errMsg);
}
