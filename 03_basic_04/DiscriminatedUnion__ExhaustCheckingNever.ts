interface Circle{
    kind: "circle",
    radius: number
}
interface Square{
    kind: "square",
    side: number
}
interface Rectangle{
    kind: "rectangle",
    width: number,
    height: number
}
/*
type Shape = Circle | Square ;
function area(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2;
    }
        return shape.side ** 2;
}
*/

//Exhaustiveness Checking on TypeScript refers to the ability of the TypeScript compiler to detect if a switch statement or an enum is not exhaustive, meaning that it does not cover all possible cases. This checking helps ensure that you handle all possible values or variants of a type, reducing the likelihood of runtime errors.
type Shape = Circle | Square | Rectangle;
// type Shape = Circle | Square | Rectangle | hexagon;           //hexagon is missing in switch show it run default case so that ou code give error or can warn that soemthing is wrong/exhaustive
function getArea(shape: Shape){
   switch(shape.kind){
    case 'circle':
        return Math.PI * shape.radius ** 2;
    case 'square':
        return shape.side ** 2;
    case 'rectangle':
        return shape.height * shape.width;
    default:
        const defaultShape:never = shape;
        return defaultShape;
   }
}



export {}