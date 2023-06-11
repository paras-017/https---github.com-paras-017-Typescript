/*
interface Circle {
    radius: number;
}
interface Rectangle {
    width: number;
    height: number;
}
function calcArea(shape: Circle | Rectangle): number {
    if('radius' in shape){
       return Math.PI * shape.radius * shape.radius;
    }else{
        return shape.width * shape.height;
    }
    }

const circle:Circle = {radius:5}
console.log(calcArea(circle));
 */


interface User{
    name: string,
    email: string;
}
interface Admin{
    name: string,
    email: string;
    isAdmin: boolean;
}

function isAdminAccount(account: User | Admin){
    if('isAdmin' in account){
        return account.isAdmin
    }
}
export {}