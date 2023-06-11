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
// In TypeScript, the abstract keyword is used to define abstract classes and abstract methods within those classes. An abstract class is a class that cannot be instantiated directly and serves as a blueprint for other classes to inherit from
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    TakePhoto.prototype.sayCheese = function () {
        console.log('say cheeseee!!!!');
    };
    return TakePhoto;
}());
// const paras = new TakePhoto('front G_Cam4.5', 'moonlight')                       //can't use TakePhoto class
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(cameraMode, filter) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        return _this;
    }
    Instagram.prototype.getSepia = function () {
        console.log('I am Sepia method');
    };
    return Instagram;
}(TakePhoto));
var paras = new Instagram('front G_Cam4.5', 'moonlight');
console.log(paras.sayCheese());
