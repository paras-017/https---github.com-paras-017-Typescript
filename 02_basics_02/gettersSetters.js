var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "New York";
    }
    User.prototype.deleteToken = function () {
        console.log('Token deleted');
    };
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("Couse count should be greater than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var paras = new User("email@email.com", "Peter Parker");
console.log(paras);
