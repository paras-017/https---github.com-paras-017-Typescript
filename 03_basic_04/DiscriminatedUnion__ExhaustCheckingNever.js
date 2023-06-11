"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type Shape = Circle | Square | Rectangle | hexagon;           //hexagon is missing in switch show it run default case so that ou code give error or can warn that soemthing is wrong/exhaustive
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * Math.pow(shape.radius, 2);
        case 'square':
            return Math.pow(shape.side, 2);
        case 'rectangle':
            return shape.height * shape.width;
        default:
            var defaultShape = shape;
            return defaultShape;
    }
}
