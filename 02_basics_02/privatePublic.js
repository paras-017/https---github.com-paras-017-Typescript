"use strict";
/*
class User {
    public email:string
    name:string                                                //default  is public
    private readonly  city:string = 'MOZ'
    constructor(email:string , name:string){
        this.email = email;
        this.name = email;
    }
}

const paras = new User("paras@gmail.com", "Paras");
console.log(paras);
// console.log(paras.city);
*/
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this.city = 'MOZ';
    }
    return User;
}());
var paras = new User("paras@gmail.com", "Paras");
console.log(paras);
