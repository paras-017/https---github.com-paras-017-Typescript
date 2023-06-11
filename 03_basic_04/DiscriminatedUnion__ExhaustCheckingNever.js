"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function area(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape.kind === "square") {
        return Math.pow(shape.side, 2);
    }
    else if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
}
