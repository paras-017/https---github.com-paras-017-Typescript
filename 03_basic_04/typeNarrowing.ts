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

/*
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
*/

/*
function logValue(x: Date | string){
    if(x instanceof Date){                                      //instanceof can be used in new keyword like if its a class
        console.log(x.getDay())
    }else{
        console.log(x.toLowerCase());
    }

}
*/

type fish = {swim(): void};
type bird = {fly:()=> void};
export {}