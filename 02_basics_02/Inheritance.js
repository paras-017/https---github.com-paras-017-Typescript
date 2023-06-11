"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        // private city: string='Noida';
        this.city = 'Noida'; //protected means that you can access this property inside inherited child class but outside of class is still big no no
    }
    Object.defineProperty(User.prototype, "greeting", {
        get: function () {
            return "hello goodmorning ".concat(this.name, " .You are in ").concat(this.city);
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.country = 'India';
        return _this;
    }
    //You can't access private property of a parent class
    SubUser.prototype.changeCity = function () {
        this.city = 'Muzaffarnagar';
    };
    return SubUser;
}(User));
