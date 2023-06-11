"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = 'MOZ';
        this.email = email;
        this.name = email;
    }
    return User;
}());
var paras = new User("paras@gmail.com", "Paras");
console.log(paras);
console.log(paras.city);
