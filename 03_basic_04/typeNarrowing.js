function calcArea(shape) {
    if ('radius' in shape) {
        return Math.PI * shape.radius * shape.radius;
    }
    else {
        return shape.width * shape.height;
    }
}
var circle = { radius: 5 };
console.log(calcArea(circle));
